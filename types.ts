export enum AppPhase {
  INTRO = 'INTRO',
  VOCABULARY = 'VOCABULARY',
  EXAMPLES = 'EXAMPLES',
  BUILDER_SETUP = 'BUILDER_SETUP',
  BUILDER_RESULT = 'BUILDER_RESULT'
}

export enum Subject {
  ANATOMY = 'Anatomy',
  PHYSICS = 'Physics',
  ENGLISH = 'English Literature',
  HISTORY = 'History',
  MUSIC = 'Music Theory',
  COMPUTER_SCIENCE = 'Computer Science'
}

export interface WebsiteConfig {
  subject: string;
  features: {
    header: boolean;
    hero: boolean;
    footer: boolean;
    nav: boolean;
    sections: boolean;
    gallery: boolean;
    contact: boolean;
  };
}

export interface GeneratedContent {
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  navLinks: string[];
  sections: {
    title: string;
    content: string;
    layoutType: 'text-only' | 'image-left' | 'image-right' | 'grid';
  }[];
  footerText: string;
  primaryColor: string;
  accentColor: string;
}

export const VOCAB_TERMS = [
  { term: "Header", definition: "The top section of a webpage, usually containing the logo and navigation." },
  { term: "Hero Section", definition: "A large, prominent area at the top of the homepage used to grab attention." },
  { term: "White Space", definition: "Empty space around elements to improve readability and reduce clutter." },
  { term: "Footer", definition: "The bottom section of a webpage containing copyright, links, and contact info." },
  { term: "Grid System", definition: "A structure used to arrange content in columns and rows for consistency." },
  { term: "Hierarchy", definition: "Using size and weight to show which text is most important." },
  { term: "Navigation", definition: "Links or menus that help users move around the website." },
  { term: "Call to Action (CTA)", definition: "A button or link prompting the user to do something (e.g., 'Sign Up')." },
  { term: "Resolution", definition: "The quality or sharpness of an image. High resolution is crisp; low is grainy." },
];