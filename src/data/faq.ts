export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Was kostet eine professionelle Webseite in Magdeburg?',
    answer:
      'Aktuell suche ich spannende private Projekte, um mein Portfolio gezielt zu erweitern. Wenn dein Vorhaben inhaltlich passt, finden wir eine faire, transparente Lösung, die zu Umfang und Ziel passt.',
  },
  {
    question: 'Wie lange dauert die Umsetzung einer neuen Homepage?',
    answer:
      'Kleine bis mittlere Projekte dauern oft 2 bis 6 Wochen. Bei komplexeren Anforderungen planen wir in klaren Etappen, damit du früh Ergebnisse siehst und Feedback geben kannst.',
  },
  {
    question: 'Machst du nur Design oder auch Entwicklung und SEO?',
    answer:
      'Beides. Von UX/UI-Design über Entwicklung bis technisches SEO, Performance und Deployment. Ziel ist eine Seite, die nicht nur gut aussieht, sondern auch gefunden wird.',
  },
  {
    question: 'Kann ich meine Webseite später selbst pflegen?',
    answer:
      'Ja. Auf Wunsch bekommst du ein Setup, mit dem Inhalte einfach aktualisiert werden können. Außerdem gibt es eine kurze Einweisung oder laufende Betreuung, wenn du es abgeben willst.',
  },
  {
    question: 'Arbeitest du nur in Magdeburg oder auch remote?',
    answer:
      'Beides. Viele Projekte laufen komplett remote — Briefing per Video, Umsetzung digital. Für Kunden in Magdeburg und Umgebung treffe ich mich gern persönlich zum Kick-off.',
  },
  {
    question: 'Was unterscheidet deine Seiten von Baukasten-Anbietern?',
    answer:
      'Kein Theme von der Stange: individuelles Layout, Code den du besitzt, und Performance die du messen kannst. Keine monatliche Baukasten-Miete für das, was du eigentlich einmal sauber gebaut haben willst.',
  },
  {
    question: 'Welchen Tech-Stack setzt du ein — und warum?',
    answer:
      'Meist Astro fürs Frontend — schnell, wenig JavaScript, gut für SEO. Braucht das Projekt Login, Datenbank oder Echtzeit? Dann kommen Supabase, SSR oder APIs dazu. Immer passend zum Vorhaben, nicht passend zum Hype.',
  },
];
