import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import { generatePageMetadata, generateLawFirmSchema } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = generatePageMetadata({
  title: "Ashworth & Partners Solicitors | London Law Firm",
  description:
    "Expert legal services in Commercial Law, Private Client, Employment Law, and Dispute Resolution. SRA regulated solicitors in London.",
  path: "/",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [config, practiceAreas] = await Promise.all([
    cms.getSiteConfig(),
    cms.getPracticeAreas(),
  ]);

  const lawFirmSchema = generateLawFirmSchema(config);

  return (
    <html lang="en-GB" dir="ltr" className={`${montserrat.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lawFirmSchema) }}
        />
      </head>
      <body className="font-body bg-cream text-[#0f172a] antialiased flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header config={config} practiceAreas={practiceAreas} />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer config={config} practiceAreas={practiceAreas} />
        <CookieBanner text={config.cookieBannerText} />
      </body>
    </html>
  );
}
