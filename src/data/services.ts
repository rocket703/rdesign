// Kernleistungen – genutzt auf der Startseite und auf /leistungen/
export type Service = {
  title: string;
  text: string;
  chips: string[];
  /** eigene Leistungsseite */
  href?: string;
  /** passendes Referenzprojekt (Slug unter /projekte/) */
  reference?: { title: string; slug: string };
};

export const services: Service[] = [
  {
    title: 'Webseiten & Landingpages',
    text: 'Individuelles Design, saubere Inhalte, SEO und schnelle Ladezeiten ohne austauschbare Schablone.',
    chips: ['Individuell', 'SEO', 'Barrierefrei'],
    href: '/leistungen/webdesign-magdeburg/',
    reference: { title: 'Radsportclub Magdeburg', slug: 'radsportclub-magdeburg' },
  },
  {
    title: 'Web-Apps & Dashboards',
    text: 'Login, Datenbank und Admin-Bereiche – Systeme, die mit deinem Arbeitsalltag mitwachsen.',
    chips: ['Login', 'Datenbank', 'Admin'],
    href: '/leistungen/webentwicklung/',
    reference: { title: 'Startplatzbörse', slug: 'startplatzboerse' },
  },
  {
    title: 'Native Apps',
    text: 'Eine belastbare Codebasis für iOS und Android – vom ersten Prototyp bis zum Store-Release.',
    chips: ['iOS', 'Android', 'App Stores'],
    reference: { title: 'Startplatzbörse (App)', slug: 'startplatzboerse' },
  },
  {
    title: 'Betreuung & Weiterentwicklung',
    text: 'Updates, Sicherheit und neue Funktionen – auch nach dem Launch bleibt der Kontakt direkt.',
    chips: ['Updates', 'Sicherheit', 'Support'],
  },
];
