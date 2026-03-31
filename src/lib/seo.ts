const SITE_URL = "https://flixsessuites.com";
const SITE_NAME = "Flixes Suites";

export const defaultImage = "/images/Flixesuite-160.jpg";

export const baseJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_NAME,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Rooftop pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness center", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    ],
  },
];

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
