import Seo from "../components/seo/Seo";
import ClubTestingCta from "../components/ui/ClubTestingCta";
import DownloadCatalogCta from "../components/ui/DownloadCatalogCta";
import LocalizedLink from "../components/ui/LocalizedLink";
import MarketsSection from "../components/ui/MarketsSection";
import { useI18n } from "../i18n";

export default function HomePage() {
  const { content } = useI18n();
  const { home, common, productComparison, downloadCenter, distributorCrm } = content;

  return (
    <>
      <Seo
        title={home.seo.title}
        description={home.seo.description}
        path="/"
        keywords={common.seoKeywords.home}
      />

      <section className="bg-navy text-white">
        <div className="container-main py-10 md:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">{home.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{home.title}</h1>
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
        <div className="container-main">
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
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-navy">{distributorCrm.pipelineTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{distributorCrm.intro}</p>
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
