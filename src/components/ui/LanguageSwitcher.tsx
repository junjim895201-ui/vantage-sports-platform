import { Link, useLocation } from "react-router-dom";
import { LOCALES, switchLocalePath, useI18n, type Locale } from "../../i18n";

export default function LanguageSwitcher() {
  const { locale, content } = useI18n();
  const location = useLocation();
  const suffix = `${location.search}${location.hash}`;

  return (
    <div
      className="flex items-center rounded-lg border border-slate-200 text-xs font-semibold"
      role="group"
      aria-label={content.common.languageSwitcher}
    >
      {(Object.keys(LOCALES) as Locale[]).map((code) => {
        const active = locale === code;
        const targetPath = `${switchLocalePath(location.pathname, code)}${suffix}`;
        return (
          <Link
            key={code}
            to={targetPath}
            className={`min-h-9 px-3 py-2 leading-none transition-colors ${
              active ? "bg-navy text-white" : "text-slate-500 hover:text-navy-light"
            } ${code === "en" ? "rounded-l-lg" : "rounded-r-lg border-l border-slate-200"}`}
            aria-current={active ? "page" : undefined}
          >
            {LOCALES[code].label}
          </Link>
        );
      })}
    </div>
  );
}
