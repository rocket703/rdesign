---
title: "Mailtory & Systory"
subtitle: "Komplettes Redesign des Frontends einer Plattform für Vereine – Vereinsverwaltung, E-Mail mit eigenen Domains und Messenger an einem Ort. Geplant für das 1. Quartal 2027."
customerUrl: "https://www.mailtory.de/"
image: "/images/mailtory.webp"
imageMobile: "/images/mailtory-mobile.webp"
mobileNote: "Die Screenshots zeigen den aktuellen Stand vor dem Redesign. Nach dem Launch im 1. Quartal 2027 ergänze ich hier das neue Design."
techStack: ["PHP", "PostgreSQL", "JavaScript", "React Native", "Expo", "nginx", "LiveKit", "Matrix", "WireGuard", "Forgejo"]
seoTitle: "Mailtory & Systory – Plattform für Vereine | r³webdesign"
seoDesc: "Referenz: r³webdesign gestaltet das Frontend von Mailtory & Systory komplett neu – Plattform für Vereine mit Vereinsverwaltung, E-Mail-Hosting und Messenger. Launch im 1. Quartal 2027."
status: "Redesign geplant (Q1 2027)"
category: "Vereinsplattform"
relatedOffer: "relaunch"
biome: "technical"
tasks:
  - "Komplettes Redesign des Frontends durch r³webdesign, abgestimmt mit dem Betreiber."
  - "Neues Design für Vereinsverwaltung, E-Mail und Messenger als zusammenhängende Plattform."
  - "Launch geplant für das 1. Quartal 2027."
theme:
  bg: "#0c0e17"
  text: "#e2e8f0"
  muted: "#8b949e"
  accent: "#6366f1"
  accentText: "#ffffff"
  button: { bg: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)", text: "#ffffff", radius: "100px", weight: 600, shadow: "0 4px 20px rgba(99, 102, 241, 0.35)" }
---

**Das Projekt:**
Gemeinsam mit dem Betreiber habe ich vereinbart, das Frontend von Mailtory und Systory komplett neu zu gestalten. Das Redesign kommt von mir, Dustin Rose von r³webdesign, und ist für das erste Quartal 2027 geplant. Die Plattform selbst – Funktionen, Technik und Infrastruktur – bleibt die Grundlage, auf der das neue Design aufsetzt.

**Die Plattform:**
**Systory** ist eine Plattform für Vereine und kleine Organisationen. Sie bündelt Vereinsverwaltung, E-Mail, Kommunikation und Dokumente an einem Ort. **Mailtory** ist der dazugehörige E-Mail- und Domain-Dienst, **Chattory** der integrierte Messenger.

**Funktionen:**
Vereine verwalten in Systory Mitglieder und Gruppen, legen Dokumente im Dokumentensafe ab, erstellen Formulare und bearbeiten Anfragen über Tickets – bis hin zum Vereinsnachweis für die Gemeinnützigkeit. Mailtory liefert E-Mail-Hosting mit eigenen Domains, Postfächern und Aliasen, inklusive DNS-Verwaltung mit DKIM, SPF, DMARC und MTA-STS. In Chattory chatten Vereine in Gruppen, teilen Anhänge und Sprachnachrichten und telefonieren per Audio und Video. Über ein Add-on-System schalten Vereine einzelne Module frei, mit eigenen Plänen und Abrechnung; ein Admin-Bereich bündelt Support, DNS, Domains und Monitoring.

**Technik:**
Das Backend ist in **PHP ohne Framework** geschrieben – mit eigenen Seiten, Bibliotheken und eigenem Routing – und speichert in **PostgreSQL**. Das Frontend wird serverseitig gerendert, mit eigenem CSS und Vanilla-JavaScript für eine AJAX-Navigation ohne SPA-Framework, im Hell- und Dunkelmodus. Dazu kommt eine **Mobile App mit React Native und Expo** (TypeScript), teils mit nativen Android-Modulen für Ende-zu-Ende-Verschlüsselung und SIP-Telefonie. Chattory gibt es zusätzlich als eigenständigen Web-Client, der sich per OIDC über Systory als eigenen Identity Provider anmeldet.

**Infrastruktur:**
Für Echtzeit sorgen LiveKit (Anrufe), coturn und Matrix (Benachrichtigungen und Alarme). Der Mail-Stack läuft mit Postfix, Dovecot und Rspamd auf mehreren Servern, DNS mit PowerDNS samt DNSSEC. Dazu kommen nginx, WireGuard, CrowdSec und fail2ban, Backups mit Restic, Speicher über S3 und Cron-Jobs für Hintergrundaufgaben. Entwickelt wird auf einem eigenen Forgejo mit CI-Runnern und Android-Builds.

**Umfang:**
Rund 340 Seiten, 160 Bibliotheksdateien, 77 Cron-Jobs und etwa 950.000 Zeilen PHP. 54 aktive Add-ons stehen zur Auswahl; aktuell nutzen 165 Vereine mit 272 Nutzern und 220 Domains die Plattform.

**Ausblick: Launch im 1. Quartal 2027**
Die Screenshots auf dieser Seite zeigen den aktuellen Stand vor dem Redesign. Nach dem Launch ergänze ich die Referenz um das neue Design.
