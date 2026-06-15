type KpiItem = {
  value: string;
  label: string;
};

type Props = {
  title?: string;
  items: KpiItem[];
};

export default function KpiStatGrid({ title, items }: Props) {
  return (
    <div>
      {title && <h2 className="text-2xl font-bold text-navy">{title}</h2>}
      <div className={`grid gap-4 sm:grid-cols-2 ${title ? "mt-5" : ""} lg:grid-cols-4`}>
        {items.map((item) => (
          <div
            key={item.label}
            className="card border-gold/20 bg-gradient-to-br from-white to-slate-50 text-center"
          >
            <p className="text-2xl font-bold text-navy md:text-3xl">{item.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
