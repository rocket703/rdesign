// Leistungen – genutzt auf der Startseite und auf /leistungen/.
// Im Vordergrund stehen Webseite, Relaunch und Betreuung („core“);
// Web-Apps, Apps und die Prüf-Pakete laufen als „Außerdem möglich“ mit.
export type Service = {
  title: string;
  text: string;
  chips: string[];
  /** Symbol im gezeichneten Kreis der Startseiten-Karte */
  icon: 'web' | 'refresh' | 'care';
  /** eigene Leistungsseite */
  href?: string;
  /** passendes Referenzprojekt (Slug unter /projekte/) */
  reference?: { title: string; slug: string };
};

export const services: Service[] = [
  {
    title: 'Neue Webseite',
    icon: 'web',
    text: 'Individuelles Design, saubere Inhalte, SEO und schnelle Ladezeiten ohne austauschbare Schablone.',
    chips: ['Individuell', 'SEO', 'Barrierefrei'],
    href: '/leistungen/webdesign-magdeburg/',
    reference: { title: 'Radsportclub Magdeburg', slug: 'radsportclub-magdeburg' },
  },
  {
    title: 'Relaunch',
    icon: 'refresh',
    text: 'Deine bestehende Seite modern, schnell und mobil – ohne dass Inhalte oder Google-Rankings verloren gehen.',
    chips: ['Redesign', 'Umzug', 'SEO'],
    href: '/leistungen/relaunch/',
  },
  {
    title: 'Hosting & Betreuung',
    icon: 'care',
    text: 'Hosting, Updates, Backups und kleine Änderungen – auch nach dem Launch bleibt der Kontakt direkt.',
    chips: ['Hosting', 'Backups', 'Wartung'],
    href: '/leistungen/hosting-betreuung/',
  },
];

/** „Außerdem möglich“: kurz und knapp, Details auf der jeweiligen Leistungsseite */
export const moreServices: { title: string; text: string; href: string }[] = [
  { title: 'SEO-Check', text: 'Technik, Inhalte und Ladezeiten geprüft.', href: '/leistungen/seo-check/' },
  { title: 'Barrierefreiheits-Check', text: 'Prüfung nach WCAG 2.1 mit klaren Prioritäten.', href: '/leistungen/barrierefreiheit/' },
  { title: 'Business-E-Mail & DNS', text: 'Postfächer auf deiner Domain, sauber eingerichtet.', href: '/leistungen/business-email/' },
  { title: 'Web-Apps & Dashboards', text: 'Login, Datenbank und Verwaltungsbereich.', href: '/leistungen/webentwicklung/' },
  { title: 'Native Apps', text: 'iOS und Android aus einer Codebasis.', href: '/leistungen/app-entwicklung/' },
];

// Strich-Icons für die Leistungskarten (24er Raster)
export const serviceIcons: Record<Service['icon'], string> = {
  web: '<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M3 8h18M8 21h8M12 17v4"/><circle cx="5.6" cy="6" r=".4"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3.5V8h4.5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 20.5V16h-4.5"/>',
  care: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.4-.4-2.3z"/>',
};
