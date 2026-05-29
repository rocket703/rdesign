import type { FaqItem } from '../data/faq';

export const SITE = {
  name: 'r³webdesign',
  legalName: 'Dustin Rose',
  url: 'https://r3webdesign.de',
  locale: 'de_DE',
  language: 'de-DE',
  email: 'dustin.rose@gmx.de',
  city: 'Magdeburg',
  region: 'Sachsen-Anhalt',
  country: 'DE',
  defaultOgImage: '/icon-512.png',
  defaultTitle: 'Webdesign Magdeburg | Homepage & Webentwicklung – r³webdesign',
  defaultDescription:
    'Webdesign und Webentwicklung in Magdeburg: schnelle Homepages, moderne Web-Apps und SEO-starke Umsetzung mit Astro, TypeScript und klarer UX.',
} as const;

export function absoluteUrl(path: string, site: URL | string = SITE.url): string {
  return new URL(path, site).href;
}

export function canonicalUrl(pathname: string, site: URL | string = SITE.url): string {
  return new URL(pathname, site).href;
}

export function schemaGraph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

export function webSiteSchema(site: URL | string = SITE.url) {
  return {
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/', site)}#website`,
    name: SITE.name,
    url: absoluteUrl('/', site),
    inLanguage: SITE.language,
    description: SITE.defaultDescription,
    publisher: { '@id': `${absoluteUrl('/', site)}#person` },
  };
}

export function personSchema(site: URL | string = SITE.url) {
  return {
    '@type': 'Person',
    '@id': `${absoluteUrl('/', site)}#person`,
    name: SITE.legalName,
    url: absoluteUrl('/', site),
    email: SITE.email,
    jobTitle: 'Webentwickler & UI/UX Designer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: {
      '@type': 'City',
      name: SITE.city,
    },
    knowsAbout: [
      'Webdesign',
      'Webentwicklung',
      'Homepage Erstellung',
      'UI/UX Design',
      'SEO',
      'Astro',
      'TypeScript',
    ],
  };
}

export function professionalServiceSchema(site: URL | string = SITE.url) {
  return {
    '@type': 'ProfessionalService',
    '@id': `${absoluteUrl('/', site)}#service`,
    name: `${SITE.name} – Webdesign Magdeburg`,
    url: absoluteUrl('/', site),
    email: SITE.email,
    areaServed: SITE.city,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    provider: { '@id': `${absoluteUrl('/', site)}#person` },
    serviceType: ['Webdesign', 'Webentwicklung', 'Homepage Erstellung', 'SEO'],
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  pathname,
  site = SITE.url,
}: {
  name: string;
  description: string;
  pathname: string;
  site?: URL | string;
}) {
  const url = canonicalUrl(pathname, site);
  return {
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: SITE.language,
    isPartOf: { '@id': `${absoluteUrl('/', site)}#website` },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
  site: URL | string = SITE.url,
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  };
}

export function creativeWorkSchema({
  title,
  description,
  image,
  pathname,
  site = SITE.url,
}: {
  title: string;
  description: string;
  image: string;
  pathname: string;
  site?: URL | string;
}) {
  return {
    '@type': 'CreativeWork',
    name: title,
    description,
    url: canonicalUrl(pathname, site),
    image: absoluteUrl(image, site),
    creator: { '@id': `${absoluteUrl('/', site)}#person` },
    inLanguage: SITE.language,
  };
}

export function homePageSchema(items: FaqItem[], site: URL | string = SITE.url) {
  return schemaGraph([
    webSiteSchema(site),
    personSchema(site),
    professionalServiceSchema(site),
    webPageSchema({
      name: SITE.defaultTitle,
      description: SITE.defaultDescription,
      pathname: '/',
      site,
    }),
    faqPageSchema(items),
  ]);
}
