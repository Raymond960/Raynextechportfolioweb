import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tools', href: '#tools' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Certificate', href: '#certificate' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-[#0A2342] group transition-opacity hover:opacity-90"
            id="nav-brand-link"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0A2342] flex items-center justify-center text-white shadow-xs font-black tracking-wider text-sm transition-transform group-hover:scale-105">
              RT
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#0A2342] leading-none">
                RAYNEX<span className="text-[#FF6B35] font-black"> TECH</span>
              </span>
              <span className="text-[10px] font-semibold text-[#64748B] tracking-wider uppercase mt-0.5">
                Web & AI Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-semibold text-[#0A2342]/80 hover:text-[#0A2342] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
              id="nav-hire-me-btn"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center justify-center min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] active:scale-95 transition-all shadow-xs"
              id="mobile-hire-top-btn"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-[#0A2342] hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay to close when clicking outside */}
            <div
              className="fixed inset-0 top-[60px] z-[-1] bg-black/20 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              id="mobile-nav-menu"
              className="md:hidden mt-3 pt-2 pb-4 border border-slate-200/80 bg-white rounded-2xl shadow-xl px-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full min-h-[44px] flex items-center text-left px-4 py-2.5 text-sm font-semibold text-[#0A2342] hover:bg-[#F3F8FF] hover:text-[#2563EB] rounded-xl transition-colors cursor-pointer active:bg-slate-100"
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full min-h-[44px] flex items-center justify-center py-3 text-center text-sm font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] active:scale-98 rounded-xl shadow-xs cursor-pointer transition-all"
                  id="mobile-nav-hire-btn"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
