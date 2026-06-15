import Seo from "../components/seo/Seo";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { useI18n } from "../i18n";

export default function ProductComparisonPage() {
  const { content } = useI18n();
  const { productComparison, common } = content;
  const h = productComparison.tableHeaders;

  return (
    <>
      <Seo
        title={productComparison.seo.title}
        description={productComparison.seo.description}
        path="/product-comparison"
        keywords={common.seoKeywords.productComparison}
      />
      <PageHero title={productComparison.title} subtitle={productComparison.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-3xl text-sm text-slate-600">{productComparison.intro}</p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">{h.attribute}</th>
                  <th className="px-4 py-3 font-semibold">{h.g4}</th>
                  <th className="px-4 py-3 font-semibold">{h.g6}</th>
                  <th className="px-4 py-3 font-semibold">{h.g7}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {productComparison.rows.map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-3 font-semibold text-navy">{row.label}</td>
                    <td className="px-4 py-3 text-slate-600">{row.g4}</td>
                    <td className="px-4 py-3 text-slate-600">{row.g6}</td>
                    <td className="px-4 py-3 text-slate-600">{row.g7}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-main text-center sm:text-left">
          <h2 className="text-xl font-bold">{productComparison.ctaTitle}</h2>
          <p className="mt-2 text-sm text-slate-300">{productComparison.ctaDesc}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <LocalizedLink to="/shuttle-testing#apply" className="btn btn-primary w-full sm:w-auto">
              {common.applyFreeShuttleTesting}
            </LocalizedLink>
            <LocalizedLink to="/distributor-program#apply" className="btn btn-outline-light w-full sm:w-auto">
              {common.distributorApplication}
            </LocalizedLink>
            <LocalizedLink to="/download-center" className="btn btn-outline-light w-full sm:w-auto">
              {content.downloadCenter.title}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
