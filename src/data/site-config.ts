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
      href: 'https://www.instagram.com/d.e.v.a_p/'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deva-pramod-3200bb216?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByYj6tkxTQreYl4qI4lplrA%3D%3D'
    },
  ],
  hero: {
    title: 'Hi There !',
    text: "I'm **Deva Pramod**, Developer, Automotive Enthusiast & Blogger. Feel free to explore my blogs or checkout some of my coding endeavours on <a href='https://github.com/DevaP11'>GitHub</a>.",
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
