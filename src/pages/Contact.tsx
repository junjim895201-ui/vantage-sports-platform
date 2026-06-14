import Seo from "../components/seo/Seo";
import PageHero from "../components/ui/PageHero";
import ContactChannels from "../components/ui/ContactChannels";
import ContactForm from "../components/ui/ContactForm";
import { contact, site } from "../content/en";

export default function ContactPage() {
  return (
    <>
      <Seo title={contact.seo.title} description={contact.seo.description} path="/contact" />
      <PageHero title={contact.title} subtitle={contact.subtitle} />

      <section className="section">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Quick Contact</h2>
          <p className="mt-2 text-sm text-slate-500">
            WhatsApp: {site.whatsappDisplay} · {site.email}
          </p>
          <div className="mt-4">
            <ContactChannels />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <h2 className="text-xl font-bold text-navy">Partnership Inquiry Form</h2>
          <p className="mt-2 text-sm text-slate-500">Static form — CRM integration planned.</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
