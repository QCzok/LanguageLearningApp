# Lingua – Lernplattform für Sprachlernende

Monorepo aus React-Native-App (Expo), NestJS-Backend und PostgreSQL.

```
LanguageApp/
├── packages/shared/   Gemeinsame Typen, CEFR-Logik, SM-2-Algorithmus, Heft-Format
├── backend/           NestJS + Prisma + PostgreSQL + Anthropic-API
├── mobile/            React Native (Expo)
└── docker-compose.yml PostgreSQL + Redis für die Entwicklung
```

Der Kern der Idee: Alles, was App und Server gleich verstehen müssen – das
Datenformat des Lernhefts, der Wiederholungsalgorithmus, die Niveaustufen und der
komplette API-Vertrag – liegt in `packages/shared`. Beide Seiten importieren
dieselben Typen, ein Vertragsbruch fällt beim Kompilieren auf, nicht zur Laufzeit.

## Schnellstart

Voraussetzung: Node ≥ 20.11. Für die App zusätzlich Expo Go auf dem Telefon oder
ein Emulator.

Die Datenbank läuft **portabel im Projekt** unter `.tools/` – kein Windows-Dienst,
kein Adminrecht, keine Registry-Einträge. Zum restlosen Entfernen genügt es, den
Ordner `.tools` zu löschen.

```bash
npm install                      # alle Workspaces
npm run shared:build             # geteiltes Paket bauen (Backend und App hängen daran)
cp backend/.env.example backend/.env

npm run db:init                  # Datenverzeichnis anlegen (einmalig)
npm run db:migrate               # Schema anlegen
npm run backend:seed             # Demo-Inhalte einspielen

npm run backend:dev              # API auf http://localhost:3000/api/v1
npm run mobile:start             # Expo-Entwicklungsserver
```

Oder in einem Rutsch: `npm run bootstrap`.

### Datenbank steuern

| Befehl                | Wirkung                                       |
| --------------------- | --------------------------------------------- |
| `npm run db:start`    | PostgreSQL starten (nach jedem PC-Neustart)   |
| `npm run db:stop`     | anhalten                                      |
| `npm run db:status`   | Laufzustand anzeigen                          |
| `npm run db:psql`     | SQL-Konsole öffnen                            |
| `npm run db:init`     | einmalige Erstinitialisierung                 |

Die Datenbank startet **nicht** automatisch mit Windows – vor dem Backend also
`npm run db:start` ausführen. Wer lieber Docker nutzt: `docker-compose.yml` ist
weiterhin da, `npm run db:up` startet den Container stattdessen.

> **Hinweis zur Windows-Einrichtung:** Die PostgreSQL-Serverbinaries brauchen die
> Visual-C++-Runtime. Ist sie nicht systemweit installiert, liegen
> `vcruntime140.dll`, `vcruntime140_1.dll` und `msvcp140.dll` app-lokal neben den
> Binaries in `.tools/pgsql/bin` – von Microsoft für genau diesen Fall vorgesehen.
> Wird `.tools` neu aufgesetzt, müssen diese drei Dateien wieder dorthin.

**Demo-Konten nach dem Seed**

| Konto                 | Passwort      | Plan    |
| --------------------- | ------------- | ------- |
| `demo@lingua.app`     | `Passwort123` | Free    |
| `premium@lingua.app`  | `Passwort123` | Premium |

**Swagger:** http://localhost:3000/api/v1/docs (nur außerhalb von Produktion)

### App auf einem echten Gerät

`mobile/app.json` → `extra.apiUrl` zeigt auf `localhost`. Auf einem Telefon muss
dort die LAN-IP des Entwicklungsrechners stehen, z. B.
`http://192.168.1.42:3000/api/v1`.

### KI-Funktionen

Ohne `ANTHROPIC_API_KEY` startet der Server normal, die KI-Routen antworten mit
`503`. Mit Schlüssel in `backend/.env` sind Korrektur, Chat, Grammatikerklärungen
und Empfehlungen aktiv. Modell und Kontingente sind über `AI_MODEL`,
`AI_FREE_MONTHLY_LIMIT` und `AI_PREMIUM_MONTHLY_LIMIT` einstellbar.

## Funktionsumfang

**Profil & Onboarding** – keine Registrierung: Wer die App öffnet, wählt Namen
und Tier-Icon, und das Konto dahinter legt die App still an (`/auth/guest`,
Argon2id und rotierende Refresh-Tokens wie zuvor). Einrichten in vier Schritten:
Profil, Lernsprache, Niveau – entweder über den Einstufungstest (24 Fragen von
A1 bis C2, stufenweise Auswertung) oder selbst gewählt – und los. Das Gerät
verwahrt die Zugangsdaten; beim nächsten Start wählt man sein Profil aus einer
Liste, auf einem Gerät können also mehrere Lernende eines haben. Mehrere
Lernsprachen pro Profil, genau eine davon aktiv.

**Vokabeltrainer** – Decks nach Sprache und Niveau, fünf Lernmodi (Lernkarte,
Auswahl, Eintippen, Hören, Zuordnen) und ein SM-2-Wiederholungssystem. Die
Intervallberechnung läuft serverseitig, die App schickt nur die Bewertung.
Statistik mit Statusverteilung, Trefferquote und 7-Tage-Verlauf.

**Digitales Lehrwerk** – Vier Bücher in einem Regal: **Beginner**,
**Intermediate** und **Advanced** mit je zwölf Kapiteln entlang des Könnens,
dazu ein **Grammatikbuch** mit zwölf Kapiteln quer dazu, eines je Thema. Die
GER-Stufen stecken weiter in den Daten – je zwei bilden ein Buch –, ordnen aber
nicht mehr die Navigation: Man nimmt ein Buch und schlägt es auf, das Buch weiß
selbst, auf welcher Seite es weitergeht.

Auf einer Seite folgt die **Übung direkt auf die Erklärung**, zu der sie gehört:
erst der Kasten zu „du oder Sie?", zwei Zeilen weiter die Frage, wie man die
Chefin anspricht. Eine Trennung in Kursbuch und Arbeitsbuch gibt es nicht mehr –
sie zwang dazu, für jede Aufgabe in einen anderen Teil zurückzublättern.

Eine Seite wird als **Buchseite** dargestellt, nicht als Bildschirmliste:
Papierfläche mit Rand und Schatten, Kolumnentitel mit Buch, Kapitel und Niveau,
Seitenzahl und Blätterpfeile in der Fußzeile, Serifenschrift im Fließtext,
nummerierte Aufgaben und Lücken als Schreiblinien. Die Seite fließt in der
Breite des Geräts und ist in echten Gerätepunkten gesetzt – kein Zoom, kein
seitliches Schieben.

Darüber liegt die **Werkzeugleiste**. Ohne Werkzeug in der Hand lässt sie Tipp-
und Auswahlfelder durch, sodass Aufgaben ausgefüllt werden; Stift, Marker oder
Radierer legen eine Zeichenebene exakt über die Seite. Notizen werden pro Seite
gespeichert. Daneben bleiben freie Notizhefte erhalten.

Die Aufgaben sind blockbasiert und einzeln prüfbar: Lückentext mit Wortkasten,
Einfach- und Mehrfachauswahl, Zuordnung, Reihenfolge und freie Schreibaufgaben.
Premium: Die KI korrigiert geschriebene Texte und erklärt jeden Fehler.

**Bibliothek** – Artikel und Kurzgeschichten mit Filter nach Sprache, Niveau, Typ
und Volltextsuche. Lesefortschritt wird beim Scrollen gesichert;
Verständnisfragen (Auswahl, Richtig/Falsch, offen) werden serverseitig
ausgewertet – Lösungen verlassen den Server erst nach der Abgabe.

**Mediathek** – eine kuratierte Auswahl fremder YouTube-Videos zur Lernsprache,
gefiltert nach Niveau, Thema und danach, ob langsam gesprochen wird. Abgespielt
wird eingebettet in der App; die Sehposition wird laufend gesichert. Der Katalog
ist erzeugt (`npm run videos:refresh`), nicht von Hand gepflegt; `npm run
videos:seed` schreibt ihn in eine Datenbank, ohne den übrigen Seed anzufassen.

**KI (Premium)** – Gespräche und Diskussionen auf dem eigenen Niveau,
Textkorrektur im Lernheft, Erklärungen zu Grammatik und Vokabeln sowie
Empfehlungen, die aus dem echten Lernstand berechnet werden.

**Fortschritt** – Tagesziel, XP, Streak und Wochenverlauf; ein Dashboard-Aufruf
liefert alles, was der Startbildschirm braucht.

## Architekturentscheidungen

**Geteilte Fachlogik statt doppelter Implementierung.** Der SM-2-Algorithmus
liegt in `packages/shared/src/srs.ts` als reine Funktion. Das Backend rechnet
damit autoritativ, die App kann dieselbe Funktion für optimistische Vorschauen
nutzen – ohne dass die beiden Ergebnisse auseinanderlaufen können.

**Der Server ist die Autorität über den Lernstand.** Bewertungen, Testergebnisse
und Übungsauswertungen werden serverseitig berechnet. Die App schickt Antworten,
keine Punktzahlen.

**Versioniertes Heftformat.** Eine Seite ist ein Array aus Elementen mit
`version`-Feld (`packages/shared/src/notebook.ts`), gespeichert als JSONB. Das
Format ist renderer-unabhängig; ein Wechsel von SVG auf Skia oder ein
Web-Client ändert nichts an den Daten.

**Lösungen verlassen den Server nie ungefragt.** Aufgabenblöcke tragen ihre
Lösung im gespeicherten Inhalt; `stripSolutions` entfernt sie auf jedem Weg nach
außen und mischt dabei Reihenfolge-Aufgaben, damit die Ausgangsfolge nicht schon
die Antwort ist. Gemischt wird deterministisch aus der Block-ID – die Reihenfolge
bleibt über Requests stabil, sonst würden gespeicherte Antworten nicht mehr
passen. Erst eine Prüfung liefert Lösung und Erklärung zurück.

**Premium als Guard, nicht als Sonderfall.** `@RequiresPremium()` antwortet mit
`402 Payment Required` statt `403`, damit die App gezielt den Upgrade-Screen
öffnen kann statt einer generischen Fehlermeldung.

**Prompt-Caching als Strukturvorgabe.** Der Tutor-Systemprompt ist unveränderlich
und steht immer zuerst mit einem Cache-Breakpoint; alles Variable (Niveau,
Sprache, Nutzertext) kommt dahinter. Details in `backend/src/modules/ai/prompts.ts`.

**Strukturierte KI-Antworten.** Korrektur, Grammatikerklärung und Empfehlungen
laufen über Zod-Schemas als Output-Format der Messages-API
(`backend/src/modules/ai/ai.schemas.ts`). Das Schema ist gleichzeitig Prompt und
Laufzeitvalidierung – der Service muss die Antwort nicht defensiv prüfen.

## Entwicklung

```bash
npm test                                    # alle Workspaces
npm run test -w @lingua/backend             # Unit- und Boot-Tests
npx tsc --noEmit -p backend/tsconfig.json   # Typprüfung Backend
npx tsc --noEmit -p mobile/tsconfig.json    # Typprüfung App
npm run prisma:studio -w @lingua/backend    # Datenbank ansehen
```

Nach Änderungen in `packages/shared` muss `npm run shared:build` laufen – beide
Anwendungen binden das gebaute Paket ein, nicht die Quellen.

`mobile/metro.config.js` macht die Monorepo-Auflösung explizit: Der Workspace-
Stamm wird beobachtet (dort liegen `@lingua/shared` und das gehobene
`node_modules`), und `disableHierarchicalLookup` verhindert, dass Metro eine
zweite Kopie von React einsammelt. Der Bundle-Einstieg liegt dadurch unter
`/mobile/index.bundle`.

Weitere Dokumente:

- [`docs/API.md`](docs/API.md) – Endpunktübersicht
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – Modulschnitt und Datenfluss
- [`docs/ROADMAP.md`](docs/ROADMAP.md) – bewusst offengelassene Punkte

## Stand

Fertig und geprüft: Datenmodell, alle Backend-Module, die komplette App, 40
automatisierte Tests (SM-2-Algorithmus, Aufgabenauswertung des Lehrwerks und
HTTP-Boot-Test über den gesamten Modulgraphen), Typprüfung und Produktionsbuild
beider Seiten.

Gegen eine echte PostgreSQL-Instanz durchgespielt: Migration, Seed, Registrierung
inklusive Fehlerfällen, Login, Token-Guard, Einstufungstest mit korrekter
stufenweiser Auswertung, SRS-Bewertung in beide Richtungen, Übungsauswertung,
Lesefortschritt, Speichern und Zurücklesen einer Lehrwerksseite mit Strichen,
Marker und Text, Premium-Sperre (402) und das Verhalten ohne KI-Schlüssel (503).
Für das Lehrwerk zusätzlich: Auslieferung ohne Lösungslecks, Zwischenprüfung
einzelner Aufgaben, Abgabe einer ganzen Einheit mit XP-Vergabe nur beim ersten
Abschluss, stabile Mischung der Reihenfolge-Aufgaben und die Notizebene.

Nicht enthalten, weil bewusst offengelassen: die Anbindung an StoreKit und Google
Play Billing (der Premium-Knopf im Profil ist ein Entwicklungsplatzhalter) und ein
Redaktions-Backend für Inhalte. Siehe
[`docs/ROADMAP.md`](docs/ROADMAP.md).
