import { Globe, LayoutDashboard, Bot, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#2563EB]" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6 text-[#FF6B35]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#2563EB]" />;
      default:
        return <Globe className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  const getAccentBg = (index: number) => {
    if (index === 0) return 'bg-[#F3F8FF] border-blue-100';
    if (index === 1) return 'bg-[#FFF5F0] border-orange-100';
    return 'bg-[#F3F8FF] border-blue-100';
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            Services & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Delivering high-performance digital solutions tailored to solve specific business challenges and accelerate growth.
          </p>
        </div>

        {/* Three Professional Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index}`}
              className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${getAccentBg(
                    index
                  )} transition-transform group-hover:scale-105 duration-200`}
                >
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables List */}
                <div className="pt-4 border-t border-slate-100 mb-6">
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-3">
                    What You Get
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#0A2342]/90 font-medium">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] group-hover:text-[#FF6B35] transition-colors mt-2"
              >
                <span>Discuss this service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
