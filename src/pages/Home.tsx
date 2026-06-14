import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { home } from "../content/en";

export default function HomePage() {
  return (
    <>
      <Seo title={home.seo.title} description={home.seo.description} path="/" />

      <section className="bg-navy text-white">
        <div className="container-main py-10 md:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">{home.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{home.title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">{home.subtitle}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/oem-manufacturing" className="btn btn-primary w-full sm:w-auto">
              {home.ctaOem}
            </Link>
            <Link to="/distributor-program" className="btn btn-secondary w-full sm:w-auto">
              {home.ctaDistributor}
            </Link>
            <Link to="/shuttle-testing" className="btn btn-outline-light w-full sm:w-auto">
              {home.ctaTesting}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{home.pillarsTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {home.pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{home.programsTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {home.programs.map((p) => (
              <div key={p.title} className="card">
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
                <Link to={p.path} className="btn btn-secondary mt-4 px-4 py-2 text-xs">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{home.factoriesTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {home.factories.map((f) => (
              <div key={f.name} className="card border-gold/30">
                <h3 className="text-lg font-bold text-navy">{f.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-center text-white">
        <div className="container-main">
          <h2 className="text-2xl font-bold">{home.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">{home.ctaDesc}</p>
          <Link to="/contact" className="btn btn-primary mt-5">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
