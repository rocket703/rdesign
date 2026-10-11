import type { FaqItem } from '../data/faq';

export type ProjectListItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export const SITE = {
  name: 'r³webdesign',
  alternateName: 'r3webdesign',
  legalName: 'Dustin Rose',
  url: 'https://r3webdesign.de',
  locale: 'de_DE',
  language: 'de-DE',
  email: 'info@r3webdesign.de',
  city: 'Magdeburg',
  region: 'Sachsen-Anhalt',
  country: 'DE',
  streetAddress: 'Lindenplan 26',
  postalCode: '39120',
  geo: { latitude: 52.0924474, longitude: 11.6247054 },
  // Einzugsgebiet für Vor-Ort-Termine; remote deutschlandweit
  serviceArea: ['Magdeburg', 'Halle (Saale)', 'Burg', 'Schönebeck (Elbe)', 'Wolmirstedt', 'Barleben'],
  defaultOgImage: '/og-default.webp',
  logo: '/icon-512.png',
  portrait: '/images/IMG_1907.webp',
  defaultTitle: 'Webdesign Magdeburg & Webentwicklung | r³webdesign',
  defaultDescription:
    'Webdesign und Webentwicklung in Magdeburg: schnelle Homepages, moderne Web-Apps und SEO-starke Umsetzung mit Astro, TypeScript und klarer UX.',
  profiles: {
    github: 'https://github.com/rocket703',
    linkedin: 'https://www.linkedin.com/in/dustin-rose-dev',
  },
  certificate: {
    name: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/fcc-c08648df-44dc-4a8d-ab29-92c81906e3e4/responsive-web-design',
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
    alternateName: SITE.alternateName,
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
    image: absoluteUrl(SITE.portrait, site),
    email: SITE.email,
    jobTitle: 'Webentwickler & Webdesigner',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: SITE.certificate.name,
      url: SITE.certificate.url,
      credentialCategory: 'Zertifikat',
      recognizedBy: { '@type': 'Organization', name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
    },
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
      'React Native',
      'Linux-Serverbetrieb',
      'Docker',
      'Monitoring',
    ],
    sameAs: [SITE.profiles.linkedin, SITE.profiles.github],
  };
}

export function professionalServiceSchema(site: URL | string = SITE.url) {
  return {
    '@type': 'ProfessionalService',
    '@id': `${absoluteUrl('/', site)}#service`,
    name: `${SITE.name} – Webdesign Magdeburg`,
    alternateName: [SITE.name, SITE.alternateName],
    url: absoluteUrl('/', site),
    logo: absoluteUrl(SITE.logo, site),
    image: absoluteUrl(SITE.defaultOgImage, site),
    email: SITE.email,
    areaServed: [
      ...SITE.serviceArea.map((name) => ({ '@type': 'City', name })),
      { '@type': 'AdministrativeArea', name: SITE.region },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    founder: { '@id': `${absoluteUrl('/', site)}#person` },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.email,
      url: absoluteUrl('/kontakt/', site),
      availableLanguage: ['de'],
      areaServed: 'DE',
    },
    sameAs: [SITE.profiles.linkedin],
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

export function faqQuestions(items: FaqItem[]) {
  return items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  }));
}

export const PORTFOLIO = {
  title: 'Referenzprojekte – Webdesign Magdeburg | r³webdesign',
  description:
    'Ausgewählte Webdesign- und Webentwicklungsprojekte von r³webdesign: Homepages, Web-Apps und native Apps aus Magdeburg und Umgebung.',
  pathname: '/projekte/',
} as const;

export function projectListSchema(projects: ProjectListItem[], site: URL | string = SITE.url) {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/projekte/', site)}#list`,
    name: 'Referenzprojekte von r³webdesign',
    description: 'Ausgewählte Webdesign- und Webentwicklungsprojekte aus Magdeburg und Umgebung.',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projekte/${project.slug}/`, site),
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: absoluteUrl(`/projekte/${project.slug}/`, site),
        image: absoluteUrl(project.image, site),
        creator: { '@id': `${absoluteUrl('/', site)}#person` },
      },
    })),
  };
}

export function contactPageSchema({
  name,
  description,
  site = SITE.url,
}: {
  name: string;
  description: string;
  site?: URL | string;
}) {
  return webPageSchema({
    type: 'ContactPage',
    name,
    description,
    pathname: '/kontakt/',
    site,
    about: { '@id': `${absoluteUrl('/', site)}#person` },
    mainEntity: { '@id': `${absoluteUrl('/', site)}#service` },
  });
}

export function webPageSchema({
  type = 'WebPage',
  name,
  description,
  pathname,
  site = SITE.url,
  ...extra
}: {
  type?: string | string[];
  name: string;
  description: string;
  pathname: string;
  site?: URL | string;
  [key: string]: unknown;
}) {
  const url = canonicalUrl(pathname, site);
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: SITE.language,
    isPartOf: { '@id': `${absoluteUrl('/', site)}#website` },
    ...extra,
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
  status,
  site = SITE.url,
}: {
  title: string;
  description: string;
  image: string;
  pathname: string;
  liveUrl?: string;
  keywords?: string[];
  status?: string;
  site?: URL | string;
}) {
  return {
    '@type': 'CreativeWork',
    ...(status ? { creativeWorkStatus: status } : {}),
    '@id': `${canonicalUrl(pathname, site)}#project`,
    name: title,
    description,
    url: canonicalUrl(pathname, site),
    image: absoluteUrl(image, site),
    creator: { '@id': `${absoluteUrl('/', site)}#person` },
    inLanguage: SITE.language,
    ...(liveUrl && liveUrl !== '#'
      ? { about: { '@type': 'WebSite', name: title, url: liveUrl } }
      : {}),
    ...(keywords.length ? { keywords: keywords.join(', ') } : {}),
  };
}

export function offerServiceSchema({
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
  return {
    '@type': 'Service',
    '@id': `${canonicalUrl(pathname, site)}#offer`,
    name,
    description,
    serviceType: name,
    url: canonicalUrl(pathname, site),
    provider: { '@id': `${absoluteUrl('/', site)}#service` },
    areaServed: [
      { '@type': 'City', name: SITE.city },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    inLanguage: SITE.language,
  };
}

export function homePageSchema(items: FaqItem[], site: URL | string = SITE.url) {
  return schemaGraph([
    webSiteSchema(site),
    personSchema(site),
    professionalServiceSchema(site),
    webPageSchema({
      type: ['WebPage', 'FAQPage'],
      name: SITE.defaultTitle,
      description: SITE.defaultDescription,
      pathname: '/',
      site,
      about: { '@id': `${absoluteUrl('/', site)}#service` },
      mainEntity: faqQuestions(items),
    }),
  ]);
}

export function portfolioPageSchema(projects: ProjectListItem[], site: URL | string = SITE.url) {
  return schemaGraph([
    webPageSchema({
      name: PORTFOLIO.title,
      description: PORTFOLIO.description,
      pathname: PORTFOLIO.pathname,
      site,
    }),
    breadcrumbSchema(
      [
        { name: 'Start', path: '/' },
        { name: 'Projekte', path: '/projekte/' },
      ],
      site,
    ),
    projectListSchema(projects, site),
    personSchema(site),
  ]);
}
