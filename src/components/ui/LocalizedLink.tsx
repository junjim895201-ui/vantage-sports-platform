import { Link, type LinkProps } from "react-router-dom";
import { useI18n } from "../../i18n";

type LocalizedLinkProps = Omit<LinkProps, "to"> & {
  to: string;
};

export default function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const { localizedPath } = useI18n();
  return <Link to={localizedPath(to)} {...props} />;
}
