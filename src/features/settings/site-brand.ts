import type { SupportedLocale } from "#/lib/locales";

export type SiteBrand = {
	name: string;
	description?: string;
	logoUrl: string;
	title: string;
	seoDescription?: string;
	customHtml: string;
	defaultLocale: SupportedLocale;
};

export const defaultSiteBrand: SiteBrand = {
	name: "SHUILIYUE",
	logoUrl: "/favicon.png",
	title: "SHUILIYUE",
	customHtml: "",
	defaultLocale: "zh-CN",
};
