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

**Das Lehrwerk Deutsch** steht mit 36 Kapiteln (A1–C2, je sechs) als Gerüst
bereit: Titel, Untertitel, Beschreibung und Kann-Beschreibungen sind formuliert,
Inhalte hat bislang nur A1 Kapitel 1 (vier Kursbuch- und fünf
Arbeitsbucheinheiten). Die übrigen 35 sind auf `isPublished: false` gesetzt und
erscheinen in der App ausgegraut als „In Vorbereitung". Zum Ausarbeiten legt man
eine Datei nach dem Muster von `prisma/seed/chapter-a1-1.ts` an und veröffentlicht
das Kapitel in `prisma/seed/workbook.ts`.

Offen bleibt außerdem: Audioaufnahmen zu den Dialogen (die Blöcke tragen bereits
`audioUrl`), Bilder für `IMAGE`-Blöcke und ein zweisprachiges Glossar. Kapitel 1
ist einsprachig deutsch mit englischen Wortschatzglossen – für ein echtes
DaF-Produkt müssten die Glossen der Muttersprache des Lernenden folgen. Das Feld
`nativeLanguage` am Nutzer ist dafür schon da, die Oberfläche ist aber noch
durchgängig deutsch.

Nötig für den Betrieb:

- **Audiodateien.** Die Mediathek-Einträge zeigen auf `MEDIA_BASE_URL`, dort
  liegen noch keine Dateien. Für die Produktion gehören sie hinter ein CDN mit
  signierten URLs, damit Premium-Inhalte nicht frei abrufbar sind.
- **Redaktions-Backend.** Die Rolle `EDITOR` existiert im Datenmodell, es gibt
  aber noch keine Schreibendpunkte für Bibliothek und Mediathek. Ein CMS oder ein
  schlichtes Admin-Modul mit `@Roles('EDITOR')` würde reichen.
- **Weitere Sprachen.** Spanisch, Französisch und Italienisch sind angelegt, aber
  ohne Decks und Texte. Nur Englisch hat einen vollständigen Einstufungstest.

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
