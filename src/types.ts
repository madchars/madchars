export type ActiveTab = 
  | 'overview' 
  | 'strategic-architecture' 
  | 'case-studies' 
  | 'tech-stack-and-governance' 
  | 'advisory' 
  | 'contact';

export interface CaseStudy {
  id: string;
  title: string;
  category: 'core-banking' | 'cloud-migration' | 'finops-scale' | 'zero-trust';
  client: string;
  dossierId: string;
  timeline: string;
  summary: string;
  keyParadigms: string[];
  metrics: {
    label: string;
    value: string;
    subtext: string;
    accent?: string;
  }[];
  stack: string[];
}

export interface ADRRecord {
  id: string;
  number: string;
  title: string;
  status: 'APPROVED' | 'PROPOSED' | 'DEPRECATED';
  date: string;
  context: string;
  problem: string;
  decision: string;
  positiveTradeoffs: string;
  negativeTradeoffs: string;
  tags: string[];
  codeSample?: string;
}

export interface ArtifactDeliverable {
  id: string;
  phase: string;
  title: string;
  description: string;
  format: string;
  imageUrl: string;
  details: string[];
}
