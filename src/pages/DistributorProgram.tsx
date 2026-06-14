import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { distributor } from "../content/en";

export default function DistributorProgramPage() {
  return (
    <>
      <Seo title={distributor.seo.title} description={distributor.seo.description} path="/distributor-program" />
      <PageHero title={distributor.title} subtitle={distributor.subtitle} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Who Should Apply</h2>
          <ul className="mt-4 space-y-2">
            {distributor.who.map((w) => (
              <li key={w} className="flex gap-2 text-sm">
                <span className="font-bold text-navy-light">✓</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Program Benefits</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {distributor.benefits.map((b) => (
              <div key={b.title} className="card">
                <h3 className="font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">How to Join</h2>
          <ol className="mt-4 space-y-3">
            {distributor.steps.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <Link to="/contact" className="btn btn-primary mt-5">
            Apply as Distributor
          </Link>
        </div>
      </section>
    </>
  );
}
