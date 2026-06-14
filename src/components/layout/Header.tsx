import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { nav, site } from "../../content/en";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="container-main flex min-h-14 items-center justify-between py-2">
        <Link to="/" onClick={() => setOpen(false)} className="min-w-0">
          <div className="truncate text-lg font-bold text-navy">{site.brand}</div>
          <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">
            Badminton SEA
          </div>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-navy-light" : "text-slate-500 hover:text-navy-light"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary px-4 py-2 text-xs">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-xl lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 lg:hidden" aria-label="Mobile">
          <div className="container-main flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-sm font-medium text-slate-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
