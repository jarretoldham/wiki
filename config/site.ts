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
  {
    label: "About",
    href: "/about",
  },
];

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: navItems,
  navMenuItems: navItems,
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
