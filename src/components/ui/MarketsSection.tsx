import { useI18n } from "../../i18n";

export default function MarketsSection() {
  const { content } = useI18n();
  const { marketsSection } = content;

  return (
    <section className="section bg-slate-50" aria-labelledby="markets-heading">
      <div className="container-main">
        <h2 id="markets-heading" className="text-2xl font-bold text-navy">
          {marketsSection.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">{marketsSection.subtitle}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {marketsSection.regions.map((r) => (
            <div key={r.code} className="card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {r.code}
                </span>
                <h3 className="text-lg font-bold text-navy">{r.country}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-500">{r.highlight}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.channels.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
