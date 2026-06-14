import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { testing } from "../content/en";

export default function ShuttleTestingPage() {
  return (
    <>
      <Seo title={testing.seo.title} description={testing.seo.description} path="/shuttle-testing" />
      <PageHero title={testing.title} subtitle={testing.subtitle} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Eligible Applicants</h2>
          <ul className="mt-4 space-y-2">
            {testing.who.map((w) => (
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
          <h2 className="text-xl font-bold text-navy">What You Receive</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {testing.includes.map((item) => (
              <div key={item} className="card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Application Process</h2>
          <ol className="mt-4 space-y-3">
            {testing.steps.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="card mt-5 border-amber-200 bg-amber-50">
            <p className="text-sm text-amber-800">{testing.note}</p>
          </div>
          <Link to="/contact" className="btn btn-primary mt-5">
            Apply for Free Testing
          </Link>
        </div>
      </section>
    </>
  );
}
