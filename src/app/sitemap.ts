import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [practiceAreas, solicitors] = await Promise.all([
    cms.getPracticeAreas(),
    cms.getSolicitors(),
  ]);

  const practiceAreaUrls: MetadataRoute.Sitemap = practiceAreas.map((a) => ({
    url: `${BASE_URL}/practice-areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solicitorUrls: MetadataRoute.Sitemap = solicitors.map((s) => ({
    url: `${BASE_URL}/our-team/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/practice-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/our-team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fee-guidance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...practiceAreaUrls,
    ...solicitorUrls,
  ];
}
