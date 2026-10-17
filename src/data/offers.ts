import type { FaqItem } from './faq';

export type OfferIcon = 'search' | 'refresh' | 'access' | 'layout' | 'code' | 'server' | 'mobile' | 'mail';

export type Offer = {
  /** „service“ = Kernleistung (neue Projekte), „package“ = festes Paket für bestehende Seiten */
  kind: 'service' | 'package';
  slug: string;
  title: string;
  icon: OfferIcon;
  /** Kurztext für die Karte auf der Startseite */
  teaser: string;
  seoTitle: string;
  seoDesc: string;
  lead: string;
  intro: string[];
  /** zusätzliche Textabschnitte nach der Einleitung */
  sections?: { heading: string; paragraphs: string[] }[];
  deliverables: string[];
  audience: string[];
  facts: { label: string; value: string }[];
  /** Zwischenüberschriften mit Keyword – je Seite unterschiedlich */
  headings: { intro: string; deliverables: string; audience: string; faq: string; summary: string };
  /** Ab Januar 2027 eintragen, z. B. 'ab 290 €' – bis dahin „Festpreis auf Anfrage“ */
  price?: string;
  reference?: { title: string; text: string; href: string };
  /** Technik-Partner mit externem Link, z. B. die E-Mail-Plattform hinter einem Paket */
  partner?: { name: string; text: string; href: string; linkLabel: string };
  /** buchbare Tarife, z. B. Hosting- und Wartungspakete – als Karten auf der Leistungsseite */
  plans?: OfferPlanGroup[];
  faq: FaqItem[];
};

export type OfferPlan = {
  name: string;
  /** für wen der Tarif gedacht ist */
  tagline: string;
  features: string[];
  /** wählbare Varianten eines Pakets */
  variants?: string[];
};

export type OfferPlanGroup = {
  heading: string;
  intro: string;
  /** „stages“: Karten im Stil der Projektkarten mit Stufenanzeige (z. B. Wartung Klein/Mittel/Aufwendig) */
  look?: 'stages';
  plans: OfferPlan[];
};

export const offers: Offer[] = [
  {
    kind: 'service',
    slug: 'webdesign-magdeburg',
    title: 'Webdesign Magdeburg',
    icon: 'layout',
    teaser: 'Neue Webseite für Unternehmen, Vereine und Selbstständige – individuell gestaltet, schnell und gut bei Google auffindbar.',
    seoTitle: 'Webdesign Magdeburg – Homepage erstellen | r³webdesign',
    seoDesc:
      'Webdesign aus Magdeburg: individuelle Homepage für Unternehmen, Vereine und Selbstständige – schnell, mobil optimiert, mit SEO und zum Festpreis.',
    lead: 'Du brauchst eine neue Webseite? Ich gestalte und entwickle sie individuell für dich – ohne Baukasten, mit schnellen Ladezeiten und so aufgebaut, dass Kunden dich bei Google finden.',
    headings: {
      intro: 'Webdesign aus Magdeburg – was du bekommst',
      deliverables: 'Das ist in deiner neuen Webseite enthalten',
      audience: 'Für wen sich eine individuelle Webseite lohnt',
      faq: 'Häufige Fragen zum Webdesign in Magdeburg',
      summary: 'Webdesign auf einen Blick',
    },
    intro: [
      'Eine gute Webseite ist für viele Betriebe und Vereine heute der erste Kontaktpunkt: Hier entscheiden Interessenten in wenigen Sekunden, ob sie anrufen, eine Anfrage schicken oder weitersuchen. Deshalb entwickle ich jede Webseite individuell – passend zu deinem Angebot, deiner Zielgruppe und deinen Zielen.',
      'Du bekommst kein Theme von der Stange, sondern ein eigenes Design, sauberen Code und eine Seite, die dir gehört. Keine monatliche Baukasten-Miete, keine aufgeblähten Plugins – dafür kurze Ladezeiten, eine klare Struktur und eine Bedienung, die auf dem Smartphone genauso gut funktioniert wie am Desktop.',
    ],
    sections: [
      {
        heading: 'So läuft dein Webdesign-Projekt ab',
        paragraphs: [
          'Am Anfang steht ein kostenloses Erstgespräch – persönlich in Magdeburg oder per Video. Wir klären, was deine Webseite leisten soll, wen sie erreichen soll und welche Inhalte es schon gibt. Danach bekommst du ein klares Konzept mit Seitenstruktur und ein transparentes Festpreisangebot.',
          'In der Umsetzung siehst du regelmäßig sichtbare Zwischenstände und kannst früh Feedback geben. Ich kümmere mich um Gestaltung, Programmierung, die Struktur der Inhalte, Bilder und die technische Einrichtung. Vor dem Launch prüfe ich Ladezeiten, Darstellung auf verschiedenen Geräten, Barrierefreiheit und die Grundlagen für Google.',
          'Nach dem Launch bleibe ich dein Ansprechpartner: für Änderungen, neue Inhalte oder die Weiterentwicklung deiner Seite. Auf Wunsch richte ich dir eine Lösung ein, mit der du Texte und Bilder selbst pflegen kannst.',
        ],
      },
      {
        heading: 'Warum schnelle Ladezeiten und SEO von Anfang an wichtig sind',
        paragraphs: [
          'Eine Webseite, die langsam lädt oder auf dem Smartphone schwer zu bedienen ist, verliert Besucher – und rankt bei Google schlechter. Deshalb ist Performance bei mir kein Zusatz, sondern fester Bestandteil: optimierte Bilder in passenden Größen, lokal eingebundene Schriften und kaum unnötiges JavaScript.',
          'Auch das technische SEO baue ich direkt mit ein: aussagekräftige Seitentitel und Beschreibungen, eine saubere Überschriften-Struktur, eine Sitemap und strukturierte Daten nach Schema.org. So versteht Google, was du anbietest und wo – eine wichtige Grundlage, um bei Suchen wie „Friseur Magdeburg“ oder „Verein Magdeburg“ gefunden zu werden.',
        ],
      },
      {
        heading: 'Webdesign für Vereine, Handwerk und lokale Betriebe',
        paragraphs: [
          'Ein Verein braucht andere Inhalte als ein Friseursalon oder ein Handwerksbetrieb: Termine und Anmeldungen, Leistungen und Preise, Öffnungszeiten oder Referenzen. Deshalb starte ich nicht mit einer Vorlage, sondern mit der Frage, was deine Besucher suchen und was sie zur Kontaktaufnahme bewegt.',
          'Für lokale Betriebe aus Magdeburg und Umgebung achte ich besonders auf die Dinge, die bei Google Maps und der lokalen Suche zählen: vollständige Kontaktdaten, eine klare Beschreibung deines Einzugsgebiets und strukturierte Daten, die Google deinen Standort und deine Leistungen eindeutig zuordnen lassen.',
        ],
      },
      {
        heading: 'Barrierefreiheit ist inklusive',
        paragraphs: [
          'Jede Webseite setze ich barrierearm um: ausreichende Kontraste, gut lesbare Schriftgrößen, Bedienbarkeit per Tastatur und eine saubere Überschriften-Struktur für Screenreader. Das hilft Menschen mit Einschränkungen, macht die Seite für alle angenehmer und wird von Suchmaschinen besser verstanden. Wenn du rechtliche Anforderungen wie das BFSG erfüllen musst, prüfe ich die Seite auf Wunsch zusätzlich nach WCAG 2.1 AA.',
        ],
      },
      {
        heading: 'Was kostet eine Webseite in Magdeburg?',
        paragraphs: [
          'Der Preis hängt vor allem vom Umfang ab: Wie viele Seiten braucht es, gibt es Formulare, Buchungen oder einen Bereich zum Selbstpflegen? Ein schlanker Onepager ist deutlich schneller umgesetzt als eine Unternehmensseite mit vielen Unterseiten. Nach dem Erstgespräch bekommst du ein Festpreisangebot, in dem alle Leistungen aufgeführt sind – ohne versteckte Kosten.',
        ],
      },
    ],
    deliverables: [
      'Individuelles Design passend zu deiner Marke – kein Baukasten-Theme',
      'Optimiert für Smartphone, Tablet und Desktop',
      'Kurze Ladezeiten durch optimierte Bilder und schlanken Code',
      'Technisches SEO: Seitentitel, Beschreibungen, Sitemap, strukturierte Daten',
      'Barrierearm umgesetzt: gute Kontraste, Tastaturbedienung, klare Struktur',
      'Kontaktformular, Impressum- und Datenschutz-Grundgerüst',
      'Einrichtung von Domain und Hosting sowie Begleitung beim Launch',
    ],
    audience: [
      'Lokale Unternehmen und Handwerksbetriebe aus Magdeburg und Umgebung',
      'Vereine, Veranstaltungen und Initiativen',
      'Selbstständige, Praxen und Dienstleister, die online gefunden werden wollen',
      'Alle, die ihre Baukasten-Seite durch eine eigene, schnellere Webseite ersetzen möchten',
    ],
    facts: [
      { label: 'Dauer', value: 'meist 2–6 Wochen' },
      { label: 'Ergebnis', value: 'fertige Webseite inkl. Launch' },
      { label: 'Vor Ort', value: 'Magdeburg und Umgebung, sonst remote' },
    ],
    reference: {
      title: 'Radsportclub Magdeburg',
      text: 'Schnelle Vereinswebseite mit Kontaktformular, optimiert für Smartphones.',
      href: '/projekte/radsportclub-magdeburg/',
    },
    faq: [
      {
        question: 'Wie lange dauert es, eine Webseite erstellen zu lassen?',
        answer:
          'Kleine bis mittlere Webseiten sind meist in 2 bis 6 Wochen fertig. Wie schnell es geht, hängt auch davon ab, wann Texte und Bilder vorliegen – dabei unterstütze ich dich.',
      },
      {
        question: 'Muss ich mich um Hosting und Domain kümmern?',
        answer:
          'Nein. Ich berate dich bei der Auswahl, richte Domain und Hosting ein und kümmere mich um die technische Veröffentlichung. Die Verträge laufen auf deinen Namen, damit die Webseite dir gehört.',
      },
      {
        question: 'Kann ich meine Webseite später selbst bearbeiten?',
        answer:
          'Ja, auf Wunsch. Ich richte dir eine einfache Lösung ein, mit der du Texte und Bilder selbst ändern kannst, und erkläre dir alles in einer kurzen Einweisung. Alternativ übernehme ich die Pflege für dich.',
      },
    ],
  },
  {
    kind: 'service',
    slug: 'webentwicklung',
    title: 'Webentwicklung & Web-Apps',
    icon: 'code',
    teaser: 'Web-Apps, Portale und Dashboards mit Login, Datenbank und Verwaltungsbereich – passgenau für deine Abläufe.',
    seoTitle: 'Webentwicklung Magdeburg – Web-Apps & Portale | r³webdesign',
    seoDesc:
      'Webentwicklung aus Magdeburg: Web-Apps, Portale und Dashboards mit Login, Datenbank und Admin-Bereich – individuell, sicher und schnell entwickelt.',
    lead: 'Du brauchst mehr als eine klassische Webseite? Ich entwickle Web-Apps und Plattformen mit Benutzerkonten, Datenbank und Verwaltungsbereich – zugeschnitten auf deine Abläufe.',
    headings: {
      intro: 'Individuelle Web-Apps aus Magdeburg',
      deliverables: 'Was ich für deine Web-App entwickle',
      audience: 'Für welche Vorhaben sich eine Web-App lohnt',
      faq: 'Häufige Fragen zur Webentwicklung',
      summary: 'Webentwicklung auf einen Blick',
    },
    intro: [
      'Manche Ideen lassen sich mit einer normalen Webseite nicht umsetzen: Nutzer sollen sich registrieren, Inhalte anlegen, Anfragen verwalten oder miteinander handeln. Dafür braucht es eine Web-App – eine Anwendung, die im Browser läuft, auf jedem Gerät funktioniert und ohne Installation auskommt.',
      'Ich entwickle solche Anwendungen von der Datenstruktur bis zur Oberfläche: mit sicherer Anmeldung, einer Datenbank, klaren Rollen und Rechten sowie einem Verwaltungsbereich, in dem du den Überblick behältst.',
    ],
    sections: [
      {
        heading: 'Referenz: Startplatzbörse',
        paragraphs: [
          'Mein umfangreichstes Projekt ist Startplatzbörse – eine Online-Plattform, auf der Sportler Startplätze für Lauf-, Rad- und Triathlon-Events anbieten und finden. Dahinter stehen Benutzerkonten mit Anmeldung per Einmal-Code, eine Datenbank für Inserate, Nachrichten zwischen Käufern und Verkäufern sowie ein eigener Verwaltungsbereich.',
          'An diesem Projekt zeigt sich, worauf es bei Web-Apps ankommt: eine durchdachte Datenstruktur, sichere Zugriffsregeln, schnelle Seiten trotz vieler Inhalte und eine Oberfläche, die auch auf dem Smartphone einfach zu bedienen ist.',
        ],
      },
      {
        heading: 'So entsteht deine Web-App',
        paragraphs: [
          'Zuerst klären wir im Erstgespräch, welches Problem die Anwendung lösen soll und wer sie nutzt. Daraus entsteht ein Konzept mit den wichtigsten Funktionen für eine erste Version – damit du schnell etwas Funktionierendes in der Hand hast, statt monatelang auf ein großes Gesamtpaket zu warten.',
          'Die Entwicklung erfolgt in Etappen mit regelmäßigen, testbaren Zwischenständen. Nach dem Start lässt sich die Anwendung Schritt für Schritt erweitern – um neue Funktionen, Auswertungen oder Anbindungen an andere Dienste.',
        ],
      },
      {
        heading: 'Sicherheit und Datenschutz von Anfang an',
        paragraphs: [
          'Wo Nutzer sich anmelden und Daten speichern, ist Sicherheit kein Nachgedanke. Ich lege fest, wer welche Daten sehen und ändern darf, und setze diese Regeln direkt in der Datenbank um – nicht nur in der Oberfläche. Passwörter und Anmeldungen laufen über bewährte, geprüfte Dienste statt über selbstgebaute Lösungen.',
          'Auch beim Datenschutz denke ich mit: Es werden nur die Daten erhoben, die wirklich nötig sind, und Dienste mit Servern in der EU werden bevorzugt. Für Datenschutzerklärung und Auftragsverarbeitung liefere ich dir die technischen Angaben, die du brauchst.',
        ],
      },
      {
        heading: 'Was kostet eine Web-App?',
        paragraphs: [
          'Die Kosten hängen davon ab, wie viele Funktionen die erste Version braucht. Deshalb plane ich gemeinsam mit dir einen klaren Umfang für den Start und ein Festpreisangebot dafür. Weitere Funktionen kommen in eigenen, überschaubaren Etappen dazu – so bleibt das Budget planbar und du investierst nur in das, was sich im Alltag bewährt.',
        ],
      },
      {
        heading: 'Technik, die zu deinem Vorhaben passt',
        paragraphs: [
          'Ich setze auf moderne, bewährte Bausteine: Astro und TypeScript für schnelle Oberflächen, Supabase und PostgreSQL für Datenbank, Anmeldung und Speicher, dazu E-Mail-Versand und Hosting bei etablierten Anbietern. Die Auswahl richtet sich nach deinem Projekt – nicht nach dem neuesten Trend.',
          'Wichtig ist mir, dass du nicht von mir abhängig bist: Der Code ist sauber strukturiert und dokumentiert, Konten und Zugänge laufen auf deinen Namen.',
        ],
      },
    ],
    deliverables: [
      'Konzept mit Datenstruktur, Rollen und den wichtigsten Funktionen',
      'Sichere Anmeldung und Benutzerkonten',
      'Datenbank mit klaren Zugriffsregeln',
      'Verwaltungsbereich (Dashboard) für Inhalte, Nutzer und Anfragen',
      'Oberfläche für Smartphone, Tablet und Desktop',
      'E-Mail-Benachrichtigungen und Anbindung externer Dienste',
      'Launch, Betreuung und Weiterentwicklung in Etappen',
    ],
    audience: [
      'Gründer mit einer Plattform-Idee, die schnell eine erste Version brauchen',
      'Vereine und Veranstalter mit Anmeldungen, Mitgliederbereichen oder Börsen',
      'Unternehmen, die Abläufe aus Excel und E-Mails in eine eigene Anwendung holen wollen',
    ],
    facts: [
      { label: 'Dauer', value: 'in Etappen, je nach Umfang' },
      { label: 'Ergebnis', value: 'lauffähige Web-App inkl. Launch' },
      { label: 'Technik', value: 'Astro, TypeScript, Supabase' },
    ],
    reference: {
      title: 'Startplatzbörse',
      text: 'Online-Plattform mit Benutzerkonten, Datenbank, Nachrichten und Verwaltungsbereich.',
      href: '/projekte/startplatzboerse/',
    },
    faq: [
      {
        question: 'Was ist der Unterschied zwischen Webseite und Web-App?',
        answer:
          'Eine Webseite informiert – eine Web-App lässt Nutzer etwas tun: sich anmelden, Daten anlegen, Inhalte verwalten oder miteinander interagieren. Dafür braucht es eine Datenbank, Benutzerkonten und eine eigene Logik im Hintergrund.',
      },
      {
        question: 'Brauche ich zusätzlich eine App für iOS und Android?',
        answer:
          'Oft nicht: Eine Web-App läuft im Browser auf jedem Gerät und lässt sich sogar auf dem Startbildschirm ablegen. Wenn du Funktionen wie Push-Nachrichten oder einen Store-Eintrag brauchst, entwickle ich auch native Apps für iOS und Android.',
      },
      {
        question: 'Wem gehören Code und Daten?',
        answer:
          'Dir. Konten für Datenbank, Hosting und Domain laufen auf deinen Namen, und du bekommst Zugriff auf den vollständigen Quellcode. So kannst du die Anwendung jederzeit selbst oder mit einem anderen Entwickler weiterführen.',
      },
      {
        question: 'Kann die Anwendung später wachsen?',
        answer:
          'Ja. Ich starte meist mit einer schlanken ersten Version und baue sie dann in Etappen aus. Die Datenstruktur plane ich von Anfang an so, dass neue Funktionen ohne Neuentwicklung möglich sind.',
      },
    ],
  },
  {
    kind: 'service',
    slug: 'app-entwicklung',
    title: 'Native Apps',
    icon: 'mobile',
    teaser: 'Apps für iOS und Android aus einer Codebasis – mit React Native und Expo, auf Wunsch mit gemeinsamer Datenbank und Anmeldung wie deine Web-App.',
    seoTitle: 'App-Entwicklung Magdeburg – iOS & Android Apps | r³webdesign',
    seoDesc:
      'App-Entwicklung aus Magdeburg: native Apps für iOS und Android mit React Native und Expo – eine Codebasis, gemeinsame Datenbank mit deiner Web-App, Veröffentlichung im App Store und bei Google Play.',
    lead: 'Du willst mit deinem Angebot auf das Smartphone? Ich entwickle native Apps für iOS und Android aus einer gemeinsamen Codebasis – auf Wunsch verbunden mit deiner bestehenden Web-App.',
    headings: {
      intro: 'App-Entwicklung für iOS und Android aus Magdeburg',
      deliverables: 'Das gehört zu deiner App',
      audience: 'Für wen sich eine eigene App lohnt',
      faq: 'Häufige Fragen zur App-Entwicklung',
      summary: 'Native Apps auf einen Blick',
    },
    intro: [
      'Eine App ist mehr als eine verkleinerte Webseite: Sie liegt direkt auf dem Startbildschirm, reagiert auf Gesten, kann Push-Nachrichten schicken und fühlt sich auf iPhone und Android-Gerät jeweils vertraut an. Deshalb lohnt sie sich vor allem dann, wenn deine Nutzer regelmäßig und unterwegs mit deinem Angebot arbeiten.',
      'Ich entwickle Apps mit React Native und Expo. So entsteht aus einer gemeinsamen Codebasis eine echte native App für iOS und eine für Android – ohne dass jede Funktion doppelt gebaut und gepflegt werden muss.',
    ],
    sections: [
      {
        heading: 'Referenz: Die Startplatzbörse-App',
        paragraphs: [
          'Für die Startplatzbörse entsteht gerade eine eigene App für iOS und Android, die im ersten Quartal 2027 erscheint. Sie ist als Expo-Projekt mit React Native aufgebaut und wird aus einer Codebasis für beide Plattformen veröffentlicht.',
          'Unter der Oberfläche teilt sich die App die Datenbankstrukturen und die Anmeldung mit der bestehenden Web-Plattform: Nutzer melden sich mit demselben Konto an und sehen dieselben Daten – egal ob im Browser oder in der App. Änderungen an Inhalten sind sofort überall sichtbar, und die Regeln für Zugriffe und Rechte gelten an beiden Stellen gleich.',
          'Das Design dagegen ist komplett eigenständig entwickelt. Statt die Webseite nachzubauen, folgt die App den Gewohnheiten auf dem Smartphone: Navigation mit dem Daumen, klare Bildschirme für einzelne Aufgaben und Bedienelemente, die sich nach iOS und Android anfühlen.',
        ],
      },
      {
        heading: 'Warum React Native und Expo',
        paragraphs: [
          'React Native erzeugt echte native Bedienelemente – die App ist also keine Webseite im App-Rahmen, sondern fühlt sich auf jedem Gerät wie zu Hause an. Expo ergänzt das um bewährte Werkzeuge für Kamera, Standort, Push-Nachrichten, Builds und die Veröffentlichung in den Stores.',
          'Für dich bedeutet das: eine Codebasis statt zwei, kürzere Entwicklungszeit und einfachere Pflege. Kleinere Korrekturen lassen sich mit Expo sogar ohne neues Store-Review ausliefern.',
        ],
      },
      {
        heading: 'App und Web-App aus einem Guss',
        paragraphs: [
          'Wenn du bereits eine Web-App hast oder beides planst, verbinde ich App und Webseite mit einem gemeinsamen Backend: dieselbe Datenbank, dieselbe Anmeldung, dieselben Zugriffsregeln. So pflegst du Daten nur an einer Stelle, und neue Funktionen im Hintergrund stehen auf allen Geräten zur Verfügung.',
          'Die Oberflächen entwickle ich dabei bewusst getrennt: Die Webseite bleibt für den großen Bildschirm optimiert, die App für das Smartphone – jede so, wie sie am besten funktioniert.',
        ],
      },
      {
        heading: 'Vom Prototyp bis in den App Store',
        paragraphs: [
          'Wir starten mit einem klickbaren Konzept der wichtigsten Bildschirme. Danach entwickle ich die App in Etappen und du testest Zwischenstände direkt auf deinem eigenen Smartphone – über TestFlight auf dem iPhone und interne Tests bei Google Play.',
          'Zum Launch bereite ich Store-Einträge, Screenshots und Datenschutzangaben vor und begleite die Prüfung durch Apple und Google. Auch danach bleibe ich dein Ansprechpartner für Updates, neue Betriebssystem-Versionen und weitere Funktionen.',
        ],
      },
    ],
    deliverables: [
      'Konzept und Entwürfe der wichtigsten Bildschirme',
      'App für iOS und Android aus einer Codebasis (React Native & Expo)',
      'Anbindung an Datenbank und Anmeldung – auf Wunsch gemeinsam mit deiner Web-App',
      'Push-Nachrichten und Gerätefunktionen nach Bedarf',
      'Testversionen über TestFlight und Google Play',
      'Veröffentlichung im App Store und bei Google Play',
      'Updates und Betreuung nach dem Launch',
    ],
    audience: [
      'Plattformen und Web-Apps, deren Nutzer regelmäßig unterwegs aktiv sind',
      'Vereine und Veranstalter mit Mitgliederbereich, Terminen oder Anmeldungen',
      'Gründer, die ihre Idee als App in beiden Stores anbieten wollen',
    ],
    facts: [
      { label: 'Plattformen', value: 'iOS und Android' },
      { label: 'Technik', value: 'React Native mit Expo' },
      { label: 'Ergebnis', value: 'App im App Store und bei Google Play' },
    ],
    reference: {
      title: 'Startplatzbörse-App',
      text: 'App für iOS und Android, Launch im 1. Quartal 2027 – mit gemeinsamer Datenbank und Anmeldung wie die Web-Plattform.',
      href: '/projekte/startplatzboerse/',
    },
    faq: [
      {
        question: 'Brauche ich eine App oder reicht eine Web-App?',
        answer:
          'Eine Web-App läuft im Browser und reicht oft aus. Eine native App lohnt sich, wenn deine Nutzer sie regelmäßig nutzen, Push-Nachrichten wichtig sind, Gerätefunktionen wie Kamera oder Standort gebraucht werden oder du im App Store und bei Google Play gefunden werden willst.',
      },
      {
        question: 'Kann die App dieselben Daten wie meine Webseite nutzen?',
        answer:
          'Ja. App und Web-App können sich Datenbank und Anmeldung teilen – so wie bei der Startplatzbörse. Nutzer melden sich mit demselben Konto an, und alle Inhalte sind auf jedem Gerät aktuell.',
      },
      {
        question: 'Welche Konten brauche ich für die Veröffentlichung?',
        answer:
          'Für den App Store brauchst du ein Apple-Developer-Konto, für Android ein Google-Play-Entwicklerkonto. Beide laufen auf deinen Namen, damit die App dir gehört. Ich helfe dir bei der Einrichtung.',
      },
      {
        question: 'Wie lange dauert die Prüfung durch Apple und Google?',
        answer:
          'Meist wenige Tage. Damit die Prüfung reibungslos läuft, bereite ich Store-Einträge, Datenschutzangaben und Testzugänge vorab sorgfältig vor.',
      },
    ],
  },
  {
    kind: 'service',
    slug: 'hosting-betreuung',
    title: 'Hosting & Betreuung',
    icon: 'server',
    teaser: 'Hosting auf meinen eigenen Servern in Deutschland, dazu Wartung, Backups und kleine Änderungen – in drei Stufen buchbar.',
    seoTitle: 'Hosting & Wartung für Webseiten – Magdeburg | r³webdesign',
    seoDesc:
      'Hosting auf eigenen Servern in Deutschland, Wartung, Backups, Updates und kleine Änderungen für deine Webseite – alle Daten bleiben in Deutschland, Betreuung aus Magdeburg in drei Stufen.',
    lead: 'Deine Webseite ist online – und soll es auch bleiben. Ich kümmere mich um Hosting, Updates, Backups und kleine Änderungen, damit du dich um dein Tagesgeschäft kümmern kannst.',
    headings: {
      intro: 'Betrieb und Pflege deiner Webseite aus einer Hand',
      deliverables: 'Das übernehme ich im Betrieb',
      audience: 'Für wen sich Hosting und Betreuung lohnen',
      faq: 'Häufige Fragen zu Hosting und Wartung',
      summary: 'Hosting & Betreuung auf einen Blick',
    },
    intro: [
      'Eine Webseite ist nach dem Launch nicht fertig: Zertifikate laufen ab, Software braucht Updates, Inhalte ändern sich und irgendwann soll eine neue Seite oder ein Formular dazukommen. Wer sich darum nicht kümmert, riskiert Sicherheitslücken, Ausfälle oder veraltete Informationen.',
      'Mit Hosting und Betreuung bekommst du einen festen Ansprechpartner für alles, was nach dem Start anfällt. Ich richte das Hosting ein, behalte die Technik im Blick, sichere deine Daten und setze kleine Änderungen schnell um – ohne Ticketsystem und ohne lange Wartezeiten.',
    ],
    plans: [
      {
        heading: 'Wartung in drei Stufen',
        look: 'stages',
        intro:
          'Je nach Größe deines Projekts brauchst du mehr oder weniger Betreuung. Das Hosting auf meinen Servern in Deutschland ist in jeder Stufe enthalten.',
        plans: [
          {
            name: 'Klein',
            tagline: 'Für Visitenkarten-, Vereins- und Landingpages',
            features: [
              'Hosting, Domain und SSL-Zertifikat im Blick',
              'Updates und regelmäßige Sicherheitsprüfung',
              'Regelmäßige Backups deiner Webseite',
              'Überwachung der Erreichbarkeit',
              'Kleine Text- und Bildänderungen nach Absprache',
            ],
          },
          {
            name: 'Mittel',
            tagline: 'Für Unternehmensseiten mit mehreren Bereichen, Formularen oder Blog',
            features: [
              'Alles aus „Klein“',
              'Tägliche Backups',
              'Regelmäßige Kontrolle von Ladezeiten und SEO-Grundlagen',
              'Laufende Inhaltsänderungen, z. B. Termine, Leistungen, Team',
              'Bevorzugte Bearbeitung deiner Anfragen',
            ],
          },
          {
            name: 'Aufwendig',
            tagline: 'Für Web-Apps, Plattformen und Mitgliederbereiche',
            features: [
              'Alles aus „Mittel“',
              'Datenbank-Backups mit regelmäßigem Wiederherstellungstest',
              'Überwachung von Fehlern, Server und Datenbank',
              'Kleine Weiterentwicklungen und neue Funktionen',
              'Schnelle Reaktion bei Störungen, direkter Draht zu mir',
            ],
          },
        ],
      },
    ],
    sections: [
      {
        heading: 'Deine Daten bleiben in Deutschland',
        paragraphs: [
          'Alle Webseiten, die ich betreue, laufen auf meinen eigenen Servern in Deutschland. Inhalte, Formulareingaben, Datenbanken und Backups verlassen Deutschland nicht – es gibt keine Weitergabe an große Cloud-Anbieter in den USA oder anderswo.',
          'Für dich heißt das: klare Verhältnisse beim Datenschutz, ein Vertrag zur Auftragsverarbeitung direkt mit mir und ein Ansprechpartner, der genau weiß, wo deine Daten liegen. Die Server sind abgesichert, werden laufend überwacht und regelmäßig gesichert.',
        ],
      },
      {
        heading: 'Backups und Sicherheit',
        paragraphs: [
          'Ich sichere deine Webseite regelmäßig – je nach Stufe wöchentlich oder täglich, bei Web-Apps inklusive Datenbank. Die Sicherungen liegen getrennt vom eigentlichen Hosting, damit im Ernstfall nichts verloren geht. Bei der Stufe „Aufwendig“ prüfe ich außerdem regelmäßig, ob sich ein Backup wirklich wiederherstellen lässt.',
          'Updates spiele ich kontrolliert ein und prüfe danach, ob alles wie gewohnt funktioniert. SSL-Zertifikate werden automatisch erneuert, und ich bekomme eine Meldung, wenn deine Seite einmal nicht erreichbar ist – oft bevor du es selbst merkst.',
        ],
      },
      {
        heading: 'Kleine Änderungen ohne Umwege',
        paragraphs: [
          'Neue Öffnungszeiten, ein aktualisierter Termin, ein Foto vom letzten Event oder ein zusätzlicher Menüpunkt: Solche Änderungen schickst du mir einfach per E-Mail, und ich setze sie zeitnah um. Größere Erweiterungen besprechen wir vorab und ich mache dir ein separates Angebot.',
        ],
      },
      {
        heading: 'Übernahme bestehender Webseiten',
        paragraphs: [
          'Du hast schon eine Webseite, aber niemanden mehr, der sich darum kümmert? Ich schaue mir Technik und Hosting an, sage dir ehrlich, ob sich die Betreuung lohnt oder ein Relaunch sinnvoller ist, und ziehe die Seite auf Wunsch auf meine Server in Deutschland um.',
        ],
      },
    ],
    deliverables: [
      'Hosting auf eigenen Servern in Deutschland, inklusive Domain, DNS und SSL-Zertifikat',
      'Updates und regelmäßige Sicherheitsprüfung',
      'Regelmäßige Backups, bei Bedarf mit Datenbank',
      'Überwachung der Erreichbarkeit',
      'Kleine Änderungen an Texten, Bildern und Terminen',
      'Ein fester Ansprechpartner statt Hotline',
    ],
    audience: [
      'Vereine und Selbstständige, die sich nicht selbst um Technik kümmern wollen',
      'Unternehmen, die regelmäßig Inhalte aktualisieren',
      'Betreiber von Web-Apps und Mitgliederbereichen mit sensiblen Daten',
      'Alle, deren bisherige Webseite niemand mehr betreut',
    ],
    facts: [
      { label: 'Hosting', value: 'eigene Server in Deutschland' },
      { label: 'Wartung', value: 'in drei Stufen buchbar' },
      { label: 'Ergebnis', value: 'sichere, aktuelle Webseite ohne eigenen Aufwand' },
    ],
    price: 'Preis auf Anfrage',
    faq: [
      {
        question: 'Wo liegt meine Webseite?',
        answer:
          'Auf meinen eigenen Servern in Deutschland. Das gilt für alle Webseiten, die ich betreue – egal ob kleine Vereinsseite oder Web-App mit Datenbank. Deine Inhalte, Formulareingaben und Backups bleiben ausschließlich in Deutschland.',
      },
      {
        question: 'Kann ich Hosting und Wartung getrennt buchen?',
        answer:
          'Ja. Du kannst nur das Hosting von mir einrichten und betreuen lassen oder eine Wartungsstufe für eine Webseite buchen, die woanders liegt. Am einfachsten ist es aber, beides zu kombinieren – dann gibt es einen Ansprechpartner für alles.',
      },
      {
        question: 'Wem gehören Domain und Hosting-Konto?',
        answer:
          'Dir. Domain und Hosting laufen auf deinen Namen, ich bekomme nur die Zugänge, die ich für die Betreuung brauche. Wenn du die Betreuung beendest, bleibt alles bei dir.',
      },
      {
        question: 'Was kostet die Betreuung?',
        answer:
          'Das hängt von der gewählten Stufe, dem Hosting und der Größe deiner Webseite ab. Schreib mir kurz, worum es geht – du bekommst ein transparentes Angebot.',
      },
    ],
  },
  {
    kind: 'package',
    slug: 'seo-check',
    title: 'SEO-Check',
    icon: 'search',
    teaser: 'Technik, Inhalte und Ladezeiten deiner Webseite – geprüft und mit klaren Prioritäten.',
    seoTitle: 'SEO-Check für deine Webseite – Magdeburg | r³webdesign',
    seoDesc:
      'SEO-Audit aus Magdeburg: Technik, Inhalte, Ladezeiten und lokale Sichtbarkeit deiner Webseite geprüft – mit priorisiertem Bericht und Besprechung.',
    headings: {
      intro: 'Was ist ein SEO-Check?',
      deliverables: 'Was der SEO-Check prüft',
      audience: 'Für wen sich ein SEO-Check lohnt',
      faq: 'Häufige Fragen zum SEO-Check',
      summary: 'SEO-Check auf einen Blick',
    },
    lead: 'Warum wird deine Webseite nicht gefunden? Ich prüfe Technik, Inhalte und Performance – und du bekommst eine klare Liste, was sich wirklich lohnt.',
    sections: [
      {
        heading: 'So läuft der SEO-Check ab',
        paragraphs: [
          'Nach deiner Anfrage schickst du mir die Adresse deiner Webseite und – falls vorhanden – einen Lesezugang zur Google Search Console. Ich prüfe die Seite dann mit professionellen Werkzeugen und von Hand: Technik, Inhalte, Ladezeiten und lokale Sichtbarkeit.',
          'Die Ergebnisse fasse ich in einem verständlichen Bericht zusammen. Jeder Punkt enthält, was das Problem ist, warum es wichtig ist und wie es behoben wird – sortiert nach Aufwand und Wirkung. In einer Besprechung per Video gehen wir die wichtigsten Punkte gemeinsam durch, und du kannst alle Fragen stellen.',
        ],
      },
      {
        heading: 'Technisches SEO, Inhalte und lokale Sichtbarkeit',
        paragraphs: [
          'Beim technischen SEO geht es darum, ob Google deine Seite überhaupt richtig erfassen kann: Sind alle wichtigen Seiten indexiert, gibt es doppelte Inhalte, fehlerhafte Weiterleitungen oder Seiten, die versehentlich ausgeschlossen sind? Dazu kommen Ladezeiten und Core Web Vitals, die Google direkt als Rankingsignal nutzt.',
          'Bei den Inhalten schaue ich, ob deine Seiten zu dem passen, wonach deine Kunden suchen: Treffen Seitentitel und Überschriften die richtigen Begriffe, ist klar erkennbar, was du anbietest und wo? Für lokale Betriebe prüfe ich außerdem Kontaktdaten, Einzugsgebiet und strukturierte Daten – die Grundlage, um in Magdeburg und Umgebung gefunden zu werden.',
        ],
      },
      {
        heading: 'Was passiert nach dem Check?',
        paragraphs: [
          'Du entscheidest selbst, wie es weitergeht: Viele Punkte lassen sich mit dem Bericht direkt umsetzen, auch ohne Programmierkenntnisse. Wenn du möchtest, übernehme ich die Umsetzung oder unterstütze deine bisherige Agentur. Und wenn sich zeigt, dass ein Neustart sinnvoller ist als viele Einzelkorrekturen, ist der Check die ideale Grundlage für einen Relaunch.',
        ],
      },
      {
        heading: 'Was kostet ein SEO-Check?',
        paragraphs: [
          'Der SEO-Check ist ein Festpreis-Paket: Umfang, Bericht und Besprechung sind klar definiert, es kommen keine Stundenabrechnungen dazu. Bei sehr großen Webseiten mit vielen hundert Unterseiten sprechen wir vorab über den passenden Prüfumfang. Den genauen Preis nenne ich dir nach einer kurzen Anfrage.',
        ],
      },
    ],
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
        question: 'Wie schnell sehe ich Ergebnisse bei Google?',
        answer:
          'Technische Korrekturen wirken oft schon nach einigen Tagen bis Wochen, sobald Google die Seiten neu erfasst. Verbesserungen bei Inhalten und lokaler Sichtbarkeit brauchen meist ein bis drei Monate, bis sie sich in den Rankings zeigen.',
      },
      {
        question: 'Prüfst du auch Webseiten mit WordPress, Wix oder Jimdo?',
        answer:
          'Ja. Der Check funktioniert unabhängig davon, womit deine Seite gebaut ist. Im Bericht kennzeichne ich, welche Punkte sich mit deinem System leicht umsetzen lassen und wo es an Grenzen stößt.',
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
    kind: 'package',
    slug: 'relaunch',
    title: 'Webseiten-Relaunch',
    icon: 'refresh',
    teaser: 'Deine bestehende Seite modern, schnell und mobil – ohne Inhalte oder Rankings zu verlieren.',
    seoTitle: 'Webseiten-Relaunch & Redesign – Magdeburg | r³webdesign',
    seoDesc:
      'Redesign und Relaunch deiner Webseite aus Magdeburg: modernes Design, schnelle Ladezeiten und ein sauberer Umzug ohne Ranking-Verlust.',
    headings: {
      intro: 'Wann sich ein Webseiten-Relaunch lohnt',
      deliverables: 'Was beim Relaunch passiert',
      audience: 'Für welche Webseiten ein Relaunch passt',
      faq: 'Häufige Fragen zum Relaunch',
      summary: 'Relaunch auf einen Blick',
    },
    lead: 'Deine Webseite ist in die Jahre gekommen? Ich bringe sie auf den aktuellen Stand – modern, schnell und mobil, ohne dass Inhalte oder Google-Rankings verloren gehen.',
    sections: [
      {
        heading: 'Woran du erkennst, dass ein Relaunch fällig ist',
        paragraphs: [
          'Typische Anzeichen sind lange Ladezeiten, eine Darstellung, die auf dem Smartphone verrutscht, und Inhalte, die nur mühsam oder gar nicht mehr selbst gepflegt werden können. Oft kommen veraltete Plugins, Sicherheitswarnungen oder ein Design dazu, das nicht mehr zu deinem Angebot passt.',
          'Ein weiteres Signal: Die Seite bringt kaum noch Anfragen, obwohl dein Angebot gut ist. Häufig liegt das nicht am Inhalt, sondern an Technik und Struktur – genau dort setzt ein Relaunch an.',
        ],
      },
      {
        heading: 'Rankings sicher umziehen',
        paragraphs: [
          'Der größte Fehler bei einem Relaunch ist ein unsauberer Umzug: Alte Adressen führen ins Leere, Google findet bekannte Seiten nicht mehr, und mühsam aufgebaute Rankings gehen verloren. Deshalb erfasse ich vorab alle bestehenden Seiten und ihre Bedeutung für die Suche.',
          'Für jede alte Adresse lege ich eine passende Weiterleitung auf die neue Seite an. Seitentitel, Beschreibungen und wichtige Inhalte bleiben erhalten oder werden verbessert. Nach dem Launch kontrolliere ich in der Search Console, ob Google die neue Struktur richtig übernimmt.',
        ],
      },
      {
        heading: 'Neues Design, bewährte Inhalte',
        paragraphs: [
          'Ein Relaunch heißt nicht, dass du bei null anfängst. Texte, Bilder und Referenzen, die funktionieren, übernehmen wir – auf Wunsch sprachlich und strukturell überarbeitet. Neu kommen ein individuelles Design, eine klare Navigation und eine Technik, die schnell lädt und sich einfach pflegen lässt.',
        ],
      },
      {
        heading: 'Was kostet ein Relaunch?',
        paragraphs: [
          'Der Preis richtet sich nach Anzahl und Umfang der Seiten und danach, wie viele Inhalte übernommen oder neu erstellt werden. Nach einer Bestandsaufnahme bekommst du ein Festpreisangebot, das Design, Umsetzung, Umzug der Inhalte und alle Weiterleitungen umfasst – ohne Überraschungen am Ende.',
        ],
      },
    ],
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
        question: 'Bleibt meine Domain gleich?',
        answer:
          'Ja, in aller Regel. Die neue Seite wird unter deiner bestehenden Domain veröffentlicht. Wenn du die Domain wechseln möchtest, plane ich den Umzug mit allen nötigen Weiterleitungen, damit Besucher und Google dich weiterhin finden.',
      },
      {
        question: 'Ist meine Seite während des Relaunchs offline?',
        answer:
          'Nein. Die neue Seite entsteht parallel auf einer Testadresse. Erst wenn alles geprüft und freigegeben ist, wird umgeschaltet – meist in wenigen Minuten und ohne Ausfallzeit.',
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
    kind: 'package',
    slug: 'barrierefreiheit',
    title: 'Barrierefreiheits-Check',
    icon: 'access',
    teaser: 'Prüfung nach WCAG 2.1 – damit deine Seite für alle nutzbar ist und du weißt, wo du stehst.',
    seoTitle: 'Barrierefreiheits-Check (BFSG, WCAG) | r³webdesign',
    seoDesc:
      'Barrierefreiheits-Check aus Magdeburg: Prüfung nach WCAG 2.1 AA mit verständlichem Bericht und konkreten Maßnahmen – auch mit Blick auf das BFSG.',
    headings: {
      intro: 'Warum Barrierefreiheit wichtig ist',
      deliverables: 'Was der Barrierefreiheits-Check prüft',
      audience: 'Für wen der Check sinnvoll ist',
      faq: 'Häufige Fragen zu Barrierefreiheit und BFSG',
      summary: 'Barrierefreiheits-Check auf einen Blick',
    },
    lead: 'Kann wirklich jeder deine Webseite nutzen – auch mit Screenreader, Tastatur oder Sehschwäche? Der Check zeigt dir, wo Barrieren sind und wie du sie beseitigst.',
    sections: [
      {
        heading: 'So läuft der Barrierefreiheits-Check ab',
        paragraphs: [
          'Gemeinsam legen wir fest, welche Seiten geprüft werden – meist Startseite, wichtige Unterseiten und alle Formulare. Diese teste ich mit automatischen Werkzeugen und vor allem manuell: per Tastatur, mit Screenreader, mit vergrößerter Schrift und auf dem Smartphone.',
          'Jede gefundene Barriere dokumentiere ich mit Fundstelle, Schweregrad, dem betroffenen WCAG-Kriterium und einem konkreten Lösungsvorschlag. In der Besprechung zeige ich dir die wichtigsten Punkte direkt an deiner Seite.',
        ],
      },
      {
        heading: 'Typische Barrieren auf Webseiten',
        paragraphs: [
          'Häufig sind es Kleinigkeiten mit großer Wirkung: zu blasse Schrift auf farbigem Hintergrund, Bilder ohne Alternativtext, Formularfelder ohne Beschriftung oder Buttons, die sich nicht per Tastatur erreichen lassen. Auch fehlende oder falsch verschachtelte Überschriften erschweren die Orientierung mit Screenreader.',
          'Viele dieser Punkte lassen sich mit überschaubarem Aufwand beheben. Der Bericht zeigt, was zuerst angegangen werden sollte, damit die Seite schnell spürbar zugänglicher wird.',
        ],
      },
      {
        heading: 'Nach dem Check: Umsetzung und Erklärung zur Barrierefreiheit',
        paragraphs: [
          'Auf Wunsch setze ich die Maßnahmen direkt um oder unterstütze deine bisherige Agentur dabei. Außerdem helfe ich dir, eine Erklärung zur Barrierefreiheit zu formulieren, die offen zeigt, welche Anforderungen erfüllt sind, wo es noch Einschränkungen gibt und wie Nutzer dich bei Problemen erreichen.',
        ],
      },
      {
        heading: 'Was kostet der Barrierefreiheits-Check?',
        paragraphs: [
          'Der Check ist ein Festpreis-Paket für eine vorab festgelegte Anzahl an Seiten und Formularen. Bei größeren Webseiten prüfe ich typische Seitenvorlagen stellvertretend, damit der Aufwand überschaubar bleibt. Den genauen Preis nenne ich dir nach einer kurzen Anfrage.',
        ],
      },
    ],
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
        question: 'Wird meine Seite durch den Check automatisch barrierefrei?',
        answer:
          'Der Check zeigt, wo Barrieren sind und wie sie behoben werden. Barrierefrei wird die Seite durch die Umsetzung der Maßnahmen – die kann ich übernehmen, oder du gibst den Bericht an deine Agentur weiter.',
      },
      {
        question: 'Was ist WCAG 2.1 AA?',
        answer:
          'Die Web Content Accessibility Guidelines sind der internationale Standard für barrierefreie Webinhalte. Stufe AA ist das Niveau, auf das sich europäische und deutsche Vorgaben in der Regel beziehen – etwa die Norm EN 301 549.',
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
  {
    kind: 'package',
    slug: 'business-email',
    title: 'Managed Business E-Mail & DNS',
    icon: 'mail',
    teaser: 'Postfächer auf deiner Domain, zuverlässiger Formularversand und sauberes DNS – eingerichtet und betreut auf Servern in Deutschland.',
    seoTitle: 'Business E-Mail & DNS einrichten – Magdeburg | r³webdesign',
    seoDesc:
      'Managed Business E-Mail aus Magdeburg: Postfächer auf deiner Domain, zuverlässiger Formularversand und DNS mit SPF, DKIM und DMARC – DSGVO-konform auf Servern in Deutschland.',
    lead: 'Zuverlässiger E-Mail-Versand, DSGVO-konforme Postfächer und professionelles DNS-Management aus deutschen Rechenzentren – eingerichtet und betreut aus einer Hand.',
    headings: {
      intro: 'E-Mail, die einfach funktioniert',
      deliverables: 'Das ist im Paket enthalten',
      audience: 'Für wen sich Managed Business E-Mail lohnt',
      faq: 'Häufige Fragen zu Business E-Mail und DNS',
      summary: 'Business E-Mail auf einen Blick',
    },
    intro: [
      'Eine funktionierende E-Mail-Infrastruktur ist das Rückgrat deiner Kommunikation. Ob Kundenanfragen über das Formular auf deiner Webseite oder der tägliche Mailverkehr: Fehlerhafte DNS-Einstellungen oder Mails, die im Spam-Ordner landen, kosten Zeit und im schlimmsten Fall Aufträge.',
      'Mit Managed Business E-Mail übernehme ich die komplette Einrichtung und den Betrieb deiner E-Mail-Kommunikation – von den Postfächern über die Anbindung deiner Formulare bis zu den DNS-Einträgen, die über die Zustellung entscheiden. Technisch setze ich dafür auf Mailtory, eine E-Mail-Plattform mit eigenen Servern in Deutschland.',
    ],
    sections: [
      {
        heading: 'Website-Formulare zuverlässig zustellen',
        paragraphs: [
          'Kontaktformulare, Buchungsanfragen oder Anmeldungen schicke ich nicht über den Webserver deiner Seite, sondern über eine eigene Versand-Infrastruktur mit sauberer Authentifizierung. So kommen Anfragen zuverlässig bei dir an – auf Wunsch zusätzlich als Ticket, damit keine Anfrage untergeht.',
          'Genau so läuft übrigens auch das Kontaktformular auf dieser Webseite.',
        ],
      },
      {
        heading: 'SPF, DKIM und DMARC – richtig eingerichtet',
        paragraphs: [
          'Ob eine E-Mail im Posteingang oder im Spam-Ordner landet, entscheiden vor allem drei DNS-Einträge: SPF legt fest, welche Server für deine Domain senden dürfen, DKIM signiert jede ausgehende Mail digital und DMARC regelt, was mit Mails passiert, die diese Prüfungen nicht bestehen. Zusätzlich erzwingt MTA-STS verschlüsselte Verbindungen beim Empfang.',
          'Ich richte alle Einträge ein, prüfe sie mit einem Zustellbarkeitstest und behalte die regelmäßigen DMARC-Berichte im Blick. So erkenne ich früh, wenn jemand versucht, deine Domain für gefälschte Mails zu missbrauchen.',
        ],
      },
      {
        heading: 'Postfächer für dich und dein Team',
        paragraphs: [
          'Du bekommst Postfächer mit deinen Wunsch-Adressen wie info@ oder vorname@deine-domain.de – mit Webmail im Browser und IMAP/SMTP für alle gängigen Programme. Outlook, Apple Mail, Thunderbird und die Mail-Apps auf iPhone und Android richten sich automatisch ein.',
          'Weiterleitungen und Aliase verteilen eine Adresse wie info@ an mehrere Personen. Und wenn eine Vertretung auf ein Postfach zugreifen soll, bekommt sie einen eigenen Zugang, der sich später mit einem Klick wieder sperren lässt – ohne Passwort-Wechsel für alle anderen.',
        ],
      },
      {
        heading: 'Datenschutz und Sicherheit',
        paragraphs: [
          'Postfächer, Mailserver und Datenbank laufen auf Servern in Deutschland, ein Vertrag zur Auftragsverarbeitung ist inklusive. Alle Verbindungen sind mit TLS verschlüsselt, ein Spam- und Virenfilter prüft eingehende Mails automatisch, und die Anmeldung lässt sich mit Zwei-Faktor-Authentifizierung absichern.',
        ],
      },
    ],
    deliverables: [
      'DSGVO-konforme Business-Postfächer: Sichere E-Mail-Postfächer mit eigenen Wunsch-Adressen (@deine-domain.de) auf deutschen Servern',
      'Zuverlässiger Formular- & Transaktionsversand: Zustellung aller Website-Formulare, Buchungen & Anfragen über Server mit hoher Reputation – für den Posteingang statt den Spam-Ordner',
      'Managed DNS & Domain-Sicherheit: Professionelle Einrichtung & Pflege aller DNS-Records (SPF, DKIM, DMARC) für maximale E-Mail-Zustellbarkeit',
      'Hohe Sicherheitsstandards: Verschlüsselter E-Mail-Transfer (TLS), Spam- & Virenfilter sowie DSGVO-konformer Betrieb mit Auftragsverarbeitungsvertrag',
      'Zero Maintenance: Vollständige Einrichtung, Wartung und technischer Support aus einer Hand',
    ],
    audience: [
      'Selbstständige und kleine Unternehmen, die noch mit Gmail- oder Provider-Adressen arbeiten',
      'Betriebe, deren Formular-Anfragen im Spam landen oder verloren gehen',
      'Vereine und Praxen, die E-Mails DSGVO-konform in Deutschland betreiben wollen',
      'Alle, die nach einem Webseiten-Relaunch auch ihre E-Mail sauber aufstellen wollen',
    ],
    facts: [
      { label: 'Dauer', value: 'in wenigen Tagen' },
      { label: 'Standort', value: 'Server in Deutschland' },
      { label: 'Umfang', value: 'Postfächer, Formulare & DNS' },
    ],
    partner: {
      name: 'Mailtory',
      text: 'Die E-Mail-Plattform hinter dem Paket – mit eigenen Servern in Deutschland, Ticketsystem und DSGVO-Werkzeugen.',
      href: 'https://www.mailtory.de/',
      linkLabel: 'mailtory.de',
    },
    faq: [
      {
        question: 'Kann ich meine bestehende Domain behalten?',
        answer:
          'Ja. Deine Domain bleibt, wo sie ist – ich passe nur die DNS-Einträge an, damit E-Mails über die neuen Postfächer laufen. Den Umstieg plane ich so, dass keine Mail verloren geht.',
      },
      {
        question: 'Was passiert mit meinen alten E-Mails?',
        answer:
          'Bestehende Postfächer können übernommen werden: Alte Nachrichten lassen sich aus deinem bisherigen Postfach importieren, sodass du alles an einem Ort hast.',
      },
      {
        question: 'Funktioniert das mit Outlook und dem Smartphone?',
        answer:
          'Ja. Die Postfächer arbeiten mit IMAP und SMTP und richten sich in Outlook, Apple Mail, Thunderbird sowie auf iPhone und Android weitgehend automatisch ein. Zusätzlich gibt es Webmail im Browser.',
      },
      {
        question: 'Warum landen meine Formular-Mails im Spam?',
        answer:
          'Meist fehlen SPF, DKIM oder DMARC, oder das Formular verschickt Mails direkt über den Webserver, der dafür keine gute Reputation hat. Beides behebe ich mit diesem Paket.',
      },
      {
        question: 'Kann ich das Paket ohne neue Webseite buchen?',
        answer:
          'Ja. Das Paket ist einzeln buchbar und funktioniert mit jeder Webseite und jeder Domain – egal, wer deine Seite gebaut hat.',
      },
    ],
  },
];

export const packages = offers.filter((offer) => offer.kind === 'package');
export const coreServices = offers.filter((offer) => offer.kind === 'service');

export function offerPath(offer: Offer): string {
  return `/leistungen/${offer.slug}/`;
}
