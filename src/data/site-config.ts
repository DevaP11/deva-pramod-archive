export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: `Deva's Archive`,
  subtitle: 'Projects, Notes, Insights & Much More',
  description: 'Deva Pramod Notes & Blogs',
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: 'Tags',
      href: '/tags'
    }
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Terms',
      href: '/terms'
    }
  ],
  socialLinks: [
    {
      text: 'Instagram',
      href: 'https://instagram.com/'
    },
    {
      text: 'X/Twitter',
      href: 'https://twitter.com/'
    }
  ],
  hero: {
    title: 'Hi There !',
    text: "I'm **Deva Pramod**, Backend developer, automotive enthusiast & essayist. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact'
      }
    ]
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
