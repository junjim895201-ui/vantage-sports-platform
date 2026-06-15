import Seo from "../components/seo/Seo";
import DownloadCatalogCta from "../components/ui/DownloadCatalogCta";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function MarketCoveragePage() {
  const { content } = useI18n();
  const { marketCoverage, common } = content;

  return (
    <>
      <Seo
        title={marketCoverage.seo.title}
        description={marketCoverage.seo.description}
        path="/market-coverage"
        keywords={common.seoKeywords.marketCoverage}
      />
      <PageHero title={marketCoverage.title} subtitle={marketCoverage.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-3xl text-sm text-slate-600">{marketCoverage.intro}</p>
          <h2 className="mt-8 text-xl font-bold text-navy">{common.marketEntryServices}</h2>
          <ul className="mt-4 space-y-2">
            {marketCoverage.services.map((s) => (
              <li key={s} className="flex gap-2 text-sm">
                <span className="shrink-0 font-bold text-gold">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="grid gap-4 md:grid-cols-2">
            {marketCoverage.regions.map((r) => (
              <article key={r.code} className="card">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {r.code}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{r.country}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold">{r.status}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{r.highlight}</p>
                <p className="mt-2 text-sm text-slate-500">
                  <span className="font-semibold text-navy">{common.opportunityLabel}:</span> {r.opportunity}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.channels.map((c) => (
                    <span key={c} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-3 border-t border-slate-100 pt-3">
                  <p className="text-xs font-semibold text-slate-500">{common.recommendedSkus}</p>
                  <p className="mt-1 text-xs text-slate-600">{r.products.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
          <LocalizedLink to="/distributor-program" className="btn btn-primary mt-6 w-full sm:w-auto">
            {common.applyForMarket}
          </LocalizedLink>
        </div>
      </section>

      <DownloadCatalogCta variant="band" />
    </>
  );
}
