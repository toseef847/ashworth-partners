import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashworthpartners.co.uk"}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-[#0f172a]/50">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i < items.length - 1 ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-[#c9a84c] transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight size={13} aria-hidden="true" className="text-[#0f172a]/30" />
                </>
              ) : (
                <span aria-current="page" className="text-[#0f172a]/70 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
