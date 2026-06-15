import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import ContactChannels from "../components/ui/ContactChannels";
import ContactForm from "../components/ui/ContactForm";
import { useI18n } from "../i18n";

export default function ContactPage() {
  const { content } = useI18n();
  const { contact, site, common } = content;

  return (
    <>
      <Seo
        title={contact.seo.title}
        description={contact.seo.description}
        path="/contact"
        keywords={common.seoKeywords.contact}
      />
      <PageHero title={contact.title} subtitle={contact.subtitle} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{common.quickContact}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {common.whatsapp}: {site.whatsappDisplay} · {site.email}
          </p>
          <div className="mt-4">
            <ContactChannels />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">{contact.formTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">{contact.formNote}</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
