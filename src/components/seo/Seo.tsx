import { useEffect } from "react";
import { useI18n } from "../../i18n";
import { localizedPath } from "../../i18n/paths";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function Seo({ title, description, path = "", keywords }: SeoProps) {
  const { locale, content } = useI18n();
  const { site } = content;

  useEffect(() => {
    const url = `${site.url}${localizedPath(path, locale)}`;
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:site_name", site.name, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:locale", locale === "zh" ? "zh_CN" : "en_US", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical(url);
    if (keywords) {
      setMeta("keywords", keywords);
    }
  }, [title, description, path, keywords, locale, site.name, site.url]);

  return null;
}
