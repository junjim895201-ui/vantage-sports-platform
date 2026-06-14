type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
};

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
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
