export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ashik Mahmud Ashik",
  description: "Full Stack Developer",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/ashiqee",
    twitter: "https://x.com/Xashiqee",
    docs: "https://nextui.org",
    discord: "https://discord.gg/zQBP5Tmn",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
