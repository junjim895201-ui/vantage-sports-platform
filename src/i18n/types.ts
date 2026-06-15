/** Active locales */
export type Locale = "en" | "zh";

/** Reserved for future expansion — not yet implemented */
export type FutureLocale = "th" | "ms" | "vi";

export type LocaleConfig = {
  code: Locale;
  label: string;
  nativeName: string;
  htmlLang: string;
  /** URL prefix; empty string for default English */
  prefix: string;
  dir: "ltr" | "rtl";
};
