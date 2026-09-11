import { useState, useMemo, useCallback } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { FilterCategory, Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters: FilterCategory[] = ['All', 'Websites', 'Apps', 'Dashboards'];

  const filteredProjects = useMemo(() => {
    return activeFilter === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  const handleOpenModal = useCallback((project: Project, currentImage: string | null) => {
    setSelectedProject(project);
    setSelectedImage(currentImage);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    setSelectedImage(null);
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-3">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A selection of digital products, platforms and websites developed by Raynex Tech.
          </p>
        </div>

        {/* Filter / Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="portfolio-filters">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                id={`filter-btn-${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-[#0A2342] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:text-[#0A2342] border border-slate-200 hover:border-slate-300'
                }`}
              >
                {filter}
                {filter === 'All' && ` (${PORTFOLIO_PROJECTS.length})`}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* Bottom Portfolio Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-2xl mx-auto">
            <div className="text-left sm:text-left flex-1">
              <h4 className="text-sm font-bold text-[#0A2342]">
                Have a specific project or platform in mind?
              </h4>
              <p className="text-xs text-[#64748B] mt-0.5">
                Raynex Tech engineers bespoke websites and AI dashboards matching your exact business needs.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>

      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        imageSrc={selectedImage}
        onClose={handleCloseModal}
      />
    </section>
  );
}
