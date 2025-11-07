import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://bento.me/phh235",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Hoangfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Components",
    href: "/components",
  },
];

export const GITHUB_USERNAME = "phh235";
export const SOURCE_CODE_GITHUB_REPO = "phh235/bento.me/phh235";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/phh235/bento.me/phh235";

export const UTM_PARAMS = {
  utm_source: "bento.me/phh235",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
