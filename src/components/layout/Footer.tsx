import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import ContactChannels from "../ui/ContactChannels";

export default function Footer() {
  const { content, localizedPath } = useI18n();
  const { footerNav, nav, site, common } = content;

  return (
    <footer className="bg-navy py-10 text-sm text-slate-400">
      <div className="container-main">
        <strong className="block text-white">
          VANTAGE <span className="text-gold">SPORTS</span>
        </strong>
        <p className="mt-1 text-xs text-slate-500">{site.tagline}</p>
        <p className="mt-2 max-w-xl">{site.description}</p>
        <div className="mt-4">
          <ContactChannels layout="stack" />
        </div>
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{common.pages}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            {nav.slice(1).map((item) => (
              <Link key={item.path} to={localizedPath(item.path)} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link to={localizedPath("/contact")} className="hover:text-white">
              {common.contact}
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{common.resources}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            {footerNav.map((item) => (
              <Link key={item.path} to={localizedPath(item.path)} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brand}. {common.copyrightMarkets}: {site.markets.join(", ")}.
        </p>
      </div>
    </footer>
  );
}
