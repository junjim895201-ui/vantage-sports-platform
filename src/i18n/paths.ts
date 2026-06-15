import { DEFAULT_LOCALE, LOCALES } from "./config";
import type { Locale } from "./types";

/** Build a locale-aware path. Input paths must start with `/`. */
export function localizedPath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = LOCALES[locale].prefix;
  if (normalized === "/") {
    return prefix || "/";
  }
  return `${prefix}${normalized}`;
}

/** Strip locale prefix from pathname and detect locale. */
export function parseLocalePath(pathname: string): { locale: Locale; path: string } {
  for (const code of ["zh"] as Locale[]) {
    const prefix = LOCALES[code].prefix;
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      const stripped = pathname.slice(prefix.length) || "/";
      return { locale: code, path: stripped };
    }
  }
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}

/** Switch locale while preserving the current page path. */
export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const { path } = parseLocalePath(pathname);
  return localizedPath(path, targetLocale);
}
