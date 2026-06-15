import Seo from "../components/seo/Seo";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function OemManufacturingPage() {
  const { content } = useI18n();
  const { oem, common } = content;

  return (
    <>
      <Seo
        title={oem.seo.title}
        description={oem.seo.description}
        path="/oem-manufacturing"
        keywords={common.seoKeywords.oem}
      />
      <PageHero title={oem.title} subtitle={oem.subtitle} />

      <section className="section">
        <div className="container-main">
          <div className="card border-gold/30 bg-navy text-white">
            <p className="text-sm leading-relaxed text-slate-200">{oem.partnerIntro}</p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
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

      <section className="section bg-slate-50">
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

      <section className="section">
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
