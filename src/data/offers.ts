import type { FaqItem } from './faq';

export type OfferIcon = 'search' | 'refresh' | 'access';

export type Offer = {
  slug: string;
  title: string;
  icon: OfferIcon;
  /** Kurztext für die Karte auf der Startseite */
  teaser: string;
  seoTitle: string;
  seoDesc: string;
  lead: string;
  intro: string[];
  deliverables: string[];
  audience: string[];
  facts: { label: string; value: string }[];
  /** Ab Januar 2027 eintragen, z. B. 'ab 290 €' – bis dahin „Festpreis auf Anfrage“ */
  price?: string;
  reference?: { title: string; text: string; href: string };
  faq: FaqItem[];
};

export const offers: Offer[] = [
  {
    slug: 'seo-check',
    title: 'SEO-Check',
    icon: 'search',
    teaser: 'Technik, Inhalte und Ladezeiten deiner Webseite – geprüft und mit klaren Prioritäten.',
    seoTitle: 'SEO-Check für deine Webseite – Magdeburg | r³webdesign',
    seoDesc:
      'SEO-Audit aus Magdeburg: Technik, Inhalte, Ladezeiten und lokale Sichtbarkeit deiner Webseite geprüft – mit priorisiertem Bericht und Besprechung.',
    lead: 'Warum wird deine Webseite nicht gefunden? Ich prüfe Technik, Inhalte und Performance – und du bekommst eine klare Liste, was sich wirklich lohnt.',
    intro: [
      'Viele Webseiten verschenken Sichtbarkeit durch Kleinigkeiten: fehlende Seitentitel, zu große Bilder, eine unklare Struktur. Der SEO-Check zeigt dir genau, wo deine Seite steht und welche Schritte den größten Effekt haben – verständlich erklärt, ohne Fachchinesisch.',
    ],
    deliverables: [
      'Technische Prüfung: Indexierung, Sitemap, Weiterleitungen und Duplikate',
      'Performance und Core Web Vitals auf Desktop und Smartphone',
      'On-Page-Analyse: Seitentitel, Beschreibungen, Überschriften und Inhalte',
      'Strukturierte Daten (Schema.org) und lokale Sichtbarkeit',
      'Priorisierter Bericht: was zuerst, was später – und was du dir sparen kannst',
      'Besprechung der Ergebnisse per Video (ca. 30 Minuten)',
    ],
    audience: [
      'Unternehmen und Vereine, deren Webseite kaum Anfragen bringt',
      'Alle, die vor einem Relaunch wissen wollen, was erhalten bleiben muss',
      'Selbstständige, die ihre Seite selbst pflegen und gezielt verbessern wollen',
    ],
    facts: [
      { label: 'Dauer', value: 'ca. 1 Woche' },
      { label: 'Ergebnis', value: 'Bericht + Besprechung' },
      { label: 'Umsetzung', value: 'auf Wunsch direkt durch mich' },
    ],
    faq: [
      {
        question: 'Kann ich den SEO-Check auch einzeln buchen?',
        answer:
          'Ja. Der SEO-Check ist ein eigenständiges Paket – du brauchst dafür keine neue Webseite von mir und gehst keine weitere Verpflichtung ein.',
      },
      {
        question: 'Brauchst du Zugang zu meiner Webseite?',
        answer:
          'Für den Großteil der Prüfung nicht – sie läuft von außen. Hast du Zugriff auf die Google Search Console, kann ich zusätzlich echte Suchdaten auswerten.',
      },
      {
        question: 'Setzt du die Maßnahmen auch um?',
        answer:
          'Gern. Du kannst die Liste aber auch selbst oder mit deiner bisherigen Agentur abarbeiten – der Bericht ist so geschrieben, dass das funktioniert.',
      },
    ],
  },
  {
    slug: 'relaunch',
    title: 'Webseiten-Relaunch',
    icon: 'refresh',
    teaser: 'Deine bestehende Seite modern, schnell und mobil – ohne Inhalte oder Rankings zu verlieren.',
    seoTitle: 'Webseiten-Relaunch & Redesign – Magdeburg | r³webdesign',
    seoDesc:
      'Redesign und Relaunch deiner Webseite aus Magdeburg: modernes Design, schnelle Ladezeiten und ein sauberer Umzug ohne Ranking-Verlust.',
    lead: 'Deine Webseite ist in die Jahre gekommen? Ich bringe sie auf den aktuellen Stand – modern, schnell und mobil, ohne dass Inhalte oder Google-Rankings verloren gehen.',
    intro: [
      'Ältere Baukasten- oder WordPress-Seiten sind oft langsam, schwer zu pflegen und auf dem Smartphone unpraktisch. Beim Relaunch übernehmen wir, was funktioniert, und bauen den Rest neu – mit einem sauberen Umzug, damit Besucher und Google alle Seiten wiederfinden.',
    ],
    deliverables: [
      'Bestandsaufnahme: Inhalte, Seitenstruktur und bestehende Rankings',
      'Neues, individuelles Design – passend zu deiner Marke',
      'Umzug der Inhalte und saubere Weiterleitungen aller alten Adressen',
      'Schnelle Ladezeiten und optimiert für Smartphones',
      'Technisches SEO und strukturierte Daten von Anfang an',
      'Begleitung beim Launch und Kontrolle nach dem Umzug',
    ],
    audience: [
      'Veraltete WordPress-, Jimdo-, Wix- oder Google-Sites-Seiten',
      'Webseiten, die auf dem Smartphone schlecht funktionieren',
      'Vereine und Betriebe, die ihre Seite endlich einfach pflegen wollen',
    ],
    facts: [
      { label: 'Dauer', value: 'meist 3–6 Wochen' },
      { label: 'Ergebnis', value: 'neue Webseite inkl. Umzug' },
      { label: 'Inhalte', value: 'werden übernommen und bei Bedarf überarbeitet' },
    ],
    reference: {
      title: 'Wolmirstedter Ohrelauf',
      text: 'Umzug von Google Sites auf eine schnelle, moderne Webseite mit Online-Anmeldung.',
      href: '/projekte/ohrelauf/',
    },
    faq: [
      {
        question: 'Kann ich den Relaunch auch ohne die Checks buchen?',
        answer:
          'Ja. Eine Bestandsaufnahme ist im Relaunch ohnehin enthalten. Ein ausführlicher SEO- oder Barrierefreiheits-Check vorab ist optional – sinnvoll, wenn du genau wissen willst, wo deine aktuelle Seite steht.',
      },
      {
        question: 'Verliere ich beim Relaunch meine Google-Rankings?',
        answer:
          'Nicht, wenn der Umzug sauber geplant ist. Alle alten Adressen werden auf die passenden neuen Seiten weitergeleitet, und wichtige Inhalte bleiben erhalten.',
      },
      {
        question: 'Muss ich alle Texte neu schreiben?',
        answer:
          'Nein. Texte und Bilder werden übernommen und bei Bedarf überarbeitet – du fängst nicht bei null an.',
      },
    ],
  },
  {
    slug: 'barrierefreiheit',
    title: 'Barrierefreiheits-Check',
    icon: 'access',
    teaser: 'Prüfung nach WCAG 2.1 – damit deine Seite für alle nutzbar ist und du weißt, wo du stehst.',
    seoTitle: 'Barrierefreiheits-Check (BFSG & WCAG) – Magdeburg | r³webdesign',
    seoDesc:
      'Barrierefreiheits-Check für deine Webseite aus Magdeburg: Prüfung nach WCAG 2.1 AA mit verständlichem Bericht und konkreten Maßnahmen – auch mit Blick auf das BFSG.',
    lead: 'Kann wirklich jeder deine Webseite nutzen – auch mit Screenreader, Tastatur oder Sehschwäche? Der Check zeigt dir, wo Barrieren sind und wie du sie beseitigst.',
    intro: [
      'Barrierefreiheit hilft nicht nur Menschen mit Einschränkungen: Klare Kontraste, gut lesbare Texte und eine logische Struktur machen eine Seite für alle besser – und für Suchmaschinen verständlicher.',
      'Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz (BFSG) für viele digitale Angebote an Verbraucher, etwa Online-Shops oder Buchungen. Ob es dich betrifft, hängt unter anderem von deinem Angebot und deiner Unternehmensgröße ab. Der Check zeigt, wo deine Seite technisch steht – eine Rechtsberatung ersetzt er nicht.',
    ],
    deliverables: [
      'Prüfung der wichtigsten Seiten nach WCAG 2.1, Stufe AA',
      'Bedienbarkeit per Tastatur und mit Screenreader',
      'Kontraste, Schriftgrößen und Lesbarkeit',
      'Formulare, Bilder, Alternativtexte und Überschriften-Struktur',
      'Bericht mit Fundstellen, Schweregrad und Lösungsvorschlägen',
      'Besprechung der Ergebnisse per Video (ca. 30 Minuten)',
    ],
    audience: [
      'Online-Shops und Betriebe mit Buchungs- oder Kontaktformularen',
      'Vereine und Einrichtungen mit einem breiten Publikum',
      'Alle, die ihre Webseite für mehr Menschen zugänglich machen wollen',
    ],
    facts: [
      { label: 'Dauer', value: 'ca. 1–2 Wochen' },
      { label: 'Ergebnis', value: 'Bericht + Besprechung' },
      { label: 'Standard', value: 'WCAG 2.1, Stufe AA' },
    ],
    faq: [
      {
        question: 'Kann ich den Barrierefreiheits-Check auch einzeln buchen?',
        answer:
          'Ja. Der Check ist ein eigenständiges Paket. Auf Wunsch setze ich die gefundenen Punkte danach um – du kannst den Bericht aber genauso an deine bisherige Agentur weitergeben.',
      },
      {
        question: 'Bin ich vom BFSG betroffen?',
        answer:
          'Das hängt von deinem Angebot und deiner Unternehmensgröße ab – Kleinstunternehmen, die Dienstleistungen erbringen, sind zum Beispiel unter bestimmten Voraussetzungen ausgenommen. Für eine verbindliche Einschätzung wende dich an eine Rechtsberatung; den technischen Teil übernehme ich.',
      },
      {
        question: 'Reicht nicht ein automatisches Prüf-Tool?',
        answer:
          'Tools finden nur einen Teil der Probleme. Ob sich eine Seite mit Tastatur oder Screenreader wirklich bedienen lässt, zeigt erst eine manuelle Prüfung – und genau die ist Teil des Checks.',
      },
    ],
  },
];

export function offerPath(offer: Offer): string {
  return `/leistungen/${offer.slug}/`;
}
