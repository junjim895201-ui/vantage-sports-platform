import Seo from "../components/seo/Seo";
import DistributorLeadForm from "../components/ui/DistributorLeadForm";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import { mediaAlt, realAssets } from "../lib/media";
import { useI18n } from "../i18n";

const galleryItems = [
  { src: realAssets.distributor.production, alt: mediaAlt.distributorProduction, label: "Factory Direct Supply" },
  { src: realAssets.distributor.team, alt: mediaAlt.distributorTeam, label: "Production Capacity" },
  { src: realAssets.distributor.campus, alt: mediaAlt.distributorCampus, label: "Campus & Export Scale" },
] as const;

export default function DistributorProgramPage() {
  const { content } = useI18n();
  const { distributor, common } = content;

  return (
    <>
      <Seo
        title={distributor.seo.title}
        description={distributor.seo.description}
        path="/distributor-program"
        keywords={common.seoKeywords.distributor}
      />
      <PageHero title={distributor.title} subtitle={distributor.subtitle} />

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{distributor.visualGalleryTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{distributor.visualGalleryDesc}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.label} className="card overflow-hidden p-0">
                <ResponsiveImage
                  src={item.src}
                  alt={item.alt}
                  wrapperClassName="aspect-[4/3] w-full"
                  className="h-full w-full object-cover"
                />
                <p className="p-4 text-sm font-semibold text-navy">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy">{common.whoShouldApply}</h2>
            <ul className="mt-4 space-y-2">
              {distributor.who.map((w) => (
                <li key={w} className="flex gap-2 text-sm">
                  <span className="shrink-0 font-bold text-navy-light">✓</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <ResponsiveImage
            src={realAssets.distributor.court}
            alt={mediaAlt.distributorCourt}
            wrapperClassName="aspect-[4/3] w-full rounded-xl border border-slate-200"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.programBenefits}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {distributor.benefits.map((b) => (
              <div key={b.title} className="card">
                <h3 className="font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
          <LocalizedLink to="/market-coverage" className="btn btn-secondary mt-5 w-full sm:w-auto">
            {common.exploreMarketCoverage}
          </LocalizedLink>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{distributor.leadFormTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{distributor.leadFormSubtitle}</p>
          <div className="mt-5">
            <DistributorLeadForm />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.howToJoin}</h2>
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
        </div>
      </section>
    </>
  );
}
