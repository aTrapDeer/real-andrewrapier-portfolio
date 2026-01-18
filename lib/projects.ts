export type Industry = 'construction' | 'saas' | 'ecommerce' | 'portfolio' | 'insurance' | 'music';

export interface Project {
  id: string;
  name: string;
  url: string;
  industry: Industry;
  tagline: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'tlcorp',
    name: 'Taylor Leonard Corp',
    url: 'https://www.tlcorp.build/',
    industry: 'construction',
    tagline: 'Premium construction with powerful lead generation',
    description: 'Full-service construction website featuring project galleries, quote forms, and trust signals that convert visitors into qualified leads.',
  },
  {
    id: 'frem',
    name: 'Frem',
    url: 'https://frem.vercel.app/',
    industry: 'saas',
    tagline: 'Modern SaaS platform for financial management',
    description: 'Clean, conversion-focused product marketing site with intuitive onboarding flows and clear value proposition.',
  },
  {
    id: 'honest-prod',
    name: 'Honest Prod',
    url: 'https://www.honestprod.co/',
    industry: 'portfolio',
    tagline: 'Cinematic videography portfolio that books clients',
    description: 'Stunning visual portfolio showcasing work with seamless video integration and strategic CTAs.',
  },
  {
    id: 'ltd-advocates',
    name: 'LTD Advocates',
    url: 'https://www.ltdadvocates.com/',
    industry: 'insurance',
    tagline: 'Trusted insurance consulting with expert positioning',
    description: 'Professional service site emphasizing credibility, case studies, and clear pathways to consultation.',
  },
  {
    id: 'beatitat',
    name: 'Beat It AT',
    url: 'https://beatitat.com/',
    industry: 'ecommerce',
    tagline: 'High-converting music e-commerce experience',
    description: 'Optimized online store with fast checkout, product showcases, and conversion-focused design.',
  },
  {
    id: 'steinberg-music',
    name: 'Steinberg Music',
    url: 'https://www.steinbergmusic.com/',
    industry: 'music',
    tagline: 'Elegant music publisher portfolio',
    description: 'Sophisticated portfolio site showcasing music catalog, artist roster, and licensing opportunities.',
  },
  {
    id: 'ysm-ai',
    name: 'YSM.ai',
    url: 'https://ysm-ai.vercel.app/',
    industry: 'saas',
    tagline: 'AI-powered music creation platform',
    description: 'Next-gen SaaS product site with interactive demos, clear pricing, and activation optimization.',
  },
];
