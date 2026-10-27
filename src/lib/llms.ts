// Inhalte für /llms.txt (Kurzfassung) und /llms-full.txt (ausführlich) – beim Build aus den
// Seitendaten erzeugt, damit KI-Systeme immer den aktuellen Stand von Leistungen, Projekten und FAQ lesen.
import { faqItems } from '../data/faq';
import { offers, offerPath } from '../data/offers';
import { services, moreServices } from '../data/services';
import { getPublishedProjects, projectSlug } from './projects';
import { SITE, absoluteUrl } from './seo';

const url = (path: string) => absoluteUrl(path, SITE.url);
const PRICE_NOTE = 'Preise individuell als Festpreisangebot nach einem kostenlosen Erstgespräch (Preis auf Anfrage).';

const intro = [
  `# ${SITE.name} (${SITE.alternateName})`,
  '',
  `> Webdesign und Webentwicklung von Dustin Rose aus Magdeburg (Sachsen-Anhalt). Individuelle Webseiten für Vereine, Events und lokale Unternehmen – ohne Baukasten, schnell geladen, barrierearm und mit technischem SEO. Hosting ausschließlich auf eigenen Servern in Deutschland. Persönlicher Ansprechpartner, vor Ort in ${SITE.serviceArea.join(', ')} und remote deutschlandweit.`,
];

const contact = [
  '## Kontakt',
  '',
  `- [Projektanfrage](${url('/kontakt/')}): Kontaktformular, kostenloses Erstgespräch (ca. 15 Minuten, Telefon, Video oder vor Ort)`,
  `- E-Mail: ${SITE.email}`,
  `- Telefon und WhatsApp: ${SITE.phone}`,
  `- Adresse: ${SITE.streetAddress}, ${SITE.postalCode} ${SITE.city}, Deutschland`,
  `- [Über mich](${url('/ueber-mich/')}): Dustin Rose, Werdegang und Arbeitsweise`,
  `- [LinkedIn](${SITE.profiles.linkedin})`,
  `- [GitHub](${SITE.profiles.github})`,
];

export async function llmsShort(): Promise<string> {
  const projects = await getPublishedProjects();
  return [
    ...intro,
    '',
    `Ausführliche Fassung mit allen Leistungen, Abläufen und FAQ: ${url('/llms-full.txt')}`,
    '',
    ...contact,
    '',
    '## Leistungen',
    '',
    `- [Leistungsübersicht](${url('/leistungen/')})`,
    ...services.map((s) => `- [${s.title}](${url(s.href ?? '/leistungen/')}): ${s.text}`),
    ...moreServices.map((s) => `- [${s.title}](${url(s.href)}): ${s.text}`),
    '',
    '## Referenzprojekte',
    '',
    ...projects.map((p) => `- [${p.data.title}](${url(`/projekte/${projectSlug(p)}/`)}): ${p.data.subtitle}`),
    `- [Alle Projekte](${url('/projekte/')})`,
    '',
    '## Häufige Fragen',
    '',
    `- [FAQ](${url('/#faq')}): ${faqItems.map((f) => f.question).join(' · ')}`,
    '',
  ].join('\n');
}

export async function llmsFull(): Promise<string> {
  const projects = await getPublishedProjects();
  const out: string[] = [...intro, '', ...contact, '', `Preise: ${PRICE_NOTE}`, ''];

  out.push('## Leistungen im Detail', '');
  for (const offer of offers) {
    out.push(`### ${offer.title}`, '', `Seite: ${url(offerPath(offer))}`, '', offer.lead, '');
    for (const p of offer.intro) out.push(p, '');
    for (const section of offer.sections ?? []) {
      out.push(`#### ${section.heading}`, '', ...section.paragraphs.flatMap((p) => [p, '']));
    }
    for (const group of offer.plans ?? []) {
      out.push(`#### ${group.heading}`, '', group.intro, '');
      for (const plan of group.plans) {
        out.push(`- **${plan.name}** – ${plan.tagline}`, ...plan.features.map((f) => `  - ${f}`));
      }
      out.push('');
    }
    out.push(`#### ${offer.headings.deliverables}`, '', ...offer.deliverables.map((d) => `- ${d}`), '');
    out.push(`#### ${offer.headings.audience}`, '', ...offer.audience.map((a) => `- ${a}`), '');
    out.push('#### Eckdaten', '', ...offer.facts.map((f) => `- ${f.label}: ${f.value}`), `- Preis: ${offer.price ?? 'Festpreis auf Anfrage'}`, '');
    out.push(`#### ${offer.headings.faq}`, '', ...offer.faq.flatMap((f) => [`**${f.question}**`, f.answer, '']));
  }

  out.push('## Ablauf eines Projekts', '');
  out.push(
    '1. Kennenlernen & Konzept: Im kostenlosen Erstgespräch klären wir Ziele, Zielgruppe und Inhalte. Danach gibt es ein klares Konzept und ein transparentes Festpreisangebot.',
    '2. Design & Umsetzung: regelmäßige, sichtbare Zwischenstände; direkter Kontakt mit der Person, die die Seite baut – ohne Ticketsystem.',
    '3. Launch & Betreuung: Qualitätsprüfung, Livegang, danach Betreuung für Updates und neue Funktionen.',
    '',
  );

  out.push('## Referenzprojekte', '');
  for (const p of projects) {
    out.push(`### ${p.data.title}`, '', `Projektseite: ${url(`/projekte/${projectSlug(p)}/`)}`);
    if (p.data.customerUrl && p.data.customerUrl !== '#') out.push(`Live: ${p.data.customerUrl}`);
    out.push('', p.data.subtitle, '');
    if (p.data.tasks?.length) out.push(...p.data.tasks.map((t) => `- ${t}`), '');
  }

  out.push('## Häufige Fragen', '', ...faqItems.flatMap((f) => [`**${f.question}**`, f.answer, '']));
  return out.join('\n');
}
