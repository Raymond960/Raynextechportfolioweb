import {
  Sparkles,
  Bot,
  Tag,
  Code2,
  Palette,
  Braces,
  LayoutGrid,
  GitBranch,
  Rocket,
  Code,
  Database,
  Network,
  CreditCard,
  MapPin,
  MessageCircle,
  Layers,
  Brush,
  Chrome,
  Globe,
  Flame,
  Compass,
  MonitorSmartphone,
  Cpu,
  Layers3,
} from 'lucide-react';
import { TOOLS_DATA, ToolItem } from '../data/toolsData';

export default function Tools() {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 sm:w-4.5 sm:h-4.5' };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Bot':
        return <Bot {...props} />;
      case 'Tag':
        return <Tag {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Braces':
        return <Braces {...props} />;
      case 'LayoutGrid':
        return <LayoutGrid {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Rocket':
        return <Rocket {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Network':
        return <Network {...props} />;
      case 'CreditCard':
        return <CreditCard {...props} />;
      case 'MapPin':
        return <MapPin {...props} />;
      case 'MessageCircle':
        return <MessageCircle {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Brush':
        return <Brush {...props} />;
      case 'Chrome':
        return <Chrome {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const getIconContainerStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-[#2563EB] border-blue-100 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB]';
      case 'orange':
        return 'bg-orange-50 text-[#FF6B35] border-orange-100 group-hover:bg-[#FF6B35] group-hover:text-white group-hover:border-[#FF6B35]';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600';
      case 'navy':
      default:
        return 'bg-slate-100 text-[#0A2342] border-slate-200 group-hover:bg-[#0A2342] group-hover:text-white group-hover:border-[#0A2342]';
    }
  };

  return (
    <section
      id="tools"
      className="py-16 sm:py-20 bg-[#F7F9FC] border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3.5 border border-blue-100 shadow-2xs">
            <Layers3 className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Tech Stack & Ecosystem</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-3">
            Tools & Technologies I Work With
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            The core tools, platforms, and modern technologies I use to build, test, deploy, and scale fast, responsive digital solutions.
          </p>
        </div>

        {/* Unified Tools Cards Grid (All 22 tools visible together) */}
        <div
          id="tools-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4"
        >
          {TOOLS_DATA.map((tool: ToolItem, index: number) => (
            <div
              key={tool.id}
              id={`tool-card-${tool.id}`}
              className="bg-white rounded-xl p-4 sm:p-4.5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon + Number Pill */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-200 shadow-2xs shrink-0 ${getIconContainerStyle(
                      tool.accentColor
                    )}`}
                  >
                    {renderIcon(tool.iconName)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 font-mono bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="text-sm sm:text-base font-bold text-[#0A2342] tracking-tight mb-1.5 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {tool.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#475569] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Subtle Status Line */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748B]">
                <span className="text-[10px] font-medium text-slate-400">Active Workflow</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>
          ))}
        </div>

        {/* Note Disclaimer */}
        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#64748B] leading-relaxed bg-white/70 backdrop-blur-xs border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <span className="font-bold text-[#0A2342]">Note:</span> Tools and frameworks are tailored to each project's unique requirements, business goals, and performance standards.
          </p>
        </div>
      </div>
    </section>
  );
}

