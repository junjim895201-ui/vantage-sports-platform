import ResponsiveImage from "./ResponsiveImage";

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({ title, subtitle, eyebrow, imageSrc, imageAlt }: PageHeroProps) {
  if (imageSrc) {
    return (
      <section className="relative overflow-hidden bg-navy text-white">
        <ResponsiveImage
          src={imageSrc}
          alt={imageAlt ?? title}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
        <div className="container-main relative py-10 md:py-12">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-gold">{eyebrow}</p>
          )}
          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy text-white">
      <div className="container-main py-10 md:py-12">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-widest text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
