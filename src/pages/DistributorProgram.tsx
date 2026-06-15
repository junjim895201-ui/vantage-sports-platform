import Seo from "../components/seo/Seo";
import DistributorLeadForm from "../components/ui/DistributorLeadForm";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

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

      <section className="section">
        <div className="container-main">
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
