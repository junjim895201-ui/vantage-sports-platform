import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import { products } from "../content/en";

export default function ProductsPage() {
  return (
    <>
      <Seo title={products.seo.title} description={products.seo.description} path="/products" />
      <PageHero title={products.title} subtitle={products.subtitle} />

      <section className="section">
        <div className="container-main">
          <div className="grid gap-4 md:grid-cols-2">
            {products.categories.map((c) => (
              <div key={c.title} className="card">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-white">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">What We Provide</h2>
          <ul className="mt-4 space-y-2">
            {products.specs.map((s) => (
              <li key={s} className="flex gap-2 text-sm">
                <span className="font-bold text-navy-light">✓</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500">{products.referenceNote}</p>
          <Link to="/contact" className="btn btn-primary mt-5">
            Request Product Catalog
          </Link>
        </div>
      </section>
    </>
  );
}
