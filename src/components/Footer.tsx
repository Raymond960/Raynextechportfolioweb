import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tools', href: '#tools' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Certificate', href: '#certificate' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="site-footer" className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-md bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs">
                RT
              </div>
              <span className="text-xl font-extrabold text-[#0A2342] tracking-tight">
                RAYNEX<span className="text-[#FF6B35]"> TECH</span>
              </span>
            </div>
            <p className="text-xs font-semibold text-[#64748B]">
              Web Designer • Coder • AI Tools Specialist
            </p>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Abuja, Nigeria
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-[#0A2342]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FF6B35] transition-colors min-h-[40px] px-2 py-2 inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl border border-slate-200 hover:bg-[#F3F8FF] hover:border-blue-200 active:bg-slate-100 text-[#0A2342] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4 text-center sm:text-left">
          <p>© 2026 Raynex Tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 text-[11px]">
            <span>Certified ISO/IEC 42001:2023 AI Management</span>
            <span className="hidden sm:inline">•</span>
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
