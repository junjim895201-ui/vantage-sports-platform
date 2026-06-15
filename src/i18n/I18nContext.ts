import { createContext } from "react";
import type { getContent, getProductCatalog } from "../content";
import type { Locale } from "./types";

export type I18nContextValue = {
  locale: Locale;
  content: ReturnType<typeof getContent>;
  products: ReturnType<typeof getProductCatalog>;
  localizedPath: (path: string) => string;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
