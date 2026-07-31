import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | Ashworth & Partners Solicitors",
  description:
    "Privacy policy for Ashworth & Partners Solicitors. How we collect, use, and protect your personal data in accordance with UK GDPR.",
  path: "/privacy-policy",
});

export default async function PrivacyPolicyPage() {
  const config = await cms.getSiteConfig();

  return (
    <section className="section-py bg-[#faf9f7]" aria-labelledby="privacy-heading">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h1
            id="privacy-heading"
            className="font-display font-semibold text-[#0f172a] leading-tight mb-2"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[#0f172a]/50 text-sm mb-10">
            Last updated: 1 October 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Who We Are</h2>
            <p>
              {config.firmName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              &ldquo;us&rdquo;) is a law firm authorised and regulated by the
              Solicitors Regulation Authority (SRA No. {config.sra.number}).
              Our registered office is at {config.contact.address.line1},{" "}
              {config.contact.address.city}, {config.contact.address.postcode}.
            </p>
            <p>
              We are committed to protecting your personal information and to
              being transparent about how we use it. This Privacy Policy
              explains what personal data we collect, how we use it, and your
              rights under the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>

            <h2>2. What Personal Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li>
                <strong>Contact information:</strong> name, email address,
                telephone number, postal address.
              </li>
              <li>
                <strong>Matter information:</strong> details of your legal
                matter as provided by you in the course of seeking or receiving
                legal advice.
              </li>
              <li>
                <strong>Website usage data:</strong> We do not use tracking or
                analytics cookies on this website. Our web server may log
                standard access logs (IP address, browser type, pages visited)
                for security purposes only.
              </li>
            </ul>

            <h2>3. How We Use Your Personal Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Respond to enquiries and provide legal advice and services.</li>
              <li>
                Comply with our legal and regulatory obligations, including SRA
                anti-money laundering requirements.
              </li>
              <li>Maintain our client records and accounts.</li>
              <li>Send you information relevant to your matter.</li>
            </ul>
            <p>
              We rely on the following lawful bases under UK GDPR: performance
              of a contract; compliance with a legal obligation; our legitimate
              interests in operating our legal practice; and, where required,
              your explicit consent.
            </p>

            <h2>4. How We Share Your Data</h2>
            <p>
              We will not sell, rent, or otherwise disclose your personal data
              to third parties except:
            </p>
            <ul>
              <li>
                Where necessary to carry out your legal matter (e.g., to
                counsel, expert witnesses, the court, or other parties to a
                transaction).
              </li>
              <li>
                Where required by law, regulation, or court order.
              </li>
              <li>
                To our professional indemnity insurers and the SRA in the event
                of a regulatory matter.
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain client files for a minimum of six years from the
              conclusion of the matter, in accordance with our professional
              obligations and limitation periods under the Limitation Act 1980.
              Where there is no ongoing client relationship, enquiry data is
              deleted after 12 months.
            </p>

            <h2>6. Cookies</h2>
            <p>
              This website uses only essential cookies required for the site to
              function correctly. We do not use advertising, analytics, or
              social media tracking cookies. The only cookie we set is a
              session cookie to record your cookie consent preference.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to: access your personal data;
              correct inaccurate data; request erasure in certain circumstances;
              object to processing; and portability of your data. To exercise
              any of these rights, please contact us at{" "}
              <a href={`mailto:${config.contact.email}`}>
                {config.contact.email}
              </a>
              .
            </p>
            <p>
              You also have the right to lodge a complaint with the Information
              Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <address className="not-italic">
              <strong>{config.firmName}</strong>
              <br />
              {config.contact.address.line1}
              {config.contact.address.line2 && (
                <>, {config.contact.address.line2}</>
              )}
              <br />
              {config.contact.address.city}, {config.contact.address.postcode}
              <br />
              <a href={`mailto:${config.contact.email}`}>
                {config.contact.email}
              </a>
              <br />
              <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`}>
                {config.contact.phone}
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
