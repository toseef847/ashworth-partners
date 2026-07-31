import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Ashworth & Partners Solicitors",
  description:
    "Contact Ashworth & Partners Solicitors for expert legal advice in London. Free initial consultation. Respond within one business day.",
  path: "/contact",
});

export default async function ContactPage() {
  const config = await cms.getSiteConfig();
  const { contact } = config;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a] py-20" aria-labelledby="contact-heading">
        <div className="container-site">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </p>
          <h1
            id="contact-heading"
            className="font-display text-white font-semibold leading-tight max-w-2xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Contact Our Team
          </h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed">
            We respond to all enquiries within one business day. For urgent
            matters, please call us directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-[#0f172a]/5 p-7 lg:p-10">
              <h2 className="font-display font-semibold text-[#0f172a] text-2xl mb-1">
                Send an Enquiry
              </h2>
              <p className="text-[#0f172a]/50 text-sm mb-6">
                All enquiries are treated in the strictest confidence.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <aside className="lg:col-span-2 space-y-7">
              <div>
                <h2 className="font-display font-semibold text-[#0f172a] text-xl mb-5">
                  Our Office
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#c9a84c]" aria-hidden="true" />
                    </div>
                    <address className="not-italic">
                      <p className="font-semibold text-[#0f172a] text-sm mb-0.5">Address</p>
                      <p className="text-[#0f172a]/60 text-sm leading-relaxed">
                        {contact.address.line1}
                        {contact.address.line2 && (
                          <>, {contact.address.line2}</>
                        )}
                        <br />
                        {contact.address.city}, {contact.address.postcode}
                      </p>
                    </address>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#c9a84c]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f172a] text-sm mb-0.5">Telephone</p>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="text-[#0f172a]/60 text-sm hover:text-[#c9a84c] transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#c9a84c]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f172a] text-sm mb-0.5">Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#0f172a]/60 text-sm hover:text-[#c9a84c] transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-[#c9a84c]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f172a] text-sm mb-0.5">Office Hours</p>
                      <p className="text-[#0f172a]/60 text-sm">{contact.officeHours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* SRA note */}
              <div className="bg-[#faf9f7] rounded-xl border border-[#0f172a]/8 p-5">
                <p className="text-[#0f172a]/50 text-xs leading-relaxed">
                  {config.firmName} is authorised and regulated by the{" "}
                  <strong>Solicitors Regulation Authority</strong> (SRA No.{" "}
                  {config.sra.number}). All enquiries are handled in accordance
                  with our{" "}
                  <a href="/privacy-policy" className="text-[#c9a84c] underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
