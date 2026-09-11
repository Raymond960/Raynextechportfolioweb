interface HeroLogoFrameProps {
  sizeClass?: string;
}

export default function HeroLogoFrame({
  sizeClass = 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] xl:w-[370px] xl:h-[370px]',
}: HeroLogoFrameProps) {
  return (
    <div className="relative inline-flex flex-col items-center select-none">
      {/* Outer ambient glow behind logo */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Main Logo Container */}
      <div
        className={`relative ${sizeClass} rounded-3xl overflow-hidden border-2 border-slate-900/80 shadow-2xl shadow-blue-950/20 ring-4 ring-slate-900/10 bg-[#050B14] transition-all duration-300 group flex items-center justify-center p-3 sm:p-4`}
      >
        <img
          src="/images/raynex-hero.png"
          alt="Raynex Tech Official Logo"
          width="400"
          height="400"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle glass reflection shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-50" />
      </div>
    </div>
  );
}
