import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { about } from "../content/en";

export default function AboutUsPage() {
  return (
    <>
      <Seo title={about.seo.title} description={about.seo.description} path="/about" />
      <PageHero title={about.title} subtitle={about.subtitle} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Our Mission</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600">{about.mission}</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Core Values</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {about.values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Business Model</h2>
          <ol className="mt-4 space-y-3">
            {about.model.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-slate-500">{about.references}</p>
          <Link to="/contact" className="btn btn-primary mt-5">
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}
