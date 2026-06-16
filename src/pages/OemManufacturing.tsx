import Seo from "../components/seo/Seo";
import LocalizedLink from "../components/ui/LocalizedLink";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import { phase6aMedia, phase6bMedia } from "../lib/media";
import { useI18n } from "../i18n";

const oemVisualImages = {
  capacity: phase6bMedia.hero,
  quality: phase6bMedia.factory.building02089,
  services: phase6bMedia.factory.workers02084,
  privateLabel: phase6aMedia.products.G4.packaging,
  dealerSupport: phase6bMedia.campus.aerial10,
};

export default function OemManufacturingPage() {
  const { content } = useI18n();
  const { oem, common } = content;
  const sections = Object.entries(oem.visualSections) as [
    keyof typeof oem.visualSections,
    (typeof oem.visualSections)[keyof typeof oem.visualSections],
  ][];

  return (
    <>
      <Seo
        title={oem.seo.title}
        description={oem.seo.description}
        path="/oem-manufacturing"
        keywords={common.seoKeywords.oem}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <ResponsiveImage
          src={phase6bMedia.hero}
          alt="Aerial campus view of VANTAGE SPORTS OEM manufacturing partner facility"
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
        <div className="container-main relative py-10 md:py-14">
          <h1 className="text-3xl font-bold md:text-4xl">{oem.title}</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{oem.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <div className="card border-gold/30 bg-navy text-white">
            <p className="text-sm leading-relaxed text-slate-200">{oem.partnerIntro}</p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main space-y-8">
          {sections.map(([key, section], index) => (
            <div
              key={key}
              className={`grid items-center gap-6 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <ResponsiveImage
                src={oemVisualImages[key]}
                alt={`${section.title} — VANTAGE SPORTS OEM manufacturing partner`}
                wrapperClassName={`aspect-[16/10] w-full rounded-xl border border-slate-200 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                loading="lazy"
              />
              <div className={`card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-xl font-bold text-navy">{section.title}</h2>
                <p className="mt-3 text-sm text-slate-600">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.oemBrandSolutions}</h2>
          <p className="mt-2 text-sm text-slate-500">{common.oemBrandSolutionsDesc}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {oem.brandTypes.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{oem.productLineTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{oem.productLineSubtitle}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {(["G4", "G6", "G7"] as const).map((sku) => (
              <div key={sku} className="card overflow-hidden p-0">
                <ResponsiveImage
                  src={phase6aMedia.products[sku].packaging}
                  alt={`${sku} private label packaging reference`}
                  wrapperClassName="aspect-[3/5] w-full"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <p className="border-t border-slate-100 p-3 text-center text-sm font-bold text-navy">{sku}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.oemScope}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {oem.scopes.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.oemWorkflow}</h2>
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

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.moqGuidance}</h2>
          <div className="card mt-4 max-w-lg">
            {oem.moq.map((m) => (
              <p key={m} className="text-sm text-slate-600">
                {m}
              </p>
            ))}
          </div>
          <LocalizedLink to="/contact" className="btn btn-primary mt-5 w-full sm:w-auto">
            {common.startOemDiscussion}
          </LocalizedLink>
        </div>
      </section>
    </>
  );
}
