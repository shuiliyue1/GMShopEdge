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
	name: "水里月",
	logoUrl: "/favicon.png",
	title: "水里月｜网上营业厅",
	customHtml: "",
	defaultLocale: "zh-CN",
};
