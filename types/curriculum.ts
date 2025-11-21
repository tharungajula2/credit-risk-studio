export interface ContentBlock {
  type: 'paragraph' | 'list' | 'heading' | 'callout' | 'code' | 'table' | 'markdown';
  content: string | string[];
  title?: string; // For callouts or headings
  variant?: 'info' | 'warning' | 'example' | 'success'; // For callouts
}

export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  goal: string;
  sections: Section[];
}

export interface Curriculum {
  modules: Module[];
}
