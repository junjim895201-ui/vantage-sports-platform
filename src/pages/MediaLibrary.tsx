import Seo from "../components/seo/Seo";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function MediaLibraryPage() {
  const { content } = useI18n();
  const { mediaLibrary, common } = content;

  return (
    <>
      <Seo
        title={mediaLibrary.seo.title}
        description={mediaLibrary.seo.description}
        path="/media-library"
        keywords={common.seoKeywords.mediaLibrary}
      />
      <PageHero title={mediaLibrary.title} subtitle={mediaLibrary.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-2xl text-sm text-slate-600">{mediaLibrary.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mediaLibrary.categories.map((cat) => (
              <div key={cat.id} className="card">
                <div className="flex aspect-video items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                  <span className="text-sm font-medium">{common.mediaComingSoon}</span>
                </div>
                <h3 className="mt-3 font-bold text-navy">{cat.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{cat.desc}</p>
                <span className="mt-2 inline-block text-xs font-semibold text-gold">{cat.count}</span>
              </div>
            ))}
          </div>
          <div className="card mt-6 border-amber-200 bg-amber-50">
            <p className="text-sm text-amber-900">{mediaLibrary.placeholderNote}</p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <LocalizedLink to="/distributor-resources" className="btn btn-secondary w-full sm:w-auto">
              {content.distributorResources.title}
            </LocalizedLink>
            <LocalizedLink to="/contact" className="btn btn-primary w-full sm:w-auto">
              {common.requestMediaAccess}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
