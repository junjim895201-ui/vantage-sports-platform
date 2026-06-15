import Seo from "../components/seo/Seo";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function FactoryPartnersPage() {
  const { content, products } = useI18n();
  const { factoryPartners, common } = content;
  const { factoryCapabilities } = products;

  return (
    <>
      <Seo
        title={factoryPartners.seo.title}
        description={factoryPartners.seo.description}
        path="/factory-partners"
        keywords={common.seoKeywords.factoryPartners}
      />
      <PageHero title={factoryPartners.title} subtitle={factoryPartners.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-3xl text-sm text-slate-600">{factoryPartners.intro}</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.activeManufacturingPartners}</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {factoryPartners.partners
              .filter((p) => p.name === "INFIV")
              .map((p) => (
                <article key={p.name} className="card border-gold/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                      {p.status}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold">{p.role}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-500">{common.productLines}</p>
                  <p className="text-sm text-slate-600">{p.products.join(" · ")}</p>
                  <ul className="mt-3 space-y-1">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-600">
                        <span className="font-bold text-navy-light">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.factoryCapabilities}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: common.heritage, value: factoryCapabilities.heritage },
              { label: common.featherVolume, value: factoryCapabilities.annualFeatherVolume },
              { label: common.capacity, value: factoryCapabilities.shuttleCapacity },
              { label: common.factory, value: factoryCapabilities.factorySize },
              { label: common.qc, value: `${factoryCapabilities.qcNodes} · ${factoryCapabilities.defectRate}` },
              { label: common.patents, value: `${factoryCapabilities.patents}` },
            ].map((s) => (
              <div key={s.label} className="card">
                <p className="text-xs font-semibold uppercase text-gold">{s.label}</p>
                <p className="mt-1 text-sm text-navy">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy py-10 text-white md:py-12">
        <div className="container-main">
          <h2 className="text-xl font-bold">{factoryPartners.recruitmentTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">{factoryPartners.recruitmentDesc}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {factoryPartners.recruitmentCtas.map((cta) => (
              <LocalizedLink key={cta.path} to={cta.path} className="btn btn-primary w-full sm:w-auto">
                {cta.label}
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{factoryPartners.futureTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{factoryPartners.futureNote}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {factoryPartners.partners
              .filter((p) => p.name !== "INFIV")
              .map((p, i) => (
                <article key={`${p.name}-${i}`} className="card border-dashed border-slate-300">
                  <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                    {p.status}
                  </span>
                  <h3 className="mt-2 font-bold text-navy">{p.name}</h3>
                  <p className="text-xs font-semibold text-gold">{p.role}</p>
                  <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
                  <ul className="mt-3 space-y-1">
                    {p.highlights.map((h) => (
                      <li key={h} className="text-xs text-slate-500">
                        · {h}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
          <LocalizedLink to="/contact" className="btn btn-primary mt-6 w-full sm:w-auto">
            {common.discussOemPartnership}
          </LocalizedLink>
        </div>
      </section>
    </>
  );
}
