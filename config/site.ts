export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Ladybug relief fund",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Buy",
      href: "/buy",
    },
    {
      label: "Stats",
      href: "/stats",
    },
    {
      label: "About",
      href: "/about",
    }
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
		docs: "https://nextui.org",
    	sponsor: "/donate",
    	donate: "/donate",
		about: "/about"
	},
};
