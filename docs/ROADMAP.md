# Bewusst offengelassen

Was hier steht, fehlt nicht aus Versehen. Es sind Punkte, die entweder eine
Entscheidung von außen brauchen (Zahlungsanbieter, Inhalte) oder erst mit echten
Nutzerzahlen sinnvoll zu bauen sind.

## Bezahlung

`SubscriptionService` kapselt die Plan-Logik bereits vollständig, aber es gibt
keine Belegprüfung. `POST /subscription/activate` mit `source: "DEV"` schaltet
Premium frei und ist außerhalb der Entwicklung gesperrt.

Zu ergänzen: StoreKit- und Play-Billing-Belege serverseitig verifizieren,
Server-to-Server-Benachrichtigungen für Verlängerung und Kündigung entgegennehmen,
und `premiumUntil` daraus fortschreiben. Die Aufrufstelle dafür ist
`SubscriptionService.activatePremium(userId, until, source)` – mehr muss sich
nicht ändern.

## Inhalte

Der Seed enthält Beispielmaterial: vier Vokabeldecks, drei Texte mit Übungen,
vier Mediathek-Einträge und 24 Einstufungsfragen für Englisch (plus drei für
Spanisch). Das zeigt die Struktur, ersetzt aber keine Redaktion.

**Die Lehrwerke Deutsch und Spanisch** stehen mit je 48 Kapiteln als Gerüst
bereit: je zwölf in Beginner, Intermediate und Advanced sowie zwölf im
Grammatikbuch. Titel, Untertitel, Beschreibung und Kann-Beschreibungen sind
formuliert. Ausgearbeitet sind bislang im Deutschband Beginner Kapitel 1 (fünf
Seiten) und Grammatik Kapitel 1 (drei Seiten), im Spanischband Beginner 1–3 (je
fünf Seiten) sowie Grammatik 1 und 2 (je drei Seiten) – zusammen 21 Seiten mit
72 Aufgaben. Die übrigen Kapitel sind auf `isPublished: false` gesetzt und
erscheinen in der App ausgegraut als „In Vorbereitung". Zum Ausarbeiten legt man
eine Datei nach dem Muster von
`prisma/seed/chapter-beginner-1.ts` an und trägt das Kapitel im `showcase` des
jeweiligen Eintrags in `WORKBOOKS` in `prisma/seed/workbook.ts` ein.

Die beiden Lehrpläne sind nicht übersetzt, sondern je Sprache gesetzt: Wo der
deutsche Band Fälle und Satzklammer ordnet, gibt der spanische ser/estar, die
Vergangenheitszeiten und den Subjuntivo vor. Die Seiten sind einsprachig in der
Zielsprache; Erklärkästen tragen eine aufklappbare Übersetzung in die
Muttersprache (Deutschband: `en`, `es`, `fr`, `it`; Spanischband: `de`).

Beim Schreiben gilt die Regel des neuen Aufbaus: Die Aufgabe steht direkt hinter
der Erklärung, zu der sie gehört – nicht gesammelt am Seitenende und erst recht
nicht in einem eigenen Übungskapitel.

Offen bleibt außerdem: Audioaufnahmen zu den Dialogen (die Blöcke tragen bereits
`audioUrl`), Bilder für `IMAGE`-Blöcke und ein zweisprachiges Glossar. Kapitel 1
ist einsprachig deutsch mit englischen Wortschatzglossen – für ein echtes
DaF-Produkt müssten die Glossen der Muttersprache des Lernenden folgen. Das Feld
`nativeLanguage` am Nutzer ist dafür schon da, die Oberfläche ist aber noch
durchgängig deutsch.

Nötig für den Betrieb:

- **Audiodateien.** Der offene Punkt der Mediathek: Die Sprechtexte aller zwölf
  Folgen (je vier auf Deutsch, Englisch und Spanisch) stehen in
  `prisma/seed/media-scripts.ts`, **die Aufnahmen selbst gibt es noch nicht**.
  `STATIC_DIR/audio` ist leer, jeder Abruf endet mit 404, und im Player bleibt
  der Abspielknopf ausgegraut – das ist der erwartete Zustand, kein Fehler in
  der Auslieferung. `npm run media:tts` erzeugt die Dateien; zwei Wege stehen
  offen (Einzelheiten in `static/README.md`):

  - `--provider openai` (Vorgabe): beste Qualität, braucht `OPENAI_API_KEY`.
  - `--provider windows`: kostenlos und offline über die installierten
    Windows-Stimmen, aber hörbar robotischer. Braucht je Sprache eine
    installierte Stimme und ffmpeg; `npm run media:tts -- --voices` zeigt, was
    davon vorhanden ist. Fehlt eine Sprache, bricht das Skript ab, statt auf
    eine Stimme der falschen Sprache auszuweichen.

  Synthetische Stimmen sind in beiden Fällen ein Platzhalter für echte
  Aufnahmen, keine Endfassung – für ein Produkt gehören Sprecherinnen und
  Sprecher ins Studio. Für die Produktion gehören die Dateien außerdem hinter
  ein CDN mit signierten URLs (`MEDIA_BASE_URL` auf die CDN-Adresse setzen),
  damit Premium-Inhalte nicht frei abrufbar sind.
- **Hörtexte im Lehrwerk.** Die `AUDIO`- und `DIALOGUE`-Blöcke der Buchseiten
  tragen ein Feld `audioUrl`, das noch nirgends gefüllt und in der App noch
  nicht abspielbar ist (siehe `AudioPlaceholder`). Derselbe Weg wie bei der
  Mediathek würde sich anbieten.
- **Redaktions-Backend.** Die Rolle `EDITOR` existiert im Datenmodell, es gibt
  aber noch keine Schreibendpunkte für Bibliothek und Mediathek. Ein CMS oder ein
  schlichtes Admin-Modul mit `@Roles('EDITOR')` würde reichen.
- **Weitere Sprachen.** Spanisch hat inzwischen 30 Vokabelstapel (1500 Wörter,
  A1–C2), ein Lehrwerksgerüst mit fünf ausgearbeiteten Kapiteln und vier
  Mediathek-Einträge, aber noch keine Bibliothekstexte. Französisch und
  Italienisch sind weiterhin nur angelegt, ohne Decks und Texte. Nur Englisch
  hat einen vollständigen Einstufungstest.

## Offline

Die App braucht durchgehend Verbindung. Für einen Vokabeltrainer ist das die
schwächste Stelle – gerade dort wird in der Bahn gelernt.

Sinnvoller Zuschnitt: die Lernwarteschlange und die Heftseiten lokal
zwischenspeichern (Query-Persister bzw. AsyncStorage), Bewertungen und
Canvas-Änderungen in eine Warteschlange schreiben und bei Verbindung
nachschicken. Das Datenmodell trägt das bereits: Bewertungen sind idempotent
genug, weil der Server aus dem gespeicherten Kartenzustand rechnet, und
Heftseiten werden ohnehin vollständig überschrieben.

## Handschrifterkennung

Die KI-Korrektur liest heute nur Textfelder, nicht die gezeichneten Striche. Das
ist im Code explizit so festgelegt (`extractPlainText`). Wer handgeschriebenen
Text korrigieren lassen will, müsste die Seite als Bild rendern und an ein
Vision-fähiges Modell schicken – die Bildeingabe ist in der Messages-API
vorhanden, es fehlt das Rendering auf dem Gerät und eine Entscheidung über die
Kosten pro Analyse.

## Weitere Punkte

- **E-Mail-Verifikation und Passwort-Zurücksetzen.** Kein Mailversand angebunden.
- **Push-Benachrichtigungen** für fällige Wiederholungen und die Streak.
- **Redis** ist in `docker-compose.yml` vorbereitet, wird aber noch nicht genutzt.
  Naheliegende erste Verwendung: verteiltes Rate-Limiting (aktuell im
  Prozessspeicher, funktioniert also nur bei einer Instanz) und Caching der
  Katalogabfragen.
- **Audio für Vokabeln.** `VocabItem.audioUrl` existiert, ist im Seed aber leer.
  Ohne diese Dateien ist der Modus `LISTENING` faktisch ein Auswahlmodus.
- **Test-Abdeckung.** Vorhanden: SM-2-Algorithmus und ein HTTP-Boot-Test über den
  gesamten Modulgraphen. Als Nächstes lohnen sich e2e-Tests gegen eine
  Testdatenbank für Auth-Rotation, Einstufungsauswertung und Übungsbewertung –
  also die Stellen, an denen der Server die Autorität hat.
- **Barrierefreiheit.** Rollen und Labels sind gesetzt, aber nicht mit
  Screenreader getestet. Der Canvas braucht eine Alternative für Nutzende, die
  nicht zeichnen können.
