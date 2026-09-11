import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Camera, Upload, Trash2, CheckCircle2, User } from 'lucide-react';
import { useProfilePhoto } from '../utils/useProfilePhoto';

interface ProfilePhotoFrameProps {
  variant?: 'hero' | 'about';
  sizeClass?: string;
  showStatusBadge?: boolean;
}

export default function ProfilePhotoFrame({
  variant = 'hero',
  sizeClass = 'w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72',
  showStatusBadge = true,
}: ProfilePhotoFrameProps) {
  const { photoUrl, handleFileSelect, removePhoto } = useProfilePhoto();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const triggerPicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Hidden native input for seamless file selection */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileInputChange}
        accept="image/*"
        className="hidden"
        aria-label="Upload personal profile photo"
      />

      {/* Main photo container with responsive framing */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={photoUrl ? undefined : triggerPicker}
        className={`relative ${sizeClass} rounded-3xl overflow-hidden border-2 transition-all duration-200 group select-none ${
          isDragging
            ? 'border-[#2563EB] ring-8 ring-blue-100/70 scale-[0.99] bg-blue-50/80 cursor-copy'
            : photoUrl
            ? 'border-blue-100 shadow-xl shadow-slate-200/60 ring-4 ring-slate-100/80 bg-slate-50'
            : 'border-dashed border-slate-300 hover:border-[#2563EB]/70 bg-gradient-to-b from-white to-[#F7F9FC] shadow-sm hover:shadow-md cursor-pointer'
        }`}
      >
        {photoUrl ? (
          /* Actual Uploaded Profile Photo */
          <>
            <img
              src={photoUrl}
              alt="Raymond Domnan - Raynex Tech"
              width="320"
              height="320"
              className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              loading={variant === 'hero' ? 'eager' : 'lazy'}
              fetchPriority={variant === 'hero' ? 'high' : 'auto'}
              decoding="async"
            />

            {/* Subtle Gradient protection at base */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

            {/* Hover / Tap Action Toolbar */}
            <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gradient-to-t from-slate-950/80 via-slate-900/60 to-transparent">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerPicker();
                }}
                className="px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-xs font-bold text-[#0A2342] shadow-sm inline-flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Change Photo</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removePhoto();
                }}
                title="Remove photo"
                aria-label="Remove photo"
                className="p-1.5 rounded-lg bg-white/95 hover:bg-red-50 text-red-600 shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        ) : (
          /* Clean Placeholder when no personal photo has been uploaded yet */
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-colors ${
                isDragging
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'bg-[#F3F8FF] text-[#2563EB] border border-blue-100 shadow-xs'
              }`}
            >
              {isDragging ? <Upload className="w-8 h-8 animate-bounce" /> : <User className="w-8 h-8" />}
            </div>

            <p className="text-sm font-extrabold text-[#0A2342] mb-1">
              {isDragging ? 'Drop Your Photo Here' : 'Professional Profile Photo'}
            </p>

            <p className="text-xs text-[#64748B] max-w-[200px] leading-relaxed mb-3">
              Drop your portrait here or click to select image
            </p>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-bold text-[#2563EB] shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-colors">
              <Camera className="w-3.5 h-3.5" />
              <span>Select Photo</span>
            </span>
          </div>
        )}
      </div>

      {/* Floating Status Pill */}
      {showStatusBadge && (
        <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-[#0A2342]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for New Projects</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />
        </div>
      )}
    </div>
  );
}
