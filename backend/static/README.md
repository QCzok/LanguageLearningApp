# Statische Dateien

Was hier liegt, liefert der Server unter `/static` aus – also neben der API,
nicht unter `api/v1` (siehe `src/main.ts`). Das Verzeichnis lässt sich über
`STATIC_DIR` verlegen.

## Audio der Mediathek

```
static/audio/<slug>.mp3
```

Der `<slug>` entsteht aus dem Titel: kleingeschrieben, Umlaute umgeschrieben,
übrige diakritische Zeichen entfernt, jede Folge übriger Zeichen zu einem `-`.
„At the Bakery" wird damit zu `at-the-bakery.mp3`, „Beim Bäcker" zu
`beim-baecker.mp3` und „En la panadería" zu `en-la-panaderia.mp3`.

Die Regel steht als `mediaSlug()` in `prisma/seed/media-scripts.ts` und wird
von beiden Seiten benutzt – vom Seed, der die `audioUrl` schreibt, und vom
Generator, der die Datei anlegt. Das ist kein Zufall: Ergäben die beiden
verschiedene Namen, zeigte jeder Eintrag ins Leere, und zwar lautlos. Früher
stand die Regel doppelt im Code und verschluckte dabei Umlaute („Beim Bäcker"
→ `beim-b-cker.mp3`); `src/modules/media/media-slug.spec.ts` hält das jetzt
fest.

Welche Datei ein Eintrag erwartet, steht in der Spalte `audioUrl` der Tabelle
`media_items`:

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
npm run media:tts                          # nur fehlende Dateien
npm run media:tts -- --force               # alle neu
npm run media:tts -- --only "Beim Bäcker"  # eine einzelne
npm run media:tts -- --voices              # nur prüfen, was installiert ist
```

Das Skript liest die Sprechtexte aus `prisma/seed/media-scripts.ts`,
synthetisiert jede Zeile einzeln – ein Dialog bekommt dadurch zwei
unterscheidbare Stimmen – und setzt sie zu einer Datei zusammen. Anschließend
misst es die Spieldauer aus der fertigen MP3 und trägt sie in die Datenbank
ein; der Seed kennt nur eine Schätzung aus der Textlänge.

### Zwei Wege

**`--provider openai`** (Vorgabe) nutzt die Sprachsynthese der API. Beste
Qualität. Voraussetzung ist `OPENAI_API_KEY` in `backend/.env`; über
`OPENAI_TTS_MODEL` lässt sich das Modell wechseln, über `OPENAI_TTS_URL` der
Endpunkt (Proxy).

**`--provider windows`** nutzt die in Windows installierten Stimmen –
kostenlos und offline, aber hörbar robotischer. Als Vorschau brauchbar, als
endgültige Hörvorlage einer Sprachlern-App eher nicht. Zwei Voraussetzungen:

1. **Eine Stimme je Sprache.** Windows bringt oft nur englische mit. Fehlt die
   Sprache eines Sprechtexts, bricht das Skript ab, statt auf eine Stimme der
   falschen Sprache auszuweichen – eine englische Stimme, die einen spanischen
   Text vorliest, brächte Lernenden falsche Aussprache bei. Nachinstallieren
   über Einstellungen → Zeit und Sprache → Sprache und Region → Sprache
   hinzufügen, dort bei den Sprachfunktionen **Sprachausgabe** ankreuzen;
   danach das Terminal neu starten.
2. **ffmpeg**, weil die Windows-Sprachausgabe nur WAV schreibt und die
   Mediathek MP3 erwartet (`winget install Gyan.FFmpeg`, oder den vollen Pfad
   in `FFMPEG_PATH`).

`npm run media:tts -- --voices` zeigt beides auf einen Blick: welche Stimmen da
sind, welche Sprachen die vorhandenen Texte brauchen und ob ffmpeg gefunden
wird.

Aufnahmen gehören nicht ins Git-Repository – das Verzeichnis ist bis auf diese
Datei ignoriert (siehe `.gitignore`).
