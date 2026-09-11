import { useState, useEffect } from 'react';
import { X, ExternalLink, Maximize2, Tag, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  imageSrc: string | null;
  onClose: () => void;
}

export default function ProjectModal({ project, imageSrc, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A2342]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-[#0A2342]">
              PROJECT {project.id}
            </span>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-[#0A2342] leading-tight">
                {project.title}
              </h3>
              <span className="text-xs font-semibold text-[#2563EB]">
                {project.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-[#0A2342] hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Main Screenshot with Watermark */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-[#F8FAFC] flex items-center justify-center min-h-[220px] sm:min-h-[300px]">
            {imageSrc ? (
              <div className="relative w-full flex items-center justify-center bg-slate-900/5">
                <img
                  src={imageSrc}
                  alt={`${project.title} Screenshot - Raynex Tech`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[50dvh] sm:max-h-[60vh] w-auto max-w-full object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
                {/* Diagonal Watermark Overlay */}
                <div className="portfolio-watermark pointer-events-none">
                  <span className="portfolio-watermark-text text-sm sm:text-xl md:text-2xl">
                    SAMPLE OF WORK - RAYNEX TECH
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <p className="text-sm font-semibold text-[#64748B]">
                  Screenshot preview for {project.title}
                </p>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
              Overview
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed mb-4">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0A2342] bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F3F8FF] text-[#2563EB] text-[11px] font-semibold"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-[#F7F9FC] rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#64748B]">
            Client-ready portfolio artifact by Raynex Tech (Abuja, Nigeria)
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-xs font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] transition-colors"
          >
            Request Similar Project
          </a>
        </div>
      </div>
    </div>
  );
}
