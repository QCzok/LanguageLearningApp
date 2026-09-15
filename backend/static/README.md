# Statische Dateien

Was hier liegt, liefert der Server unter `/static` aus – also neben der API,
nicht unter `api/v1` (siehe `src/main.ts`). Das Verzeichnis lässt sich über
`STATIC_DIR` verlegen.

## Audio der Mediathek

```
static/audio/<slug>.mp3
```

Der `<slug>` entsteht im Seed aus dem Titel: kleingeschrieben, jede Folge
nicht-alphanumerischer Zeichen zu einem `-`. „At the Bakery" wird damit zu
`at-the-bakery.mp3`. Welche Datei ein Eintrag erwartet, steht in der Spalte
`audioUrl` der Tabelle `media_items`:

```sql
SELECT title, "audioUrl" FROM media_items ORDER BY title;
```

Die Adressen sind **relativ** gespeichert (`/static/audio/x.mp3`). Die App
setzt die Server-Adresse davor, die sie ohnehin kennt (`resolveMediaUrl` in
`mobile/src/api/client.ts`) – eine absolute Adresse mit `localhost` wäre auf
einem Android-Gerät sonst das Gerät selbst. Für Produktion kann
`MEDIA_BASE_URL` auf eine CDN-Adresse zeigen; absolute Adressen reicht die App
unverändert durch.

Fehlt eine Datei, antwortet der Server mit 404 und der Player zeigt einen
Hinweis statt eines toten Abspielknopfs.

## Aufnahmen erzeugen

```
npm run media:tts                      # nur fehlende Dateien
npm run media:tts -- --force           # alle neu
npm run media:tts -- --only "Beim Bäcker"
```

Das Skript liest die Sprechtexte aus `prisma/seed/media-scripts.ts`,
synthetisiert jede Zeile einzeln – ein Dialog bekommt dadurch zwei
unterscheidbare Stimmen – und setzt sie zu einer Datei zusammen. Anschließend
misst es die Spieldauer aus der fertigen MP3 und trägt sie in die Datenbank
ein; der Seed kennt nur eine Schätzung aus der Textlänge.

Voraussetzung ist `OPENAI_API_KEY` in `backend/.env`. Über `OPENAI_TTS_MODEL`
lässt sich das Modell wechseln, über `OPENAI_TTS_URL` der Endpunkt (Proxy).

Aufnahmen gehören nicht ins Git-Repository – das Verzeichnis ist bis auf diese
Datei ignoriert (siehe `.gitignore`).
