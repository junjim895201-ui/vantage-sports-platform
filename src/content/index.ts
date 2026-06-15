import type { Locale } from "../i18n/types";
import * as en from "./en";
import * as zh from "./zh";
import * as enProducts from "./products";
import * as zhProducts from "./zh-products";

export type Content = typeof en;

const CONTENT: Record<Locale, Content> = {
  en,
  zh: zh as unknown as Content,
};

export function getContent(locale: Locale): Content {
  return CONTENT[locale];
}

export type ProductCatalog = {
  shuttleProducts: typeof enProducts.shuttleProducts;
  accessoryLines: typeof enProducts.accessoryLines;
  factoryCapabilities: typeof enProducts.factoryCapabilities;
  manufacturingPartners: typeof enProducts.manufacturingPartners;
};

const PRODUCTS: Record<Locale, ProductCatalog> = {
  en: {
    shuttleProducts: enProducts.shuttleProducts,
    accessoryLines: enProducts.accessoryLines,
    factoryCapabilities: enProducts.factoryCapabilities,
    manufacturingPartners: enProducts.manufacturingPartners,
  },
  zh: {
    shuttleProducts: zhProducts.shuttleProducts,
    accessoryLines: zhProducts.accessoryLines,
    factoryCapabilities: zhProducts.factoryCapabilities,
    manufacturingPartners: zhProducts.manufacturingPartners,
  },
};

export function getProductCatalog(locale: Locale): ProductCatalog {
  return PRODUCTS[locale];
}
