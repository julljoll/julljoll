import {
  BLOG_DESCRIPTION,
  EXPERIENCE_DESCRIPTION,
  PROJECTS_DESCRIPTION,
  SITE_DESCRIPTION,
  TAGS_DESCRIPTION,
} from '@/lib/site';

export type SearchEntry = {
  title: string;
  description: string;
  tags: string[];
  body: string;
  url: string;
};

export const PAGE_SEARCH_ENTRIES: SearchEntry[] = [
  {
    title: 'Home',
    description: SITE_DESCRIPTION,
    tags: [],
    body: 'A personal site built with a neobrutalist Astro theme. Its colors follow the calendar through autumn, winter, spring, and summer, each with a light and dark mode. A home for notes, projects, and experiments.',
    url: '/',
  },
  {
    title: 'Blog',
    description: BLOG_DESCRIPTION,
    tags: [],
    body: 'All blog posts.',
    url: '/blog/',
  },
  {
    title: 'Tags',
    description: TAGS_DESCRIPTION,
    tags: [],
    body: 'Browse blog posts by tag.',
    url: '/tags/',
  },
  {
    title: 'Experience',
    description: EXPERIENCE_DESCRIPTION,
    tags: ['career', 'resume', 'work'],
    body: 'Experience will be added here.',
    url: '/experience/',
  },
  {
    title: 'Projects',
    description: PROJECTS_DESCRIPTION,
    tags: ['portfolio', 'open source', 'code'],
    body: 'Projects will be added here.',
    url: '/projects/',
  },
];
