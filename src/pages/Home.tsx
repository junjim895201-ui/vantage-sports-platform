import Seo from "../components/seo/Seo";
import ClubTestingCta from "../components/ui/ClubTestingCta";
import DownloadCatalogCta from "../components/ui/DownloadCatalogCta";
import KpiStatGrid from "../components/ui/KpiStatGrid";
import LocalizedLink from "../components/ui/LocalizedLink";
import MarketsSection from "../components/ui/MarketsSection";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import { mediaAlt, phase6aMedia, realAssets } from "../lib/media";
import { useI18n } from "../i18n";

const visualCardImages = realAssets.homepage.trustCards;
const visualCardAlts = [mediaAlt.trustAerial, mediaAlt.trustBuilding, mediaAlt.trustFacility];

const productHeroImages = {
  G4: phase6aMedia.products.G4.hero,
  G6: phase6aMedia.products.G6.hero,
  G7: phase6aMedia.products.G7.hero,
} as const;

export default function HomePage() {
  const { content } = useI18n();
  const { home, common, productComparison, downloadCenter } = content;

  return (
    <>
      <Seo
        title={home.seo.title}
        description={home.seo.description}
        path="/"
        keywords={common.seoKeywords.home}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <ResponsiveImage
          src={realAssets.homepage.hero}
          alt={mediaAlt.homepageHero}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="container-main relative py-12 md:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">{home.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{home.title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">{home.subtitle}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LocalizedLink to="/products" className="btn btn-primary w-full sm:w-auto">
              {home.ctaProducts}
            </LocalizedLink>
            <LocalizedLink to="/distributor-program" className="btn btn-secondary w-full sm:w-auto">
              {home.ctaDistributor}
            </LocalizedLink>
            <LocalizedLink to="/shuttle-testing" className="btn btn-outline-light w-full sm:w-auto">
              {home.ctaTesting}
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <KpiStatGrid title={home.kpiTitle} items={home.kpiStats} />
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{home.productPreviewTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{home.productPreviewSubtitle}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {home.productPreview.map((item) => (
              <LocalizedLink
                key={item.sku}
                to="/products"
                className="card block overflow-hidden p-0 transition hover:border-gold/40"
              >
                <ResponsiveImage
                  src={productHeroImages[item.sku as keyof typeof productHeroImages]}
                  alt={`${item.sku} shuttlecock — VANTAGE SPORTS partner series`}
                  wrapperClassName="aspect-[4/3] w-full"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="border-t border-slate-100 p-4">
                  <p className="font-bold text-navy">{item.sku}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{home.visualCardsTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {home.visualCards.map((card, i) => (
              <div key={card.title} className="card overflow-hidden p-0">
                <ResponsiveImage
                  src={visualCardImages[i]}
                  alt={visualCardAlts[i] ?? card.title}
                  wrapperClassName="aspect-[16/10] w-full"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">{home.trustTitle}</h2>
            <p className="mt-2 text-sm text-slate-600">{home.trustSubtitle}</p>
            <ul className="mt-5 space-y-3">
              {home.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ResponsiveImage
            src={realAssets.homepage.trustCampus}
            alt={mediaAlt.trustCampus}
            wrapperClassName="aspect-[4/3] w-full rounded-xl border border-slate-200 shadow-sm"
            className="h-full w-full object-cover"
            loading="lazy"
          />
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

      <section className="section">
        <div className="container-main grid items-center gap-8 lg:grid-cols-2">
          <ResponsiveImage
            src={realAssets.club.coaching}
            alt={mediaAlt.clubCoaching}
            wrapperClassName="aspect-[4/3] w-full rounded-xl border border-slate-200"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-navy">{home.audiencesTitle}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {home.audiences.map((a) => (
                <div key={a.title} className="card">
                  <h3 className="font-semibold text-navy">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{downloadCenter.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{downloadCenter.subtitle}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <LocalizedLink to="/product-comparison" className="card block hover:border-gold/40">
              <h3 className="font-semibold text-navy">{productComparison.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{productComparison.subtitle}</p>
            </LocalizedLink>
            <LocalizedLink to="/download-center" className="card block hover:border-gold/40">
              <h3 className="font-semibold text-navy">{downloadCenter.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{downloadCenter.subtitle}</p>
            </LocalizedLink>
            <LocalizedLink to="/factory-partners" className="card block hover:border-gold/40">
              <h3 className="font-semibold text-navy">{content.factoryPartners.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{content.factoryPartners.subtitle}</p>
            </LocalizedLink>
          </div>
        </div>
      </section>

      <MarketsSection />
      <section className="container-main -mt-6 pb-10">
        <LocalizedLink to="/market-coverage" className="btn btn-secondary w-full sm:w-auto">
          {common.viewMarketCoverage}
        </LocalizedLink>
      </section>

      <ClubTestingCta />
      <DownloadCatalogCta variant="band" />

      <section className="bg-navy py-10 text-center text-white md:py-12">
        <div className="container-main">
          <h2 className="text-2xl font-bold">{home.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">{home.ctaDesc}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <LocalizedLink to="/distributor-program#apply" className="btn btn-primary w-full sm:w-auto">
              {common.distributorApplication}
            </LocalizedLink>
            <LocalizedLink to="/contact" className="btn btn-outline-light w-full sm:w-auto">
              {common.contactUs}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
