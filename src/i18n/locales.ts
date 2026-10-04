export const defaultLocale = "en" as const;

export const locales = ["en", "it", "de", "fr", "nl", "es"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  en: { label: "English", htmlLang: "en", ogLocale: "en_US" },
  it: { label: "Italiano", htmlLang: "it", ogLocale: "it_IT" },
  de: { label: "Deutsch", htmlLang: "de", ogLocale: "de_DE" },
  fr: { label: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
  nl: { label: "Nederlands", htmlLang: "nl", ogLocale: "nl_NL" },
  es: { label: "Español", htmlLang: "es", ogLocale: "es_ES" },
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

// Produce a URL path for a given page key in the given locale.
// `page` is the page slug such as "" (home), "property", "story", etc.
// Honours Astro's `base` setting so URLs work both at root and under a path prefix
// (e.g. GitHub Pages preview at /nocciolina.net/).
export function localePath(locale: Locale, page = ""): string {
  const slug = page.replace(/^\/|\/$/g, "");
  const rawBase = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");
  const base = rawBase === "" ? "" : rawBase;
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const slugPart = slug ? `/${slug}` : "";
  const result = `${base}${localePrefix}${slugPart}`;
  return result || "/";
}

// Prefix a static-asset path (e.g. "/logo.png") with the configured `base`.
export function assetPath(path: string): string {
  const rawBase = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${rawBase}${normalised}` || "/";
}
