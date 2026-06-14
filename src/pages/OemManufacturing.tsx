import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { oem } from "../content/en";

export default function OemManufacturingPage() {
  return (
    <>
      <Seo title={oem.seo.title} description={oem.seo.description} path="/oem-manufacturing" />
      <PageHero title={oem.title} subtitle={oem.subtitle} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">OEM Scope</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {oem.scopes.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">OEM Workflow</h2>
          <ol className="mt-4 space-y-3">
            {oem.steps.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">MOQ Guidance</h2>
          <div className="card mt-4 max-w-lg">
            {oem.moq.map((m) => (
              <p key={m} className="text-sm text-slate-600">
                {m}
              </p>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary mt-5">
            Start OEM Discussion
          </Link>
        </div>
      </section>
    </>
  );
}
