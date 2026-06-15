import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../../i18n";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { content, localizedPath } = useI18n();
  const { nav, site, common } = content;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="container-main flex min-h-14 items-center justify-between gap-3 py-2">
        <Link to={localizedPath("/")} onClick={() => setOpen(false)} className="min-w-0">
          <div className="truncate text-base font-bold tracking-tight text-navy md:text-lg">
            VANTAGE <span className="text-gold">SPORTS</span>
          </div>
          <div className="truncate text-[0.6rem] font-semibold uppercase tracking-widest text-slate-500 md:text-[0.65rem]">
            {site.tagline}
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="flex items-center gap-4" aria-label={common.mainNav}>
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={localizedPath(item.path)}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? "text-navy-light" : "text-slate-500 hover:text-navy-light"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <LanguageSwitcher />
          <Link to={localizedPath("/contact")} className="btn btn-primary px-4 py-2 text-xs">
            {common.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-xl"
            aria-label={common.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 lg:hidden" aria-label={common.mobileNav}>
          <div className="container-main flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={localizedPath(item.path)}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-sm font-medium text-slate-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={localizedPath("/contact")}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-sm font-medium text-navy-light"
            >
              {common.contact}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
