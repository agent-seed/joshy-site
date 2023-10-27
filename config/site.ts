export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Ladybug relief fund",
	description: "placeholder",
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
		},
	],
	links: {
		docs: "https://nextui.org",
		sponsor: "/donate",
		donate: "/donate",
		about: "/about"
	},
};
