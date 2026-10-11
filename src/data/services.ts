// Kernleistungen – genutzt auf der Startseite und auf /leistungen/
export type Service = {
  title: string;
  text: string;
  chips: string[];
  /** Symbol im grünen Kreis der Startseiten-Karte */
  icon: 'web' | 'dashboard' | 'mobile' | 'care';
  /** eigene Leistungsseite */
  href?: string;
  /** passendes Referenzprojekt (Slug unter /projekte/) */
  reference?: { title: string; slug: string };
};

export const services: Service[] = [
  {
    title: 'Webseiten & Landingpages',
    icon: 'web',
    text: 'Individuelles Design, saubere Inhalte, SEO und schnelle Ladezeiten ohne austauschbare Schablone.',
    chips: ['Individuell', 'SEO', 'Barrierefrei'],
    href: '/leistungen/webdesign-magdeburg/',
    reference: { title: 'Radsportclub Magdeburg', slug: 'radsportclub-magdeburg' },
  },
  {
    title: 'Web-Apps & Dashboards',
    icon: 'dashboard',
    text: 'Login, Datenbank und Admin-Bereiche – Systeme, die mit deinem Arbeitsalltag mitwachsen.',
    chips: ['Login', 'Datenbank', 'Admin'],
    href: '/leistungen/webentwicklung/',
    reference: { title: 'Startplatzbörse', slug: 'startplatzboerse' },
  },
  {
    title: 'Native Apps',
    icon: 'mobile',
    text: 'Eine Codebasis für iOS und Android mit React Native und Expo – vom ersten Prototyp bis zum Store-Release.',
    chips: ['iOS', 'Android', 'App Stores'],
    href: '/leistungen/app-entwicklung/',
    reference: { title: 'Startplatzbörse (App)', slug: 'startplatzboerse' },
  },
  {
    title: 'Hosting & Betreuung',
    icon: 'care',
    text: 'Globales Cloud-Hosting oder deutscher Server, Updates, Backups und kleine Änderungen – auch nach dem Launch bleibt der Kontakt direkt.',
    chips: ['Hosting', 'Backups', 'Wartung'],
    href: '/leistungen/hosting-betreuung/',
  },
];

// Strich-Icons für die Leistungskarten (24er Raster)
export const serviceIcons: Record<Service['icon'], string> = {
  web: '<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M3 8h18M8 21h8M12 17v4"/><circle cx="5.6" cy="6" r=".4"/>',
  dashboard: '<rect x="3" y="3" width="7.5" height="9" rx="1"/><rect x="13.5" y="3" width="7.5" height="5" rx="1"/><rect x="13.5" y="11" width="7.5" height="10" rx="1"/><rect x="3" y="15" width="7.5" height="6" rx="1"/>',
  mobile: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.2"/><path d="M10.5 18.5h3"/>',
  care: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.4-.4-2.3z"/>',
};
