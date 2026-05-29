import type { FaqItem } from '../data/faq';

export type ProjectListItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

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
  streetAddress: 'Lindenplan 26',
  postalCode: '39120',
  defaultOgImage: '/og-default.webp',
  defaultTitle: 'Webdesign Magdeburg | Homepage & Webentwicklung – r³webdesign',
  defaultDescription:
    'Webdesign und Webentwicklung in Magdeburg: schnelle Homepages, moderne Web-Apps und SEO-starke Umsetzung mit Astro, TypeScript und klarer UX.',
  profiles: {
    github: 'https://github.com/rocket703',
  },
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
    worksFor: { '@id': `${absoluteUrl('/', site)}#service` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress,
      postalCode: SITE.postalCode,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: {
      '@type': 'City',
      name: SITE.city,
    },
    knowsAbout: [
      'Webdesign Magdeburg',
      'Webentwicklung',
      'Homepage Erstellung',
      'UI/UX Design',
      'Technisches SEO',
      'Astro',
      'TypeScript',
      'Supabase',
    ],
    sameAs: [SITE.profiles.github],
  };
}

export function professionalServiceSchema(site: URL | string = SITE.url) {
  return {
    '@type': 'ProfessionalService',
    '@id': `${absoluteUrl('/', site)}#service`,
    name: `${SITE.name} – Webdesign Magdeburg`,
    url: absoluteUrl('/', site),
    email: SITE.email,
    areaServed: [
      { '@type': 'City', name: SITE.city },
      { '@type': 'AdministrativeArea', name: SITE.region },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress,
      postalCode: SITE.postalCode,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    provider: { '@id': `${absoluteUrl('/', site)}#person` },
    serviceType: [
      'Webdesign',
      'Webentwicklung',
      'Homepage Erstellung',
      'Landingpage',
      'Web-App Entwicklung',
      'Technisches SEO',
    ],
  };
}

export function faqPageSchema(items: FaqItem[], site: URL | string = SITE.url) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl('/', site)}#faq`,
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

export function projectListSchema(projects: ProjectListItem[], site: URL | string = SITE.url) {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/', site)}#projekte`,
    name: 'Referenzprojekte von r³webdesign',
    description: 'Ausgewählte Webdesign- und Webentwicklungsprojekte aus Magdeburg und Umgebung.',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projekte/${project.slug}`, site),
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: absoluteUrl(`/projekte/${project.slug}`, site),
        image: absoluteUrl(project.image, site),
        creator: { '@id': `${absoluteUrl('/', site)}#person` },
      },
    })),
  };
}

export function contactPageSchema(site: URL | string = SITE.url) {
  return {
    '@type': 'ContactPage',
    '@id': `${absoluteUrl('/kontakt/', site)}#contact`,
    name: 'Kontakt – Webdesign Magdeburg | r³webdesign',
    url: absoluteUrl('/kontakt/', site),
    description:
      'Projektanfrage für Webdesign, Homepage oder Web-App in Magdeburg. Direkter Kontakt zu Dustin Rose (r³webdesign).',
    inLanguage: SITE.language,
    isPartOf: { '@id': `${absoluteUrl('/', site)}#website` },
    about: { '@id': `${absoluteUrl('/', site)}#person` },
    mainEntity: { '@id': `${absoluteUrl('/', site)}#service` },
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
    '@id': `${url}#webpage`,
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
  liveUrl,
  keywords = [],
  site = SITE.url,
}: {
  title: string;
  description: string;
  image: string;
  pathname: string;
  liveUrl?: string;
  keywords?: string[];
  site?: URL | string;
}) {
  return {
    '@type': 'CreativeWork',
    '@id': `${canonicalUrl(pathname, site)}#project`,
    name: title,
    description,
    url: canonicalUrl(pathname, site),
    image: absoluteUrl(image, site),
    creator: { '@id': `${absoluteUrl('/', site)}#person` },
    inLanguage: SITE.language,
    ...(liveUrl && liveUrl !== '#'
      ? { sameAs: liveUrl }
      : {}),
    ...(keywords.length ? { keywords: keywords.join(', ') } : {}),
  };
}

export function homePageSchema(
  items: FaqItem[],
  projects: ProjectListItem[],
  site: URL | string = SITE.url,
) {
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
    faqPageSchema(items, site),
    projectListSchema(projects, site),
  ]);
}
