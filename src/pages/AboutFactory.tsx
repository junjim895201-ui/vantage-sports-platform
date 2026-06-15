import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function AboutFactoryPage() {
  const { content } = useI18n();
  const { aboutFactory, common } = content;

  return (
    <>
      <Seo
        title={aboutFactory.seo.title}
        description={aboutFactory.seo.description}
        path="/about-factory"
        keywords={common.seoKeywords.aboutFactory}
      />
      <PageHero title={aboutFactory.title} subtitle={aboutFactory.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-3xl text-sm text-slate-600">{aboutFactory.intro}</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{aboutFactory.partnersTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutFactory.stats.map((s) => (
              <div key={s.label} className="card">
                <p className="text-xs font-semibold uppercase text-gold">{s.label}</p>
                <p className="mt-1 text-sm text-navy">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{aboutFactory.technologyTitle}</h2>
          <ul className="mt-4 space-y-2">
            {aboutFactory.technology.map((t) => (
              <li key={t} className="flex gap-2 text-sm">
                <span className="shrink-0 font-bold text-navy-light">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{aboutFactory.globalTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">{aboutFactory.globalText}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{aboutFactory.valueChainTitle}</h2>
          <ol className="mt-4 space-y-3">
            {aboutFactory.chain.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="card mt-5 border-slate-200 bg-slate-50">
            <p className="text-sm text-slate-600">{aboutFactory.excludedNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
