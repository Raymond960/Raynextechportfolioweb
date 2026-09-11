import { MapPin, Wrench, Target, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import ProfilePhotoFrame from './ProfilePhotoFrame';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F7F9FC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            Profile & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-5">
            About Raynex Tech
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Raynex Tech creates modern websites, digital platforms and AI-powered tools designed to solve real business problems. I combine web development, UI/UX design and AI technologies to build practical digital experiences that are fast, responsive and easy to use.
          </p>
        </div>

        {/* Profile & Founder Spotlight Card */}
        <div className="max-w-5xl mx-auto mb-12 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Profile Photo Frame */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <ProfilePhotoFrame
                variant="about"
                sizeClass="w-52 h-52 sm:w-60 sm:h-60"
                showStatusBadge={false}
              />
            </div>

            {/* Right Biographical Details */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Founder & Lead Developer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2342] tracking-tight mb-3">
                Raymond Domnan
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                Hi, I'm Raymond — the software engineer and creator behind Raynex Tech. Based in Abuja, Nigeria, I engineer modern web applications, conversion-driven business sites, and practical AI tools.
              </p>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                Holding accredited qualification in ISO/IEC 42001:2023 Artificial Intelligence Management Systems, I ensure that every custom software build is fast, user-friendly, securely deployed, and engineered to deliver measurable commercial impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Full-Stack Web & AI Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Certified AI Governance Standards</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Conversion & SEO Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2342]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Rapid Remote Global Delivery</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] active:scale-95 transition-all shadow-xs"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#certificate"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0A2342] bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all"
                >
                  View ISO Credential
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Certification Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-xs p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#F3F8FF] text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider block mb-1">
                International Benchmark
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0A2342]">
                Certified in ISO/IEC 42001:2023 Artificial Intelligence Management System
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Accredited certification ensuring ethical, dependable, and risk-managed AI systems implementation.
              </p>
            </div>
            <a
              href="#certificate"
              className="shrink-0 min-h-[40px] inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-[#2563EB] bg-[#F3F8FF] hover:bg-blue-100 active:scale-95 transition-all"
            >
              View Credential
            </a>
          </div>
        </div>

        {/* Three Small Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Block 1: Location */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-blue-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#F3F8FF] text-[#2563EB] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block mb-1">
              Location
            </span>
            <h4 className="text-lg font-bold text-[#0A2342] mb-1">
              Abuja, Nigeria
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Serving ambitious clients across Nigeria and globally with rapid remote collaboration.
            </p>
          </div>

          {/* Block 2: Specialization */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-blue-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#FFF5F0] text-[#FF6B35] flex items-center justify-center mb-4">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block mb-1">
              Specialization
            </span>
            <h4 className="text-lg font-bold text-[#0A2342] mb-1">
              Web Design • Development • AI Tools
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Full-lifecycle digital creation: from user interface wireframing to robust interactive platforms.
            </p>
          </div>

          {/* Block 3: Focus */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-blue-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block mb-1">
              Focus
            </span>
            <h4 className="text-lg font-bold text-[#0A2342] mb-1">
              Business Websites • Digital Platforms • Automation
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Engineered with customer conversion, high search visibility, and streamlined operations in mind.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
