import ResponsiveImage from "./ResponsiveImage";

type Props = {
  sku: string;
  gradeLabel: string;
  tagline: string;
  positioning: string;
  application: string;
  highlights: string[];
  imageSrc: string;
  craftSrc?: string;
  manufacturingPartner: string;
};

export default function ProductVisualCard({
  sku,
  gradeLabel,
  tagline,
  positioning,
  application,
  highlights,
  imageSrc,
  craftSrc,
  manufacturingPartner,
}: Props) {
  return (
    <article className="card flex flex-col overflow-hidden p-0">
      <div className="relative bg-slate-100">
        <ResponsiveImage
          src={imageSrc}
          alt={`${sku} shuttlecock product`}
          wrapperClassName="aspect-[4/3] w-full"
          className="h-full w-full object-contain p-4"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">{sku}</span>
          <span className="rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-navy">{gradeLabel}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-gold">{tagline}</p>
        <p className="mt-2 text-sm text-slate-600">{positioning}</p>
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
        {craftSrc && (
          <ResponsiveImage
            src={craftSrc}
            alt={`${sku} manufacturing detail`}
            wrapperClassName="mt-4 aspect-[16/7] w-full rounded-lg"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>
    </article>
  );
}
