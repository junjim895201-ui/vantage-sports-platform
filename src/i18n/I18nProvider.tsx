import { useEffect, useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { getContent, getProductCatalog } from "../content";
import { I18nContext, type I18nContextValue } from "./I18nContext";
import { LOCALES } from "./config";
import { localizedPath, parseLocalePath } from "./paths";
import type { Locale } from "./types";

type I18nProviderProps = {
  locale: Locale;
  children: ReactNode;
};

export function I18nProvider({ locale, children }: I18nProviderProps) {
  const location = useLocation();

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      content: getContent(locale),
      products: getProductCatalog(locale),
      localizedPath: (path: string) => localizedPath(path, locale),
    }),
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = LOCALES[locale].htmlLang;
    document.documentElement.dir = LOCALES[locale].dir;
  }, [locale]);

  useEffect(() => {
    const parsed = parseLocalePath(location.pathname);
    if (parsed.locale !== locale) {
      document.documentElement.lang = LOCALES[locale].htmlLang;
    }
  }, [location.pathname, locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
