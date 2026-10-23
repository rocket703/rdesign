---
title: "Startplatzboerse.com"
subtitle: "Marktplatz für Startplätze bei Läufen, Radrennen, Triathlon und Hyrox – mit Login ohne Passwort, eigenem Dashboard und Chat zwischen Käufer und Verkäufer."
customerUrl: "https://startplatzboerse.com/"
image: "/images/startplatzboerse.webp"
imageMobile: "/images/startplatzboerse-mobile.webp"
mobileNote: "Mobil optimiert: Auf dem Smartphone werden die beiden Hauptaktionen zu großen, daumenfreundlichen Buttons, und die Kennzahlen rücken in eine kompakte Leiste."
techStack: ["Astro", "Supabase", "PostgreSQL", "Resend", "Vercel", "Tailwind CSS"]
seoTitle: "Startplatzbörse – Fullstack Web-App | r³webdesign"
seoDesc: "Referenz: Startplatzbörse – selbst entwickelte Web-App zum Weitergeben von Startplätzen, mit Login per Code, Dashboard für Inserate und Chat."
status: "Online"
category: "Online-Plattform"
relatedOffer: "webentwicklung"
biome: "technical"
tasks:
  - "Entwicklung einer hochperformanten Fullstack-Applikation auf Basis von Astro."
  - "Infrastruktur-Setup mit Vercel für Server-Side Rendering (SSR) und Edge-Performance."
  - "Implementierung eines passwortlosen OTP-Login-Systems (Resend & Supabase Auth)."
  - "Aufbau einer relationalen Datenbankstruktur in Supabase (PostgreSQL)."
  - "Entwicklung eines interaktiven User-Dashboards zur Verwaltung von Inseraten."
  - "Integration eines On-Plattform Chatsystems für die direkte Kommunikation zwischen Nutzern."
  - "Kontinuierliche Erweiterung der Kernfunktionen."
theme:
  bg: "#262c2f"
  text: "#ffffff"
  muted: "#a3adb2"
  accent: "#00bcd4"
  accentText: "#041016"
  button: { bg: "#00bcd4", text: "#041016", radius: "14px", weight: 800, tracking: "-0.02em", shadow: "0 8px 18px rgba(0, 188, 212, 0.22)" }
---

### Ausgangslage

Wer für einen Lauf, ein Radrennen, einen Triathlon oder Hyrox angemeldet ist und dann doch nicht starten kann, sucht einen Nachfolger für seinen Startplatz. Bisher passiert das meist in unübersichtlichen Facebook-Gruppen und Messenger-Chats – ohne Überblick, ohne Schutz und oft mit viel Hin und Her.

### Was ich gebaut habe

Die **Startplatzbörse** ist ein Marktplatz genau dafür. Die Anmeldung läuft **ohne Passwort**: Man gibt seine E-Mail-Adresse ein und bekommt einen Code zugeschickt. Im eigenen **Dashboard** erstellen Nutzer Inserate, bearbeiten sie und sehen jederzeit, wie der Stand ist. Käufer und Verkäufer klären alle Details im **Chat direkt auf der Plattform** – die private Handynummer muss niemand herausgeben.

Die Plattform habe ich komplett allein entwickelt – Design, Oberfläche, Datenbank, Login und Chat, alles aus einer Hand. Die Login-Mails verschickt der deutsche Dienst Mailtory.

### Was die Nutzer davon haben

- **Einfacher Einstieg:** Kein Passwort, das man sich merken muss – E-Mail eingeben, Code eintippen, fertig.
- **Übersicht statt Gruppen-Chaos:** Alle Angebote an einem Ort statt in zig Gruppen.
- **Privatsphäre:** Die Abstimmung läuft im Chat der Plattform, nicht über private Nummern.
- **Schnell auf jedem Gerät:** Auf dem Smartphone werden die Hauptaktionen zu großen Buttons, die Seite lädt zügig.

### Wie es weitergeht

Als Nächstes kommt ein **Bezahlsystem direkt auf der Plattform**. Dann laufen nicht nur die Absprachen, sondern auch die Zahlung geschützt über die Startplatzbörse.
