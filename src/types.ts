export interface Project {
  id: string;
  title: string;
  category: 'UIUX' | 'Game' | 'Other';
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}
