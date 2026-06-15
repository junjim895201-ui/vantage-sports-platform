import type { FutureLocale, Locale, LocaleConfig } from "./types";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    label: "EN",
    nativeName: "English",
    htmlLang: "en",
    prefix: "",
    dir: "ltr",
  },
  zh: {
    code: "zh",
    label: "中文",
    nativeName: "简体中文",
    htmlLang: "zh-Hans",
    prefix: "/zh",
    dir: "ltr",
  },
};

/** Reserved locale slots — enable when translations are ready */
export const FUTURE_LOCALES: Record<
  FutureLocale,
  Omit<LocaleConfig, "code"> & { code: FutureLocale }
> = {
  th: {
    code: "th",
    label: "TH",
    nativeName: "ไทย",
    htmlLang: "th",
    prefix: "/th",
    dir: "ltr",
  },
  ms: {
    code: "ms",
    label: "MS",
    nativeName: "Bahasa Melayu",
    htmlLang: "ms",
    prefix: "/ms",
    dir: "ltr",
  },
  vi: {
    code: "vi",
    label: "VI",
    nativeName: "Tiếng Việt",
    htmlLang: "vi",
    prefix: "/vi",
    dir: "ltr",
  },
};

export const LOCALE_CODES = Object.keys(LOCALES) as Locale[];

export function isLocale(value: string): value is Locale {
  return LOCALE_CODES.includes(value as Locale);
}
