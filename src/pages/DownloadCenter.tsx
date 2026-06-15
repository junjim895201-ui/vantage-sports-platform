import Seo from "../components/seo/Seo";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function DownloadCenterPage() {
  const { content } = useI18n();
  const { downloadCenter, common } = content;

  return (
    <>
      <Seo
        title={downloadCenter.seo.title}
        description={downloadCenter.seo.description}
        path="/download-center"
        keywords={common.seoKeywords.downloadCenter}
      />
      <PageHero title={downloadCenter.title} subtitle={downloadCenter.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-2xl text-sm text-slate-600">{downloadCenter.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {downloadCenter.categories.map((item) => (
              <article key={item.title} className="card flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wide text-gold">{item.type}</span>
                <h3 className="mt-1 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{item.desc}</p>
                <LocalizedLink to={item.path} className="btn btn-primary mt-4 w-full text-center text-sm">
                  {item.cta}
                </LocalizedLink>
              </article>
            ))}
          </div>
          <div className="card mt-6 border-gold/20 bg-slate-50">
            <p className="text-sm text-slate-600">{downloadCenter.exportNote}</p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <LocalizedLink to="/contact" className="btn btn-primary w-full sm:w-auto">
              {common.contactUs}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
