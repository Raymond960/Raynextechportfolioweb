import { ArrowRight, Cpu, Sparkles, Layers, Zap } from 'lucide-react';
import HeroLogoFrame from './HeroLogoFrame';

export default function Hero() {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F3F8FF]/60 via-white to-white"
    >
      {/* Subtle geometric background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle soft decorative color glows (strictly light & non-neon) */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label Pill */}
            <div
              id="hero-label-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-[#0A2342] uppercase">
                RAYNEX TECH • WEB • AI • DIGITAL
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A2342] tracking-tight leading-[1.14] mb-6 break-words"
            >
              I Build Powerful Websites & Apps{' '}
              <span className="text-[#FF6B35] inline-block relative">
                That Convert
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#FF6B35]/30"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 7 C 20 0, 40 8, 60 2 C 80 0, 95 6, 100 4" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Using AI, modern development tools, and creative digital solutions to help businesses grow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-2 lg:mb-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#contact');
                }}
                id="hero-hire-me-btn"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98 text-base text-center"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#portfolio');
                }}
                id="hero-view-work-btn"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#0A2342] bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 cursor-pointer text-base active:scale-98 text-center"
              >
                <span>View My Work</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official Raynex Tech Logo (Clean High-Contrast Visual) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-logo-visual"
              className="relative flex justify-center items-center"
            >
              {/* Official Raynex Tech Logo Frame */}
              <HeroLogoFrame
                sizeClass="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] xl:w-[370px] xl:h-[370px]"
              />
            </div>
          </div>

        </div>

        {/* Core Specializations: Placed below both columns (Position #7 on Mobile) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 w-full" id="hero-core-specializations">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0">
              Core Specializations:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: 'Web Development', icon: Layers },
                { label: 'AI Tools', icon: Cpu },
                { label: 'UI/UX Design', icon: Sparkles },
                { label: 'Workflow Automation', icon: Zap },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-[#0A2342]"
                >
                  <spec.icon className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{spec.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
