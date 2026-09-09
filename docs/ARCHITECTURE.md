# Architektur

## Überblick

```
┌─────────────────────────────┐
│  mobile (Expo / React Native)│
│  Screens ─ TanStack Query    │
│  Zustand (Auth) ─ axios      │
└──────────────┬───────────────┘
               │ REST + JWT, SSE für den KI-Chat
┌──────────────▼───────────────┐
│  backend (NestJS)            │
│  Guards ▸ Controller ▸ Service│
│  Prisma                       │
└───────┬──────────────┬────────┘
        │              │
┌───────▼──────┐  ┌────▼─────────────┐
│  PostgreSQL  │  │ Anthropic API    │
└──────────────┘  └──────────────────┘

        ┌───────────────────────┐
        │  packages/shared      │  ← von beiden Seiten importiert
        │  Typen · CEFR · SM-2  │
        │  Heft-Format · DTOs   │
        └───────────────────────┘
```

## Warum ein geteiltes Paket

Drei Dinge müssen App und Server identisch verstehen, und bei allen dreien wäre
eine doppelte Implementierung eine schleichende Fehlerquelle:

1. **Der API-Vertrag** (`api.ts`). Beide Seiten importieren dieselben DTOs. Wird
   im Backend ein Feld umbenannt, bricht der Typecheck der App.
2. **Der SM-2-Algorithmus** (`srs.ts`) als reine Funktion ohne Seiteneffekte. Das
   Backend rechnet damit autoritativ; die App kann dasselbe für eine optimistische
   Anzeige nutzen, ohne dass sich die Ergebnisse unterscheiden können.
3. **Das Heftformat** (`notebook.ts`). Der Editor erzeugt es, der Server validiert
   und speichert es, die KI liest die Textanteile daraus.

Beide Anwendungen binden das **gebaute** Paket ein (`packages/shared/dist`), nicht
die Quellen – deshalb muss nach Änderungen `npm run shared:build` laufen.

## Backend

### Schichtung

Jedes Feature ist ein Nest-Modul mit derselben inneren Struktur:

```
modules/<feature>/
├── <feature>.controller.ts   HTTP, Validierung, Statuscodes
├── <feature>.service.ts      Fachlogik, Datenbankzugriff
├── <feature>.module.ts       Verdrahtung
└── dto/                      Eingabevalidierung (class-validator)
```

Controller enthalten keine Fachlogik, Services kennen kein HTTP (Ausnahme: der
SSE-Endpunkt braucht das `Response`-Objekt). Der `PrismaService` ist global, damit
nicht jedes Modul ihn erneut importieren muss.

### Guards

Global registriert, in dieser Reihenfolge:

1. `ThrottlerGuard` – Grundlimit 120 Anfragen/Minute; Login, Registrierung und die
   KI-Routen setzen eigene, engere Limits per `@Throttle`.
2. `JwtAuthGuard` – alles ist geschützt, `@Public()` hebt das punktuell auf.
3. `RolesGuard` – wertet `@Roles(...)` aus.

`@RequiresPremium()` kommt als Decorator pro Route dazu. Er antwortet mit **402**
statt 403, weil die App darauf gezielt den Upgrade-Screen öffnet – ein 403 würde
in derselben generischen Fehlermeldung landen wie eine fehlende Berechtigung.

Der `JwtStrategy` lädt Rolle und Plan bei jedem Request frisch aus der Datenbank,
statt sie im Token zu führen. Ein abgelaufenes Abo oder eine entzogene Rolle greift
so sofort und nicht erst beim nächsten Token-Refresh.

### Authentifizierung

- Passwörter: Argon2id (`memoryCost: 19456`, `timeCost: 2`).
- Access-Token 15 Minuten, Refresh-Token 30 Tage.
- Von Refresh-Tokens wird nur der SHA-256-Hash gespeichert. Ein Datenbankleck gibt
  keine nutzbaren Tokens preis.
- **Rotation:** Jeder Refresh entwertet den benutzten Token. Taucht ein bereits
  entwerteter Token erneut auf, werden alle Sitzungen des Kontos beendet – das ist
  die Standardreaktion auf einen möglichen Diebstahl.
- Der Login hasht auch bei unbekannter E-Mail, damit die Antwortzeit nicht
  verrät, ob ein Konto existiert.

### Fehlerbehandlung

`AllExceptionsFilter` normalisiert alles auf ein Format und übersetzt
Prisma-Fehlercodes (`P2002` → 409, `P2025` → 404, `P2003` → 400). Interne
Datenbankdetails verlassen den Server nie; 5xx werden mit Stacktrace geloggt.

### Datenmodell

Kernentscheidungen in `prisma/schema.prisma`:

- **`VocabProgress`** trennt die Vokabel (`VocabItem`, geteilt) vom Lernstand
  (pro Nutzer). Unique auf `(userId, vocabItemId)`, Index auf `(userId, dueAt)` –
  das ist die Abfrage der Lernwarteschlange.
- **`NotebookPage.content`** ist JSONB. Ein starres Tabellenschema für Striche,
  Textfelder und Formen würde jede Erweiterung des Editors zur Migration machen;
  die Versionierung im Dokument selbst löst das eleganter.
- **`DailyActivity`** ist auf Mitternacht UTC normalisiert und unique pro
  `(userId, date)`. Streak und Wochenkurve sind damit ein einziger Range-Scan
  statt einer Aggregation über alle Ereignisse.
- **`AiUsage`** protokolliert jeden KI-Aufruf mit Token-Zahlen. Das trägt sowohl
  die Kontingentprüfung als auch die Kostenauswertung.

Alle nutzerbezogenen Tabellen hängen per `onDelete: Cascade` am Nutzer – eine
Kontolöschung ist ein einzelner `DELETE`.

## KI-Anbindung

```
AiController  ▸ Premium-Guard, Rate-Limit, SSE
AiService     ▸ Kontingent, Prompts, Persistenz, Verbrauchsbuchung
AnthropicClient ▸ Modellwahl, Fehlerübersetzung, Token-Zählung
```

**Prompt-Aufbau.** Der Systemprompt besteht immer aus zwei Blöcken: dem
unveränderlichen Tutor-Präfix mit `cache_control: ephemeral` und danach dem
variablen Teil (Zielsprache, Muttersprache, Niveau, Aufgabenstellung). Da
Prompt-Caching ein Präfix-Match ist, würde jede Variable im ersten Block den Cache
für alle Nutzer entwerten.

**Strukturierte Antworten.** Korrektur, Grammatikerklärung und Empfehlungen laufen
über `messages.parse()` mit einem Zod-Schema als Output-Format. Das Schema ist
gleichzeitig Prompt-Spezifikation und Laufzeitvalidierung; der Service kann die
Felder ohne defensive Prüfungen benutzen. Die Formate werden einmal beim
Modul-Laden erzeugt, nicht pro Aufruf.

**Empfehlungen ohne Halluzinationen.** Der Prompt bekommt den verfügbaren Katalog
(Deck-, Text- und Medien-IDs) mitgeliefert und die Anweisung, `targetId`
ausschließlich daraus zu wählen oder `null` zu setzen. So kann die KI nicht auf
Inhalte verweisen, die es nicht gibt.

**Ablehnungen.** Die API kann eine Anfrage mit HTTP 200 und
`stop_reason: "refusal"` beantworten – das ist kein Fehler, den ein `catch` fangen
würde. `AnthropicClient.assertNotRefused` prüft das bei jedem Aufruf explizit.

**Ohne API-Key** startet der Server normal und beantwortet KI-Routen mit 503,
statt beim Start abzubrechen.

## App

### Zustand

Zwei Ebenen, bewusst getrennt:

- **Serverdaten**: TanStack Query. Cache, Nachladen, Fehler- und Ladezustände.
  Query-Keys sind nach Ressource geschnitten, damit gezielt invalidiert werden
  kann (z. B. nach einer Lernsitzung: `decks`, `vocab-stats`, `dashboard`).
- **Sitzung**: Zustand-Store. Nutzer, Tokens, Anmeldung. Die Tokens selbst liegen
  im Secure Store (Keychain/Keystore), nicht im JS-Zustand.

### Navigation als Funktion des Auth-Zustands

Der `RootNavigator` rendert genau einen von drei Bäumen, abgeleitet aus dem Store:
kein Nutzer → Auth, Onboarding offen → Onboarding, sonst → Haupt-Tabs. Nach Login
oder Onboarding gibt es deshalb kein imperatives `navigate()`; es genügt, den
Nutzer im Store zu aktualisieren.

### Token-Refresh

Der axios-Interceptor fängt 401 ab und erneuert den Token. Parallele Requests
teilen sich **eine** Refresh-Promise – ohne diese Serialisierung würden mehrere
gleichzeitige Refreshes die serverseitige Rotation auslösen und die Sitzung
beenden.

### Der Canvas des Lernhefts

Gerendert mit `react-native-svg`. Der laufende Strich liegt in lokalem State und
wird erst beim Loslassen in den Seiteninhalt übernommen – während der Bewegung
zeichnet React so nur einen Pfad neu statt der ganzen Seite. Punkte unter zwei
Einheiten Abstand werden verworfen (glättet die Linie, hält die Datenmenge klein),
und die Kurve wird über quadratische Béziers durch die Mittelpunkte geglättet.

Gespeichert wird in Referenzkoordinaten (1000 × 1414), gerendert über
`viewBox` skaliert auf die Gerätebreite. Eine Seite sieht damit auf jedem Gerät
gleich aus. Textbearbeitung passiert in einem echten `TextInput` über dem SVG,
weil SVG-Text nicht editierbar ist.

Autosave läuft entprellt (1,5 s Ruhe) und wird beim Seitenwechsel und beim
Verlassen des Screens sofort ausgelöst.
