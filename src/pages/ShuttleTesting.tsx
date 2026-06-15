import Seo from "../components/seo/Seo";
import ClubTestingCta from "../components/ui/ClubTestingCta";
import PageHero from "../components/ui/PageHero";
import ShuttleTestingApplicationForm from "../components/ui/ShuttleTestingApplicationForm";
import { useI18n } from "../i18n";

export default function ShuttleTestingPage() {
  const { content } = useI18n();
  const { testing, common } = content;

  return (
    <>
      <Seo
        title={testing.seo.title}
        description={testing.seo.description}
        path="/shuttle-testing"
        keywords={common.seoKeywords.testing}
      />
      <PageHero title={testing.title} subtitle={testing.subtitle} />

      <ClubTestingCta />

      <section className="section" id="apply">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{testing.applicationTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{testing.applicationSubtitle}</p>
          <div className="mt-5">
            <ShuttleTestingApplicationForm />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.eligibleApplicants}</h2>
          <ul className="mt-4 space-y-2">
            {testing.who.map((w) => (
              <li key={w} className="flex gap-2 text-sm">
                <span className="shrink-0 font-bold text-navy-light">✓</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.whatYouReceive}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {testing.includes.map((item) => (
              <div key={item} className="card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.applicationProcess}</h2>
          <ol className="mt-4 space-y-3">
            {testing.steps.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="card mt-5 border-amber-200 bg-amber-50">
            <p className="text-sm text-amber-800">{testing.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
