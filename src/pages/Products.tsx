import Seo from "../components/seo/Seo";
import ClubTestingCta from "../components/ui/ClubTestingCta";
import DownloadCatalogCta from "../components/ui/DownloadCatalogCta";
import LocalizedLink from "../components/ui/LocalizedLink";
import ProductVisualCard from "../components/ui/ProductVisualCard";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import { phase6aMedia } from "../lib/media";
import { useI18n } from "../i18n";

const productMediaMap = {
  G4: phase6aMedia.products.G4,
  G6: phase6aMedia.products.G6,
  G7: phase6aMedia.products.G7,
} as const;

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
      <section className="relative overflow-hidden bg-navy text-white">
        <ResponsiveImage
          src={phase6aMedia.products.floating}
          alt="Shuttlecock product hero"
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container-main relative py-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">{copy.partnerNote}</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{copy.subtitle}</p>
        </div>
      </section>

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
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {shuttleProducts.map((p) => {
              const media = productMediaMap[p.sku as keyof typeof productMediaMap];
              const tagline = copy.visualTaglines[p.sku as keyof typeof copy.visualTaglines];
              return (
                <ProductVisualCard
                  key={p.sku}
                  sku={p.sku}
                  gradeLabel={p.gradeLabel}
                  tagline={tagline}
                  positioning={p.positioning}
                  application={p.recommendedFor.join(" · ")}
                  highlights={p.highlights}
                  visuals={media}
                  visualLabels={copy.visualLabels}
                  manufacturingPartner={p.manufacturingPartner}
                />
              );
            })}
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
        <div className="container-main grid items-start gap-8 lg:grid-cols-2">
          <div>
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
          <ResponsiveImage
            src={phase6aMedia.factory.quality}
            alt="Manufacturing partner quality and technology credentials"
            wrapperClassName="aspect-[4/3] w-full rounded-xl border border-slate-200"
            loading="lazy"
          />
        </div>
      </section>

      <DownloadCatalogCta variant="band" />
    </>
  );
}
