export type ProjectCategory =
  | 'AI Retail Dashboard'
  | 'Hotels & Tourism App'
  | 'AI & Digital Services Platform'
  | 'Cybersecurity Dashboard'
  | 'Government Website'
  | 'Coffee Shop Website';

export type FilterCategory = 'All' | 'Websites' | 'Apps' | 'Dashboards';

export interface Project {
  id: string; // '01', '02', etc.
  title: string;
  category: ProjectCategory;
  filterCategory: 'Websites' | 'Apps' | 'Dashboards';
  description: string;
  defaultImage: string;
  fallbackCandidates: string[];
  tags: string[];
  highlights?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Globe' | 'LayoutDashboard' | 'Bot';
  deliverables: string[];
}

export interface CertificateInfo {
  title: string;
  issuer: string;
  standard: string;
  description: string;
  highlights: string[];
  credentialId?: string;
  verifiedDate?: string;
}
