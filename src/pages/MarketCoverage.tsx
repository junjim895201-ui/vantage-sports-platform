import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { marketCoverage } from "../content/en";

export default function MarketCoveragePage() {
  return (
    <>
      <Seo title={marketCoverage.seo.title} description={marketCoverage.seo.description} path="/market-coverage" />
      <PageHero title={marketCoverage.title} subtitle={marketCoverage.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-2xl text-sm text-slate-600">{marketCoverage.intro}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {marketCoverage.regions.map((r) => (
              <div key={r.code} className="card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {r.code}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{r.country}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-500">{r.highlight}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.channels.map((c) => (
                    <span key={c} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Market Entry Services</h2>
          <ul className="mt-4 space-y-2">
            {marketCoverage.services.map((s) => (
              <li key={s} className="flex gap-2 text-sm">
                <span className="font-bold text-navy-light">✓</span>
                {s}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary mt-5">
            Discuss Your Market
          </Link>
        </div>
      </section>
    </>
  );
}
