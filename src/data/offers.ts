import type { FaqItem } from './faq';

export type OfferIcon = 'search' | 'refresh' | 'access' | 'layout' | 'code';

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
  faq: FaqItem[];
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
];

export const packages = offers.filter((offer) => offer.kind === 'package');
export const coreServices = offers.filter((offer) => offer.kind === 'service');

export function offerPath(offer: Offer): string {
  return `/leistungen/${offer.slug}/`;
}
