import { Link } from "react-router-dom";
import { nav, site } from "../../content/en";
import ContactChannels from "../ui/ContactChannels";

export default function Footer() {
  return (
    <footer className="bg-navy py-10 text-sm text-slate-400">
      <div className="container-main">
        <strong className="block text-white">{site.name}</strong>
        <p className="mt-2 max-w-xl">{site.description}</p>
        <div className="mt-4">
          <ContactChannels layout="stack" />
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {nav.slice(1).map((item) => (
            <Link key={item.path} to={item.path} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brand}. Partner factories: {site.partnerFactories.join(", ")}.
        </p>
      </div>
    </footer>
  );
}
