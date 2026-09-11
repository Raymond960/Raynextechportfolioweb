export interface OptimizeOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'image/webp' | 'image/jpeg';
}

/**
 * Compresses and downsizes images client-side before storing or rendering.
 * Prevents localStorage quota exhaustion, memory bloat, and slow rendering on lower-end devices.
 */
export async function optimizeImage(
  fileOrDataUrl: File | string,
  options: OptimizeOptions = {}
): Promise<string> {
  const {
    maxWidth = 1200,
    maxHeight = 1200,
    quality = 0.88,
    format = 'image/webp',
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    let objectUrl: string | null = null;

    img.onload = () => {
      try {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width <= 0 || height <= 0) {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          resolve(typeof fileOrDataUrl === 'string' ? fileOrDataUrl : '');
          return;
        }

        // Calculate scaled dimensions maintaining aspect ratio
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          resolve(typeof fileOrDataUrl === 'string' ? fileOrDataUrl : '');
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        let resultUrl: string;
        try {
          resultUrl = canvas.toDataURL(format, quality);
          if (!resultUrl.startsWith('data:image/webp') && format === 'image/webp') {
            resultUrl = canvas.toDataURL('image/jpeg', quality);
          }
        } catch {
          resultUrl = canvas.toDataURL('image/jpeg', quality);
        }

        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
        resolve(resultUrl);
      } catch (err) {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        reject(err);
      }
    };

    img.onerror = (err) => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      reject(err);
    };

    if (typeof fileOrDataUrl === 'string') {
      img.src = fileOrDataUrl;
    } else {
      objectUrl = URL.createObjectURL(fileOrDataUrl);
      img.src = objectUrl;
    }
  });
}
