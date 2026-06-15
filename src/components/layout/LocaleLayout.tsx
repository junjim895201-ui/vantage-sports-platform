import { Outlet } from "react-router-dom";
import { I18nProvider, type Locale } from "../../i18n";
import Layout from "./Layout";

type Props = {
  locale: Locale;
};

export default function LocaleLayout({ locale }: Props) {
  return (
    <I18nProvider locale={locale}>
      <Layout>
        <Outlet />
      </Layout>
    </I18nProvider>
  );
}
