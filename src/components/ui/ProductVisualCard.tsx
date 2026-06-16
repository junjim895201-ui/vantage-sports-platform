import type { ProductVisualSet } from "../../lib/media";
import ResponsiveImage from "./ResponsiveImage";

type VisualLabels = {
  feature: string;
  usage: string;
  packaging: string;
};

type Props = {
  sku: string;
  gradeLabel: string;
  tagline: string;
  positioning: string;
  application: string;
  highlights: string[];
  visuals: ProductVisualSet;
  visualLabels: VisualLabels;
  manufacturingPartner: string;
};

function VisualTile({
  src,
  alt,
  label,
  callouts,
}: {
  src: string;
  alt: string;
  label: string;
  callouts?: string[];
}) {
  return (
    <figure className="group relative overflow-hidden rounded-lg">
      <ResponsiveImage
        src={src}
        alt={alt}
        wrapperClassName="aspect-[4/3] w-full"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-xs font-bold uppercase tracking-wider text-gold">{label}</p>
        {callouts && callouts.length > 0 && (
          <ul className="mt-1.5 flex flex-wrap gap-1">
            {callouts.slice(0, 3).map((c) => (
              <li
                key={c}
                className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
              >
                {c}
              </li>
            ))}
          </ul>
        )}
      </figcaption>
    </figure>
  );
}

export default function ProductVisualCard({
  sku,
  gradeLabel,
  tagline,
  positioning,
  application,
  highlights,
  visuals,
  visualLabels,
  manufacturingPartner,
}: Props) {
  return (
    <article className="card flex flex-col overflow-hidden p-0">
      <div className="relative">
        <ResponsiveImage
          src={visuals.hero}
          alt={`${sku} shuttlecock hero`}
          wrapperClassName="aspect-[16/10] w-full"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
            {sku}
          </span>
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">{gradeLabel}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm font-semibold text-gold">{tagline}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 bg-navy p-1">
        <VisualTile
          src={visuals.feature}
          alt={`${sku} feature detail`}
          label={visualLabels.feature}
          callouts={highlights}
        />
        <VisualTile src={visuals.usage} alt={`${sku} on-court usage`} label={visualLabels.usage} />
        <VisualTile src={visuals.packaging} alt={`${sku} retail packaging`} label={visualLabels.packaging} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-slate-600">{positioning}</p>
        <ul className="mt-3 flex-1 space-y-1.5">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-slate-600">
              <span className="shrink-0 font-bold text-navy-light">✓</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <p className="text-xs font-semibold text-slate-500">Application</p>
          <p className="mt-1 text-sm text-slate-600">{application}</p>
          <p className="mt-2 text-xs text-slate-400">{manufacturingPartner}</p>
        </div>
      </div>
    </article>
  );
}
