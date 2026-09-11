export interface ToolItem {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryName: string;
  iconName: string;
  accentColor: 'blue' | 'orange' | 'navy' | 'emerald';
}

export interface ToolCategory {
  id: string;
  title: string;
  iconName: string;
  toolCount: number;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  { id: 'all', title: 'All Tools', iconName: 'Layers', toolCount: 22 },
  { id: 'ai', title: 'AI & AI Development', iconName: 'Sparkles', toolCount: 3 },
  { id: 'web', title: 'Web Development', iconName: 'Code2', toolCount: 4 },
  { id: 'devops', title: 'Development & Deployment', iconName: 'Rocket', toolCount: 3 },
  { id: 'backend', title: 'Backend & Database', iconName: 'Database', toolCount: 2 },
  { id: 'business', title: 'Business & Payments', iconName: 'CreditCard', toolCount: 3 },
  { id: 'design', title: 'Design & Creative', iconName: 'Palette', toolCount: 2 },
  { id: 'testing', title: 'Testing & Quality', iconName: 'MonitorSmartphone', toolCount: 5 },
];

export const TOOLS_DATA: ToolItem[] = [
  // 1. AI & AI DEVELOPMENT
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    description: 'AI-powered website and application development.',
    category: 'ai',
    categoryName: 'AI & AI Development',
    iconName: 'Sparkles',
    accentColor: 'blue',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI-assisted development, research, content, problem solving and productivity.',
    category: 'ai',
    categoryName: 'AI & AI Development',
    iconName: 'Bot',
    accentColor: 'emerald',
  },
  {
    id: 'ai-data-annotation',
    name: 'AI Data Annotation',
    description: 'Data labeling, classification and AI training-related workflows.',
    category: 'ai',
    categoryName: 'AI & AI Development',
    iconName: 'Tag',
    accentColor: 'orange',
  },

  // 2. WEB DEVELOPMENT
  {
    id: 'html5',
    name: 'HTML5',
    description: 'Building structured and semantic web pages.',
    category: 'web',
    categoryName: 'Web Development',
    iconName: 'Code2',
    accentColor: 'orange',
  },
  {
    id: 'css3',
    name: 'CSS3',
    description: 'Responsive layouts, styling and modern user interfaces.',
    category: 'web',
    categoryName: 'Web Development',
    iconName: 'Palette',
    accentColor: 'blue',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Interactive website and application functionality.',
    category: 'web',
    categoryName: 'Web Development',
    iconName: 'Braces',
    accentColor: 'navy',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'Designing clean, intuitive and user-friendly digital experiences.',
    category: 'web',
    categoryName: 'Web Development',
    iconName: 'LayoutGrid',
    accentColor: 'blue',
  },

  // 3. DEVELOPMENT & DEPLOYMENT
  {
    id: 'github',
    name: 'GitHub',
    description: 'Project repositories, source-code management and version control.',
    category: 'devops',
    categoryName: 'Development & Deployment',
    iconName: 'GitBranch',
    accentColor: 'navy',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Deployment and hosting of modern websites and web applications.',
    category: 'devops',
    categoryName: 'Development & Deployment',
    iconName: 'Rocket',
    accentColor: 'blue',
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'Code editing and web development.',
    category: 'devops',
    categoryName: 'Development & Deployment',
    iconName: 'Code',
    accentColor: 'blue',
  },

  // 4. BACKEND & DATABASE
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Database, authentication, storage and backend services for web applications.',
    category: 'backend',
    categoryName: 'Backend & Database',
    iconName: 'Database',
    accentColor: 'emerald',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    description: 'Connecting applications with external services and digital platforms.',
    category: 'backend',
    categoryName: 'Backend & Database',
    iconName: 'Network',
    accentColor: 'blue',
  },

  // 5. BUSINESS & PAYMENT INTEGRATION
  {
    id: 'paystack',
    name: 'Paystack',
    description: 'Payment processing and payment integration.',
    category: 'business',
    categoryName: 'Business & Payment Integration',
    iconName: 'CreditCard',
    accentColor: 'blue',
  },
  {
    id: 'google-maps',
    name: 'Google Maps',
    description: 'Business locations, maps and location-based features.',
    category: 'business',
    categoryName: 'Business & Payment Integration',
    iconName: 'MapPin',
    accentColor: 'orange',
  },
  {
    id: 'whatsapp-integration',
    name: 'WhatsApp Integration',
    description: 'Direct customer communication and business contact workflows.',
    category: 'business',
    categoryName: 'Business & Payment Integration',
    iconName: 'MessageCircle',
    accentColor: 'emerald',
  },

  // 6. DESIGN & CREATIVE WORK
  {
    id: 'canva',
    name: 'Canva',
    description: 'Graphic design, promotional materials and digital content.',
    category: 'design',
    categoryName: 'Design & Creative Work',
    iconName: 'Layers',
    accentColor: 'blue',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'Branding, marketing graphics, social media designs and visual assets.',
    category: 'design',
    categoryName: 'Design & Creative Work',
    iconName: 'Brush',
    accentColor: 'orange',
  },

  // 7. TESTING & QUALITY
  {
    id: 'google-chrome',
    name: 'Google Chrome',
    description: 'Website testing and debugging.',
    category: 'testing',
    categoryName: 'Testing & Quality',
    iconName: 'Chrome',
    accentColor: 'blue',
  },
  {
    id: 'microsoft-edge',
    name: 'Microsoft Edge',
    description: 'Cross-browser testing.',
    category: 'testing',
    categoryName: 'Testing & Quality',
    iconName: 'Globe',
    accentColor: 'blue',
  },
  {
    id: 'mozilla-firefox',
    name: 'Mozilla Firefox',
    description: 'Cross-browser testing.',
    category: 'testing',
    categoryName: 'Testing & Quality',
    iconName: 'Flame',
    accentColor: 'orange',
  },
  {
    id: 'safari',
    name: 'Safari',
    description: 'Apple device and Safari browser testing.',
    category: 'testing',
    categoryName: 'Testing & Quality',
    iconName: 'Compass',
    accentColor: 'blue',
  },
  {
    id: 'responsive-testing',
    name: 'Responsive Testing',
    description: 'Testing websites across phones, tablets and desktop computers.',
    category: 'testing',
    categoryName: 'Testing & Quality',
    iconName: 'MonitorSmartphone',
    accentColor: 'emerald',
  },
];
