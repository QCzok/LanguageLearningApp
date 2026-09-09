# API-Referenz

Basis-URL: `http://localhost:3000/api/v1`
Interaktive Fassung (nur außerhalb von Produktion): `/api/v1/docs`

Alle Routen sind standardmäßig geschützt (`Authorization: Bearer <accessToken>`).
Öffentlich sind nur die unten als **öffentlich** markierten.

## Fehlerformat

Jeder Fehler kommt in derselben Form:

```json
{
  "statusCode": 402,
  "error": "PremiumRequired",
  "message": "Diese Funktion ist Teil von Lingua Premium.",
  "path": "/api/v1/ai/grammar",
  "timestamp": "2025-09-08T12:00:00.000Z"
}
```

`error` ist der maschinenlesbare Teil. Die App wertet aus:

| `error`            | Status | Bedeutung                                    |
| ------------------ | ------ | -------------------------------------------- |
| `PremiumRequired`  | 402    | Upgrade-Screen öffnen                        |
| `AiQuotaExceeded`  | 429    | Kontingent aufgebraucht                      |
| `Conflict`         | 409    | z. B. E-Mail bereits vergeben                |
| `NotFound`         | 404    | Datensatz existiert nicht                    |

Bei Validierungsfehlern ist `message` ein Array mit einer Meldung je Feld.

## Auth

| Methode | Pfad                    | Beschreibung |
| ------- | ----------------------- | ------------ |
| POST    | `/auth/register`        | **öffentlich** · Konto anlegen, liefert Tokens + Nutzer. 5 Versuche/Min. |
| POST    | `/auth/login`           | **öffentlich** · Anmelden. 10 Versuche/Min. |
| POST    | `/auth/refresh`         | **öffentlich** · Neues Token-Paar. Der alte Refresh-Token wird entwertet. |
| POST    | `/auth/logout`          | **öffentlich** · Refresh-Token entwerten. |
| POST    | `/auth/change-password` | Passwort ändern; beendet alle Sitzungen. |

Wiederverwendung eines bereits entwerteten Refresh-Tokens beendet **alle**
Sitzungen des Kontos – das ist die Reaktion auf einen möglichen Tokendiebstahl.

## Nutzer & Onboarding

| Methode | Pfad                                       | Beschreibung |
| ------- | ------------------------------------------ | ------------ |
| GET     | `/users/me`                                | Profil inkl. aller Lernprofile |
| PATCH   | `/users/me`                                | Name, Avatar, Muttersprache |
| GET     | `/users/me/learning-profiles`              | Alle Lernsprachen |
| POST    | `/users/me/learning-profiles`              | Sprache + Niveau festlegen (aktiviert sie) |
| POST    | `/users/me/learning-profiles/:id/activate` | Lernsprache wechseln |
| POST    | `/users/me/complete-onboarding`            | Onboarding abschließen |
| DELETE  | `/users/me`                                | Konto und alle Daten löschen |
| GET     | `/languages`                               | **öffentlich** · Verfügbare Sprachen |

Genau ein Lernprofil ist aktiv. Alle sprachabhängigen Endpunkte benutzen es als
Standard, wenn kein `languageId`-Parameter mitkommt.

## Einstufungstest

| Methode | Pfad                             | Beschreibung |
| ------- | -------------------------------- | ------------ |
| GET     | `/placement/test?languageId=…`   | Fragen ohne Lösungen, nach Niveau sortiert |
| POST    | `/placement/submit`              | Auswertung; setzt das Niveau im Lernprofil |
| GET     | `/placement/history`             | Frühere Einstufungen |

Auswertung: Ein Niveau gilt ab 60 % korrekter Antworten als bestanden. Ergebnis
ist die höchste Stufe, die zusammen mit allen darunterliegenden bestanden wurde –
ein Zufallstreffer auf C1 hebt die Einstufung also nicht an, wenn B1 durchfällt.

## Vokabeltrainer

| Methode | Pfad                          | Beschreibung |
| ------- | ----------------------------- | ------------ |
| GET     | `/vocabulary/decks`           | Decks inkl. Lernfortschritt. Filter: `languageId`, `level` |
| GET     | `/vocabulary/decks/:id`       | Deck mit allen Vokabeln |
| POST    | `/vocabulary/decks`           | Eigenes Deck anlegen |
| DELETE  | `/vocabulary/decks/:id`       | Eigenes Deck löschen |
| POST    | `/vocabulary/decks/:id/items` | Vokabel hinzufügen |
| DELETE  | `/vocabulary/items/:id`       | Vokabel löschen |
| GET     | `/vocabulary/review/queue`    | Lernwarteschlange. Filter: `deckId`, `level`, `mode`, `limit`, `newLimit` |
| POST    | `/vocabulary/review`          | Karte bewerten (`grade` 0–5) |
| GET     | `/vocabulary/stats`           | Statusverteilung, Trefferquote, 7-Tage-Verlauf |

Die Warteschlange liefert zuerst fällige, dann neue Karten. Für Auswahlmodi
kommen die Distraktoren aus denselben Decks mit; die korrekte Antwort steht in
`correctChoiceIndex`. Beim ersten Ausliefern einer neuen Karte wird ihr
Fortschrittseintrag angelegt – ein Abbruch der Sitzung verliert also nichts.

## Lernheft

| Methode | Pfad                                   | Beschreibung |
| ------- | -------------------------------------- | ------------ |
| GET     | `/notebooks`                           | Alle Hefte |
| POST    | `/notebooks`                           | Heft anlegen (inkl. erster Seite) |
| PATCH   | `/notebooks/:id`                       | Titel, Farbe, Sprache |
| DELETE  | `/notebooks/:id`                       | Heft mit allen Seiten löschen |
| GET     | `/notebooks/:id/pages`                 | Seiten eines Hefts |
| POST    | `/notebooks/:id/pages`                 | Seite anlegen |
| POST    | `/notebooks/:id/pages/reorder`         | Reihenfolge ändern |
| GET     | `/notebooks/pages/:pageId`             | Seite mit Canvas-Inhalt |
| PATCH   | `/notebooks/pages/:pageId`             | Inhalt speichern (Autosave) |
| DELETE  | `/notebooks/pages/:pageId`             | Seite löschen |
| POST    | `/notebooks/pages/:pageId/analyze`     | **Premium** · KI-Korrektur |
| GET     | `/notebooks/pages/:pageId/analyses`    | **Premium** · Frühere Korrekturen |

`content` folgt `NotebookPageContent` aus `@lingua/shared`. Grenzen: 5 000
Elemente pro Seite, 10 000 Punkte pro Strich. Ein Heft behält immer mindestens
eine Seite.

## Bibliothek

| Methode | Pfad                                 | Beschreibung |
| ------- | ------------------------------------ | ------------ |
| GET     | `/library`                           | Filter: `level`, `type`, `tag`, `search`, `page`, `pageSize` |
| GET     | `/library/:id`                       | Text und Übungen – **ohne** Lösungen |
| PUT     | `/library/:id/progress`              | Lesefortschritt (`progressPercent`, `minutesRead`) |
| POST    | `/library/:id/exercises/submit`      | Antworten abgeben; Antwort enthält Lösungen und Erklärungen |
| GET     | `/library/:id/attempts`              | Frühere Versuche |

Offene Fragen zählen nicht in die Trefferquote – sie werden zur Selbstkontrolle
bzw. über die KI ausgewertet. Ab 95 % gilt ein Text als gelesen.

## Mediathek

| Methode | Pfad                    | Beschreibung |
| ------- | ----------------------- | ------------ |
| GET     | `/media`                | Filter wie in der Bibliothek |
| GET     | `/media/:id`            | Details inkl. Audio-URL und Transkript |
| PUT     | `/media/:id/progress`   | Abspielposition sichern |

Ab 90 % der Laufzeit gilt eine Folge als gehört; XP gibt es nur beim ersten Mal.

## KI

| Methode | Pfad                                          | Beschreibung |
| ------- | --------------------------------------------- | ------------ |
| GET     | `/ai/quota`                                   | Verbrauch des laufenden Monats |
| GET     | `/ai/conversations`                           | **Premium** · Gespräche |
| POST    | `/ai/conversations`                           | **Premium** · Gespräch oder Diskussion starten |
| GET     | `/ai/conversations/:id/messages`              | **Premium** · Verlauf |
| DELETE  | `/ai/conversations/:id`                       | **Premium** · Gespräch löschen |
| POST    | `/ai/conversations/:id/messages`              | **Premium** · Nachricht senden (20/Min.) |
| POST    | `/ai/conversations/:id/messages/stream`       | **Premium** · Antwort als SSE-Stream |
| POST    | `/ai/grammar`                                 | **Premium** · Grammatik/Vokabeln erklären (15/Min.) |
| GET     | `/ai/recommendations`                         | **Premium** · Lernempfehlungen (10/5 Min.) |

Der SSE-Stream sendet `{"type":"delta","text":"…"}` je Teilstück und zum Schluss
`{"type":"done","message":{…}}`. Fehler kommen als `event: error`. Gespeichert
wird erst die vollständige Antwort – ein Abbruch hinterlässt keinen Torso.

## Fortschritt & Abo

| Methode | Pfad                       | Beschreibung |
| ------- | -------------------------- | ------------ |
| GET     | `/progress/dashboard`      | Alles für den Startbildschirm in einem Aufruf |
| GET     | `/progress/history?days=30`| Tagesaktivität |
| GET     | `/subscription/status`     | Plan und freigeschaltete Funktionen |
| POST    | `/subscription/activate`   | Premium aktivieren (Store-Beleg; `DEV` nur außerhalb von Produktion) |
| POST    | `/subscription/cancel`     | Premium beenden |
| GET     | `/health`                  | **öffentlich** · Liveness und Datenbankcheck |

## Arbeitsbuch (Lernheft)

| Methode | Pfad                                | Beschreibung |
| ------- | ----------------------------------- | ------------ |
| GET     | `/workbook/chapters`                | Kapitel inkl. Fortschritt. Filter: `languageId`, `level`, `includeUnpublished` |
| GET     | `/workbook/chapters/:id`            | Kapitel mit allen Lerneinheiten, getrennt nach Kursbuch und Arbeitsbuch |
| GET     | `/workbook/units/:id`               | Einheit mit Blöcken – **ohne Lösungen** – plus eigenem Zwischenstand |
| PUT     | `/workbook/units/:id/answers`       | Antworten zwischenspeichern (Autosave, keine Bewertung) |
| PUT     | `/workbook/units/:id/annotations`   | Freihand-Notizebene über den Blöcken speichern |
| POST    | `/workbook/units/:id/check`         | Auswerten – siehe unten |
| POST    | `/workbook/units/:id/complete`      | Kursbuchteil ohne Aufgaben als erledigt markieren |
| POST    | `/workbook/units/:id/reset`         | Einheit zurücksetzen und neu bearbeiten |

**Prüfen vs. Abgeben.** `POST /check` kennt zwei Modi. Mit `blockIds` ist es eine
Zwischenprüfung einzelner Aufgaben: Ergebnis und Lösung kommen zurück, der Status
der Einheit bleibt aber `IN_PROGRESS` und es gibt keine XP. Ohne `blockIds` gilt
der Aufruf als Abgabe: Alle Aufgaben werden bewertet, das Ergebnis gespeichert,
die Einheit auf `COMPLETED` gesetzt und XP vergeben – letztere nur beim ersten
Abschluss, damit Wiederholen nicht farmt.

Übergebene Antworten werden mit den gespeicherten zusammengeführt; eine
Zwischenprüfung verwirft also die übrigen Eingaben nicht.

**Blocktypen.** Darstellung: `HEADING`, `TEXT`, `INFO` (Grammatikkasten, Tipp,
Landeskunde, Hinweis – optional mit Tabelle), `VOCAB_LIST`, `DIALOGUE`, `AUDIO`,
`IMAGE`. Aufgaben: `CLOZE` (Lückentext, optional mit Wortkasten), `CHOICE`
(Einfach- und Mehrfachauswahl), `MATCHING` (Zuordnung), `ORDERING` (Reihenfolge),
`WRITING` (freier Text, optional mit KI-Korrektur). Das Format steht in
`packages/shared/src/workbook.ts`.

**Bewertung.** `CLOZE`, `MATCHING` und `ORDERING` geben Teilpunkte über
`details` (pro Lücke, Paar bzw. Position), gelten aber erst bei vollständiger
Lösung als richtig. `CHOICE` vergleicht die Auswahl als Menge – bei
Mehrfachauswahl ist „alles ankreuzen" deshalb falsch. `WRITING` prüft nur den
geforderten Umfang; die inhaltliche Rückmeldung liefert die KI-Korrektur.
