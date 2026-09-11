import { useState, useEffect, useCallback } from 'react';
import { optimizeImage } from './imageOptimizer';

const STORAGE_KEY = 'raynex_personal_photo';
const EVENT_KEY = 'raynex_profile_photo_updated';

// Primary standard candidate path if hosted statically
const PRIMARY_CANDIDATE = '/profile.png';

export function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(!photoUrl);

  // Sync state across components or window
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setPhotoUrl(e.newValue);
      }
    };

    const handleCustomEvent = (e: CustomEvent<string | null>) => {
      setPhotoUrl(e.detail);
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener(EVENT_KEY as unknown as keyof WindowEventMap, handleCustomEvent as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener(EVENT_KEY as unknown as keyof WindowEventMap, handleCustomEvent as EventListener);
    };
  }, []);

  // Check primary static candidate only if not in localStorage
  useEffect(() => {
    if (photoUrl) {
      setIsLoading(false);
      return;
    }

    let isCancelled = false;

    const checkPrimaryCandidate = async () => {
      const exists = await checkImageExists(PRIMARY_CANDIDATE);
      if (exists && !isCancelled) {
        setPhotoUrl(PRIMARY_CANDIDATE);
        try {
          localStorage.setItem(STORAGE_KEY, PRIMARY_CANDIDATE);
        } catch {
          // ignore
        }
      }
      if (!isCancelled) {
        setIsLoading(false);
      }
    };

    checkPrimaryCandidate();

    return () => {
      isCancelled = true;
    };
  }, [photoUrl]);

  const updatePhoto = useCallback((newUrl: string) => {
    setPhotoUrl(newUrl);
    try {
      localStorage.setItem(STORAGE_KEY, newUrl);
    } catch (err) {
      console.warn('LocalStorage quota exceeded', err);
    }
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: newUrl }));
  }, []);

  const removePhoto = useCallback(() => {
    setPhotoUrl(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: null }));
  }, []);

  const handleFileSelect = useCallback(
    async (file: File) => {
      if (!file || !file.type.startsWith('image/')) {
        return;
      }
      try {
        // High-performance client-side downsampling & compression
        const compressed = await optimizeImage(file, {
          maxWidth: 800,
          maxHeight: 800,
          quality: 0.88,
          format: 'image/webp',
        });
        updatePhoto(compressed);
      } catch {
        // Fallback to direct read if canvas fails
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          updatePhoto(result);
        };
        reader.readAsDataURL(file);
      }
    },
    [updatePhoto]
  );

  return {
    photoUrl,
    isLoading,
    updatePhoto,
    removePhoto,
    handleFileSelect,
  };
}

function checkImageExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}
