import { useState, useEffect, useRef, ChangeEvent, DragEvent } from 'react';
import { Maximize2, Upload, Sparkles, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';
import { optimizeImage } from '../utils/imageOptimizer';

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  onOpenModal: (project: Project, currentImage: string | null) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage for custom user uploads, otherwise use defaultImage
  useEffect(() => {
    const saved = localStorage.getItem(`raynex_project_img_${project.id}`);
    if (saved && saved.startsWith('data:image/')) {
      setActiveImage(saved);
      return;
    }
    // Initialize with primary default image
    setActiveImage(project.defaultImage);
    setCandidateIndex(0);
    setImageFailed(false);
  }, [project]);

  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    try {
      const compressed = await optimizeImage(file, {
        maxWidth: 1000,
        maxHeight: 700,
        quality: 0.85,
        format: 'image/webp',
      });
      setActiveImage(compressed);
      setImageFailed(false);
      try {
        localStorage.setItem(`raynex_project_img_${project.id}`, compressed);
      } catch (err) {
        console.warn('LocalStorage quota exceeded', err);
      }
    } catch {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setActiveImage(result);
        setImageFailed(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    // Try the next candidate path if available
    if (candidateIndex + 1 < project.fallbackCandidates.length) {
      const nextIndex = candidateIndex + 1;
      setCandidateIndex(nextIndex);
      setActiveImage(project.fallbackCandidates[nextIndex]);
    } else {
      // All predefined paths failed; show the clean interactive dropzone
      setImageFailed(true);
      setActiveImage(null);
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div
      id={`portfolio-card-${project.id}`}
      className="group bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Hidden File Input for Direct Local Image Selection */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Image Presentation Container */}
      <div className="relative aspect-[16/10] bg-[#F7F9FC] border-b border-slate-100 overflow-hidden flex items-center justify-center">
        {/* Project Number Badge on Top-Left */}
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#0A2342]/90 backdrop-blur-xs text-white text-xs font-mono font-black shadow-xs">
            {project.id}
          </span>
        </div>

        {/* Category Badge on Top-Right */}
        <div className="absolute top-3.5 right-3.5 z-20">
          <span className="inline-block px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#2563EB] text-[11px] font-bold shadow-xs border border-blue-100">
            {project.category}
          </span>
        </div>

        {/* Screenshot Image or Dropzone */}
        {activeImage && !imageFailed ? (
          <div
            onClick={() => onOpenModal(project, activeImage)}
            className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenModal(project, activeImage);
            }}
            aria-label={`View full screenshot of ${project.title}`}
          >
            <img
              src={activeImage}
              alt={`${project.title} screenshot - Raynex Tech`}
              width="960"
              height="600"
              loading="lazy"
              decoding="async"
              onError={handleImageError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* WATERMARK OVERLAY */}
            <div className="portfolio-watermark pointer-events-none">
              <span className="portfolio-watermark-text text-sm sm:text-base md:text-lg">
                SAMPLE OF WORK - RAYNEX TECH
              </span>
            </div>

            {/* Desktop Hover Action Overlay */}
            <div className="hidden sm:flex absolute inset-0 bg-[#0A2342]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center justify-center gap-2.5 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(project, activeImage);
                }}
                className="px-3.5 py-2 rounded-lg bg-white text-[#0A2342] text-xs font-bold shadow-md hover:bg-slate-50 transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
                title="View full screenshot"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>View Full</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-3.5 py-2 rounded-lg bg-white/90 text-[#0A2342] text-xs font-semibold shadow-md hover:bg-white transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
                title="Change or upload project image"
              >
                <Upload className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Update</span>
              </button>
            </div>

            {/* Mobile Touch Indicator Pill (visible on touchscreens / small screens) */}
            <div className="sm:hidden absolute bottom-2.5 right-2.5 z-20 bg-[#0A2342]/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Maximize2 className="w-2.5 h-2.5 text-[#FF6B35]" />
              <span>Tap to Expand</span>
            </div>
          </div>
        ) : (
          /* Clean Upload Dropzone when image is being placed or selected */
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full h-full p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors border-2 border-dashed m-2 rounded-xl ${
              isDragging
                ? 'bg-blue-100/60 border-[#2563EB] scale-[0.99]'
                : 'hover:bg-blue-50/40 border-slate-200 hover:border-[#2563EB]/40'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 shadow-2xs ${
              isDragging ? 'bg-[#2563EB] text-white' : 'bg-[#F3F8FF] text-[#2563EB]'
            }`}>
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-[#0A2342] mb-0.5">
              {isDragging ? 'Drop Image Here' : 'Select or Drop Screenshot'}
            </p>
            <p className="text-[11px] text-[#64748B]">
              JPG, PNG or WebP • Maintains original proportions
            </p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#0A2342] mb-2 group-hover:text-[#2563EB] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-[#F7F9FC] text-[#475569] text-[11px] font-medium border border-slate-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => onOpenModal(project, activeImage)}
            className="min-h-[44px] py-2 text-xs sm:text-sm font-bold text-[#0A2342] hover:text-[#FF6B35] transition-colors flex items-center gap-1.5 cursor-pointer active:scale-98"
          >
            <span>Project Details</span>
            <span className="text-base font-semibold">&rarr;</span>
          </button>

          <span className="text-[11px] font-semibold text-[#64748B]">
            Raynex Tech
          </span>
        </div>
      </div>
    </div>
  );
}
