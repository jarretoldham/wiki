export type SiteConfig = typeof siteConfig;

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Docs",
    href: "/docs",
  },
];

export const siteConfig = {
  name: "Wiki",
  description: "A Next.js wiki powered by Markdoc",
  navItems: navItems,
  navMenuItems: navItems,
  links: {
    github: "https://github.com/jarretoldham/wiki",
    twitter: "https://twitter.com/getnextui",
    docs: "https://markdoc.dev/",
  },
};
