import { useI18n } from "../../i18n";
import LocalizedLink from "./LocalizedLink";

type Props = {
  variant?: "light" | "dark";
};

export default function ClubTestingCta({ variant = "dark" }: Props) {
  const { content } = useI18n();
  const { testing, common } = content;
  const isDark = variant === "dark";

  return (
    <section
      className={isDark ? "bg-navy py-10 text-white md:py-12" : "section border-y border-slate-200 bg-white"}
      aria-labelledby="club-testing-cta"
    >
      <div className="container-main text-center sm:text-left">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">{testing.ctaTitle}</p>
            <h2
              id="club-testing-cta"
              className={`mt-2 text-xl font-bold md:text-2xl ${isDark ? "text-white" : "text-navy"}`}
            >
              {common.applyFreeShuttleTestingTitle}
            </h2>
            <p className={`mt-2 text-sm ${isDark ? "text-slate-300" : "text-slate-500"}`}>
              {testing.ctaSubtitle}
            </p>
          </div>
          <LocalizedLink to="/shuttle-testing" className="btn btn-primary w-full shrink-0 sm:w-auto">
            {testing.ctaButton}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}
