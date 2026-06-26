export interface Project {
  id: string;
  title: string;
  category: 'Game' | 'Interaction' | 'Brand' | 'DigitalMedia';
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  role?: string;
  period?: string;
  award?: string;
  overview?: string[];
  details?: Array<{
    label: string;
    value: string;
  }>;
  gallery?: string[];
  externalLinks?: Array<{
    label: string;
    url: string;
  }>;
  process?: Array<{
    title: string;
    body: string;
  }>;
}

export interface TechItem {
  name: string;
  icon: string;
}
