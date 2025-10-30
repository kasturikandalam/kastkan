import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// Change this to your name
	author: "Kasturi Kandalam",
	
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	
	// Change this to your description
	description: "I am Kasturi Kandalam, a Pre-Doc at Indian Statistical Institute - Delhi (ISI-D). I study how data, policy and people interact— sometimes beautifully, sometimes not. I build and analyse large administrative and spatial datasets and use them to understand how the world works. p.s. I have a soft spot for messy data.",  // ← Added comma here!
	lang: "en-GB",
	ogLocale: "en_GB",
	
	// Change this to your name/site title
	title: "Kasturi Kandalam",
	
	// IMPORTANT: Change this to your GitHub Pages URL
	url: "https://kasturikandalam.github.io/kastkan/",
};

// These are your navigation menu links - you can customize these too!
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/kastkan/",
		title: "Home",
	},
	{
		path: "/kastkan/research/",
		title: "Research",
	},
	{
		path: "/kastkan/figures/",
		title: "Favorite Figures",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};