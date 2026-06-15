type Props = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
};

export default function ResponsiveImage({
  src,
  alt,
  className = "h-full w-full object-cover",
  wrapperClassName = "",
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      <img src={src} alt={alt} loading={loading} decoding="async" sizes={sizes} className={className} />
    </div>
  );
}
