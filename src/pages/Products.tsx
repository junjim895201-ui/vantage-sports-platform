import Seo from "../components/seo/Seo";
import ClubTestingCta from "../components/ui/ClubTestingCta";
import DownloadCatalogCta from "../components/ui/DownloadCatalogCta";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

const gradeClass: Record<string, string> = {
  tournament: "grade-tournament",
  club: "grade-club",
  economy: "grade-economy",
};

export default function ProductsPage() {
  const { content, products } = useI18n();
  const { products: copy, common } = content;
  const { shuttleProducts, accessoryLines } = products;

  return (
    <>
      <Seo
        title={copy.seo.title}
        description={copy.seo.description}
        path="/products"
        keywords={common.seoKeywords.products}
      />
      <PageHero title={copy.title} subtitle={copy.subtitle} eyebrow={copy.partnerNote} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{copy.shuttleTitle}</h2>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {copy.gradeLegend.map((g) => (
              <div
                key={g.sku}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <span className="font-bold text-navy">{g.sku}</span>
                <span className="text-slate-400">=</span>
                <span className="font-semibold text-navy-light">{g.label}</span>
                <span className="hidden text-slate-500 sm:inline">· {g.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {shuttleProducts.map((p) => (
              <article key={p.sku} className="card flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`grade-badge ${gradeClass[p.grade]}`}>{p.gradeLabel}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">{p.sku}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-navy">{p.name}</h3>
                <p className="text-sm font-medium text-navy-light">{p.series}</p>
                <p className="mt-1 text-xs text-slate-400">{p.manufacturingPartner}</p>
                <p className="mt-2 text-sm text-slate-500">{p.positioning}</p>
                <ul className="mt-3 flex-1 space-y-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-slate-600">
                      <span className="shrink-0 font-bold text-navy-light">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-xs font-semibold text-slate-500">{common.bestFor}</p>
                  <p className="mt-1 text-xs text-slate-600">{p.recommendedFor.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClubTestingCta variant="light" />

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{copy.accessoryTitle}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {accessoryLines.map((line) => (
              <div key={line.category} className="card">
                <h3 className="font-semibold text-navy">{line.category}</h3>
                <p className="mt-1 text-xs text-slate-400">{line.partner}</p>
                <ul className="mt-3 space-y-1">
                  {line.items.map((item) => (
                    <li key={item} className="text-sm text-slate-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.exportStandards}</h2>
          <ul className="mt-4 space-y-2">
            {copy.specs.map((s) => (
              <li key={s} className="flex gap-2 text-sm">
                <span className="font-bold text-navy-light">✓</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">{copy.note}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <LocalizedLink to="/shuttle-testing" className="btn btn-secondary w-full sm:w-auto">
              {common.applyFreeShuttleTesting}
            </LocalizedLink>
            <LocalizedLink to="/distributor-program" className="btn btn-primary w-full sm:w-auto">
              {common.distributorApplication}
            </LocalizedLink>
          </div>
        </div>
      </section>

      <DownloadCatalogCta variant="band" />
    </>
  );
}
