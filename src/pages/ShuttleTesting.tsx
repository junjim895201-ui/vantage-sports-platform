import Seo from "../components/seo/Seo";
import ClubTestingCta from "../components/ui/ClubTestingCta";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import ShuttleTestingApplicationForm from "../components/ui/ShuttleTestingApplicationForm";
import { phase6bMedia } from "../lib/media";
import { useI18n } from "../i18n";

export default function ShuttleTestingPage() {
  const { content } = useI18n();
  const { testing, common } = content;

  return (
    <>
      <Seo
        title={testing.seo.title}
        description={testing.seo.description}
        path="/shuttle-testing"
        keywords={common.seoKeywords.testing}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <ResponsiveImage
          src={phase6bMedia.club.venue}
          alt="Partner badminton venue for VANTAGE SPORTS free shuttle testing program"
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="container-main relative py-10 md:py-14">
          <h1 className="text-3xl font-bold md:text-4xl">{testing.title}</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{testing.subtitle}</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{testing.visualGalleryTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{testing.visualGalleryDesc}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="card overflow-hidden p-0">
              <ResponsiveImage
                src={phase6bMedia.club.venue}
                alt="INFIV partner badminton courts for club shuttle testing"
                wrapperClassName="aspect-[4/3] w-full"
                loading="lazy"
              />
              <p className="p-4 text-sm font-semibold text-navy">{testing.visualVenueLabel}</p>
            </div>
            <div className="card overflow-hidden p-0">
              <ResponsiveImage
                src={phase6bMedia.club.coaching}
                alt="Coaching session at partner badminton club — VANTAGE SPORTS testing program"
                wrapperClassName="aspect-[4/3] w-full"
                loading="lazy"
              />
              <p className="p-4 text-sm font-semibold text-navy">{testing.visualCoachingLabel}</p>
            </div>
            <div className="card overflow-hidden p-0">
              <ResponsiveImage
                src={phase6bMedia.club.training}
                alt="Club training with partner shuttlecocks distributed by VANTAGE SPORTS"
                wrapperClassName="aspect-[4/3] w-full"
                loading="lazy"
              />
              <p className="p-4 text-sm font-semibold text-navy">{testing.visualTrainingLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <ClubTestingCta />

      <section className="section" id="apply">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{testing.applicationTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{testing.applicationSubtitle}</p>
          <div className="mt-5">
            <ShuttleTestingApplicationForm />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.eligibleApplicants}</h2>
          <ul className="mt-4 space-y-2">
            {testing.who.map((w) => (
              <li key={w} className="flex gap-2 text-sm">
                <span className="shrink-0 font-bold text-navy-light">✓</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.whatYouReceive}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {testing.includes.map((item) => (
              <div key={item} className="card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.applicationProcess}</h2>
          <ol className="mt-4 space-y-3">
            {testing.steps.map((step, i) => (
              <li key={step} className="card flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="card mt-5 border-amber-200 bg-amber-50">
            <p className="text-sm text-amber-800">{testing.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
