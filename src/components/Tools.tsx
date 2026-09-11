import { useState, useMemo } from 'react';
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
import { TOOL_CATEGORIES, TOOLS_DATA, ToolItem } from '../data/toolsData';

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter tools based on active tab
  const filteredTools = useMemo(() => {
    if (activeCategory === 'all') {
      return TOOLS_DATA;
    }
    return TOOLS_DATA.filter((tool) => tool.category === activeCategory);
  }, [activeCategory]);

  const renderIcon = (iconName: string, accentColor: string) => {
    const props = { className: 'w-5 h-5' };
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
      className="py-20 bg-[#F7F9FC] border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3.5 border border-blue-100 shadow-2xs">
            <Layers3 className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Tech Stack & Ecosystem</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-4">
            Tools & Technologies I Work With
          </h2>
          
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            The practical tools, frameworks, and digital platforms I use for web development, AI-powered solutions, UI/UX, deployment, data annotation, payments, and digital platforms.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12" id="tools-category-filters">
          {TOOL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`tool-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3.5 sm:px-4 py-2 min-h-[42px] inline-flex items-center gap-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-[#0A2342] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:text-[#0A2342] border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{cat.title}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#64748B]'
                  }`}
                >
                  {cat.toolCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tools Cards Grid */}
        <div
          id="tools-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredTools.map((tool: ToolItem) => (
            <div
              key={tool.id}
              id={`tool-card-${tool.id}`}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200/80 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon & Category Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 shadow-2xs ${getIconContainerStyle(
                      tool.accentColor
                    )}`}
                  >
                    {renderIcon(tool.iconName, tool.accentColor)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-md text-right">
                    {tool.categoryName}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="text-base font-bold text-[#0A2342] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                  {tool.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#475569] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748B]">
                <span className="font-semibold text-slate-400">Practical Tooling</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>
          ))}
        </div>

        {/* Context Disclaimer & Direct Contact Callout */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#64748B] leading-relaxed bg-white/70 backdrop-blur-xs border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <span className="font-bold text-[#0A2342]">Note:</span> Tools and frameworks are chosen based on individual project requirements, business goals, and performance needs.
          </p>
        </div>

      </div>
    </section>
  );
}
