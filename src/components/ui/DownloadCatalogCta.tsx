import { useI18n } from "../../i18n";
import LocalizedLink from "./LocalizedLink";

type Props = {
  variant?: "card" | "band";
};

export default function DownloadCatalogCta({ variant = "card" }: Props) {
  const { content } = useI18n();
  const { catalog } = content;

  if (variant === "band") {
    return (
      <section className="bg-navy py-10 text-white md:py-12" aria-labelledby="catalog-cta">
        <div className="container-main flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h2 id="catalog-cta" className="text-xl font-bold">
              {catalog.title}
            </h2>
            <p className="mt-2 text-sm text-slate-300">{catalog.subtitle}</p>
          </div>
          <LocalizedLink to="/contact" className="btn btn-primary w-full shrink-0 sm:w-auto">
            {catalog.ctaLabel}
          </LocalizedLink>
        </div>
      </section>
    );
  }

  return (
    <div className="card border-gold/30 bg-slate-50">
      <h3 className="font-bold text-navy">{catalog.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{catalog.subtitle}</p>
      <p className="mt-2 text-xs text-slate-400">{catalog.note}</p>
      <LocalizedLink to="/contact" className="btn btn-primary mt-4 w-full sm:w-auto">
        {catalog.ctaLabel}
      </LocalizedLink>
    </div>
  );
}
