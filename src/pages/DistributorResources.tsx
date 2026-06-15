import Seo from "../components/seo/Seo";
import DownloadCatalogCta from "../components/ui/DownloadCatalogCta";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function DistributorResourcesPage() {
  const { content } = useI18n();
  const { distributorResources, common } = content;

  return (
    <>
      <Seo
        title={distributorResources.seo.title}
        description={distributorResources.seo.description}
        path="/distributor-resources"
        keywords={common.seoKeywords.distributorResources}
      />
      <PageHero title={distributorResources.title} subtitle={distributorResources.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-2xl text-sm text-slate-600">{distributorResources.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {distributorResources.resources.map((r) => (
              <div key={r.title} className="card flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wide text-gold">{r.type}</span>
                <h3 className="mt-1 text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{r.desc}</p>
                <LocalizedLink to={r.path} className="btn btn-secondary mt-4 w-full text-center text-sm">
                  {r.cta}
                </LocalizedLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main max-w-lg">
          <DownloadCatalogCta />
        </div>
      </section>
    </>
  );
}
