/**
 * Schreibt den Videokatalog der Mediathek neu.
 *
 *   npm run videos:refresh                  alle Sprachen
 *   npm run videos:refresh -- --only de     nur eine Sprache
 *   npm run videos:refresh -- --check       nichts schreiben, nur prüfen
 *
 * Die Mediathek zeigt keine eigenen Aufnahmen mehr, sondern eine Auswahl
 * fremder YouTube-Videos. Die Auswahl selbst ist redaktionell und steht in
 * `SOURCES`: je Sprache eine Handvoll Playlists, von denen jede für ein
 * Niveau und ein Thema steht – die Easy-Languages-Kanäle pflegen genau diese
 * Einteilung selbst ("German B1 | For Intermediate Learners"), weshalb sie
 * eine verlässlichere Niveauzuordnung liefert als jede Schätzung unsererseits.
 *
 * Welche Videos in einer Playlist stehen, entscheidet dagegen der Kanal und
 * ändert sich. Deshalb werden Titel, Kanalname und Spieldauer hier abgeholt
 * statt von Hand gepflegt: Was in `prisma/seed/video-catalog.ts` landet, ist
 * erzeugter Code, kein Handarbeit-Datensatz. Anschließend bestätigt YouTubes
 * oEmbed-Schnittstelle jede einzelne ID – ein Video, das gelöscht oder auf
 * privat gestellt wurde, fliegt raus, bevor es jemandem im Player als toter
 * Rahmen begegnet.
 *
 * Es wird kein API-Schlüssel gebraucht: Die Playlist-Seite trägt ihre Daten
 * als JSON im HTML (`ytInitialData`), und oEmbed ist offen.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
type Topic = 'EVERYDAY' | 'STREET_INTERVIEW' | 'GRAMMAR' | 'VOCABULARY' | 'CULTURE';

interface Source {
  playlistId: string;
  level: Level;
  topic: Topic;
  /** Langsam und deutlich gesprochen – die wichtigste Filterfrage für Anfänger. */
  slowSpeech?: boolean;
  /** Wie viele Videos aus dieser Playlist in den Katalog wandern. */
  take?: number;
  tags: string[];
}

/** Standardzahl der Videos je Playlist. */
const TAKE = 5;

/**
 * Keine Videos länger als eine knappe halbe Stunde: Die Mediathek ist für
 * eine Lerneinheit gedacht, nicht für einen Filmabend. Und keine unter einer
 * Minute – das sind Shorts und Trailer, an denen niemand etwas lernt.
 */
const MIN_SECONDS = 60;
const MAX_SECONDS = 1800;

const SOURCES: Record<string, Source[]> = {
  de: [
    {
      playlistId: 'PLk1fjOl39-50kWobutO8NVFzbw9PHtbbg',
      level: 'A1',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag', 'einstieg'],
    },
    {
      playlistId: 'PLk1fjOl39-53GxQIn1Hxdouokf0J0SDpl',
      level: 'A1',
      topic: 'GRAMMAR',
      slowSpeech: true,
      tags: ['grammatik', 'wortschatz'],
    },
    {
      playlistId: 'PLk1fjOl39-5201BUdhtOM_x23poNvLouT',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag'],
    },
    {
      playlistId: 'PLk1fjOl39-53Sy0xxIHKnQoZLHWb8rbl9',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['langsam gesprochen'],
    },
    {
      playlistId: 'PLk1fjOl39-53yooogv6RaJAK29mx7nz1d',
      level: 'B1',
      topic: 'EVERYDAY',
      tags: ['alltag'],
    },
    {
      playlistId: 'PLk1fjOl39-52ihy3oEHgb6-fI7o5rOww8',
      level: 'B1',
      topic: 'GRAMMAR',
      tags: ['grammatik'],
    },
    {
      playlistId: 'PLk1fjOl39-51j7LVOP09IDktNFItfC0FZ',
      level: 'B1',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLk1fjOl39-50w2RABiN_MaMSPsuo6ffFN',
      level: 'B1',
      topic: 'CULTURE',
      tags: ['landeskunde'],
    },
    {
      playlistId: 'PLk1fjOl39-51lvdiuQYsLW-0aGIdNNknA',
      level: 'B2',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLk1fjOl39-50RITUTsTOLTnBoTRlxwroe',
      level: 'B2',
      topic: 'CULTURE',
      tags: ['vlog', 'dokumentation'],
    },
    {
      playlistId: 'PLk1fjOl39-53pjPz2VLCeu5vjOUMKZ22O',
      level: 'C1',
      topic: 'EVERYDAY',
      tags: ['diskussion'],
    },
    {
      playlistId: 'PLk1fjOl39-50hTI9yYPnmTIqL_1zWJI1a',
      level: 'C2',
      topic: 'EVERYDAY',
      tags: ['diskussion'],
    },
  ],
  en: [
    {
      playlistId: 'PLUiFeF9KuaPYRDgyYcC0A0IZNtiyIcOtp',
      level: 'A1',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag', 'einstieg'],
    },
    {
      playlistId: 'PLUiFeF9KuaPabTQ1HEZ3pvD-JkiiqZRu9',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['langsam gesprochen'],
    },
    {
      playlistId: 'PLUiFeF9KuaPZiJqP0dcYoCvZ3dgUYcts2',
      level: 'B1',
      topic: 'EVERYDAY',
      tags: ['alltag', 'gespräch'],
    },
    {
      playlistId: 'PLUiFeF9KuaPacPIXMTPliOTZJi3jvK0oh',
      level: 'B1',
      topic: 'GRAMMAR',
      tags: ['grammatik', 'wortschatz'],
    },
    {
      playlistId: 'PLUiFeF9KuaPZxQHrvmS_KAuA-qEPA0kw7',
      level: 'B1',
      topic: 'VOCABULARY',
      tags: ['wortschatz'],
    },
    {
      playlistId: 'PLUiFeF9KuaPYJrmMK6RhEN-u1rHaYcoUE',
      level: 'B2',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLUiFeF9KuaPaHLtlLdROxtmQJhahOXo7q',
      level: 'B2',
      topic: 'CULTURE',
      tags: ['landeskunde'],
    },
    {
      playlistId: 'PLUiFeF9KuaPZv3z0t67PIPO-mOrggJa3Q',
      level: 'C1',
      topic: 'CULTURE',
      tags: ['vlog'],
    },
  ],
  es: [
    {
      playlistId: 'PLQGxDRfENoxI8G98kBR5ky1UQcst3g33M',
      level: 'A1',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag', 'einstieg'],
    },
    {
      playlistId: 'PLQGxDRfENoxKE2b4mDxIdywBQEC8FMJul',
      level: 'A1',
      topic: 'GRAMMAR',
      slowSpeech: true,
      tags: ['grammatik', 'wortschatz'],
    },
    {
      playlistId: 'PLQGxDRfENoxJ7iehMYPaVaDyPOquC0fIB',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag'],
    },
    {
      playlistId: 'PLQGxDRfENoxKq86RU0IYqFIsMFgMRpVf-',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['langsam gesprochen'],
    },
    {
      playlistId: 'PLQGxDRfENoxJ_cdraefXK67ozp8LxI_Ar',
      level: 'B1',
      topic: 'EVERYDAY',
      tags: ['alltag'],
    },
    {
      playlistId: 'PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13',
      level: 'B1',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLQGxDRfENoxKLudehx1KMcdzBm_QEHKyM',
      level: 'B2',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLQGxDRfENoxJRnj-Ru-HlYkKhvbZf0ys3',
      level: 'B2',
      topic: 'CULTURE',
      tags: ['landeskunde', 'spanien'],
    },
    {
      playlistId: 'PLQGxDRfENoxKYX803O5rNE-ndAmHC1ui6',
      level: 'C1',
      topic: 'EVERYDAY',
      tags: ['diskussion'],
    },
  ],
  fr: [
    {
      playlistId: 'PLnazreCxpqRlvlt5Pf4qn4bUoua5nU2Im',
      level: 'A1',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag', 'einstieg'],
    },
    {
      playlistId: 'PLnazreCxpqRlBNcfZuQkxYFKJ-VRuzrzV',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['langsam gesprochen'],
    },
    {
      playlistId: 'PLnazreCxpqRmpb4lGvzvCGXIXZkL3Nc27',
      level: 'A2',
      topic: 'EVERYDAY',
      tags: ['alltag'],
    },
    {
      playlistId: 'PLnazreCxpqRl3L7L2kOo9BsCU8FOYFKch',
      level: 'A2',
      topic: 'GRAMMAR',
      slowSpeech: true,
      tags: ['grammatik', 'wortschatz'],
    },
    {
      playlistId: 'PLnazreCxpqRkOoB4MhjCtN0R_6IhLgQfp',
      level: 'B1',
      topic: 'EVERYDAY',
      tags: ['alltag'],
    },
    {
      playlistId: 'PLnazreCxpqRnWNd2_FyJ6o_hJSzfSFAlp',
      level: 'B1',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLnazreCxpqRncZ__JlexKjoZvIhpLwU3i',
      level: 'B2',
      topic: 'EVERYDAY',
      tags: ['diskussion'],
    },
    {
      playlistId: 'PLnazreCxpqRkRIhyUTP9wW91O6yL4ScCS',
      level: 'B2',
      topic: 'CULTURE',
      tags: ['landeskunde'],
    },
  ],
  it: [
    {
      playlistId: 'PLw_3OGi3pBv735a2Y_pp76tvIIhSEyRu1',
      level: 'A1',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['alltag', 'einstieg'],
    },
    {
      playlistId: 'PLw_3OGi3pBv4bmHtLzX-NFQQXGpNi4mkW',
      level: 'A2',
      topic: 'EVERYDAY',
      slowSpeech: true,
      tags: ['langsam gesprochen'],
    },
    {
      playlistId: 'PLw_3OGi3pBv5LIPmZZuFLoEOja6vILPN0',
      level: 'A2',
      topic: 'VOCABULARY',
      tags: ['wortschatz'],
    },
    {
      playlistId: 'PLw_3OGi3pBv7DMCOr0hnwsLfevZx7HeZb',
      level: 'B1',
      topic: 'GRAMMAR',
      tags: ['grammatik'],
    },
    {
      playlistId: 'PLw_3OGi3pBv438oUB6XrF0lh6hJ8y6db8',
      level: 'B1',
      topic: 'EVERYDAY',
      tags: ['alltag'],
    },
    {
      playlistId: 'PLw_3OGi3pBv4gy72YoGpf52cqOQ-sdtiZ',
      level: 'B1',
      topic: 'STREET_INTERVIEW',
      tags: ['straßeninterview'],
    },
    {
      playlistId: 'PLw_3OGi3pBv7bG3JRDoQ1G_vesb3QLnU9',
      level: 'B2',
      topic: 'CULTURE',
      tags: ['landeskunde'],
    },
    {
      playlistId: 'PLw_3OGi3pBv5Xfuh_9aA15OBEkHJ8N5F-',
      level: 'B2',
      topic: 'EVERYDAY',
      tags: ['diskussion'],
    },
  ],
};

interface CatalogEntry {
  youtubeId: string;
  title: string;
  channelName: string;
  channelUrl: string;
  durationSec: number;
  level: Level;
  topic: Topic;
  slowSpeech: boolean;
  tags: string[];
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { 'User-Agent': BROWSER_UA, 'Accept-Language': 'en-US,en;q=0.9' },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} für ${url}`);
  return response.text();
}

/*
  YouTube liefert die Playlist ohne diesen Kopf als Einwilligungsseite aus.
  Ein gewöhnlicher Browser-Kennzeichner reicht, um die eigentliche Seite zu
  bekommen – dieselbe, die auch ein Besucher sähe.
*/
const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

/** Sucht rekursiv alle Objekte eines Schlüssels im `ytInitialData`-Baum. */
function collect(node: unknown, key: string, found: Record<string, unknown>[] = []) {
  if (!node || typeof node !== 'object') return found;
  for (const [name, value] of Object.entries(node as Record<string, unknown>)) {
    if (name === key && value && typeof value === 'object') {
      found.push(value as Record<string, unknown>);
    }
    if (Array.isArray(value)) value.forEach((entry) => collect(entry, key, found));
    else collect(value, key, found);
  }
  return found;
}

interface PlaylistEntry {
  youtubeId: string;
  title: string;
  durationSec: number;
}

async function readPlaylist(playlistId: string): Promise<PlaylistEntry[]> {
  const html = await fetchText(`https://www.youtube.com/playlist?list=${playlistId}`);
  const match = /ytInitialData\s*=\s*(\{.+?\});<\/script>/s.exec(html);
  if (!match) throw new Error(`Playlist ${playlistId}: kein ytInitialData im HTML`);
  const data: unknown = JSON.parse(match[1]);

  /*
    YouTube liefert Playlist-Einträge in zwei Formen aus und wechselt dabei
    ohne Ankündigung. Beide werden gelesen, sonst steht das Skript beim
    nächsten Umbau wieder mit leeren Händen da – wie beim Umstieg auf
    `lockupViewModel`, der genau das ausgelöst hat.
  */
  const videos = [...readLockups(data), ...readLegacyRows(data)];

  // Dieselbe Folge steht gelegentlich in zwei Playlists; die erste gewinnt.
  return [...new Map(videos.map((video) => [video.youtubeId, video])).values()].filter(
    (video) => video.youtubeId && video.title && video.durationSec > 0,
  );
}

/** Die aktuelle Form (Stand 2026). */
function readLockups(data: unknown): PlaylistEntry[] {
  return collect(data, 'lockupViewModel')
    .filter((row) => row.contentType === 'LOCKUP_CONTENT_TYPE_VIDEO')
    .map((row) => {
      const metadata = (row.metadata as Record<string, Record<string, unknown>> | undefined)
        ?.lockupMetadataViewModel;
      const title = (metadata?.title as { content?: string } | undefined)?.content ?? '';
      // Die Spieldauer steht nur als Aufschrift auf dem Vorschaubild („10:31").
      const badge = collect(row.contentImage, 'thumbnailBadgeViewModel').find(
        (entry) => typeof entry.text === 'string' && /^\d+(:\d\d)+$/.test(entry.text),
      );
      return {
        youtubeId: String(row.contentId ?? ''),
        title,
        durationSec: parseClock(String(badge?.text ?? '')),
      };
    });
}

/** Die frühere Form – bleibt als Rückfallebene stehen. */
function readLegacyRows(data: unknown): PlaylistEntry[] {
  return collect(data, 'playlistVideoRenderer').map((row) => ({
    youtubeId: String(row.videoId ?? ''),
    title: textOf(row.title),
    durationSec: Number(row.lengthSeconds ?? 0),
  }));
}

/** „10:31" → 631, „1:02:03" → 3723. */
function parseClock(value: string): number {
  if (!value) return 0;
  return value
    .split(':')
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0);
}

function textOf(node: unknown): string {
  if (!node || typeof node !== 'object') return '';
  const record = node as { simpleText?: string; runs?: Array<{ text?: string }> };
  if (record.simpleText) return record.simpleText;
  return (record.runs ?? []).map((run) => run.text ?? '').join('');
}

/**
 * Bestätigt eine ID über oEmbed und liefert nebenbei den kanonischen Titel
 * und den Kanal – die Playlist-Seite kürzt beides gelegentlich.
 */
async function verify(
  youtubeId: string,
): Promise<{ title: string; channelName: string; channelUrl: string } | null> {
  const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(
    `https://www.youtube.com/watch?v=${youtubeId}`,
  )}&format=json`;
  const response = await fetch(url, { headers: { 'User-Agent': BROWSER_UA } });
  if (!response.ok) return null;
  const data = (await response.json()) as {
    title?: string;
    author_name?: string;
    author_url?: string;
  };
  if (!data.title) return null;
  return {
    title: data.title,
    channelName: data.author_name ?? '',
    channelUrl: data.author_url ?? '',
  };
}

async function buildLanguage(code: string, sources: Source[]): Promise<CatalogEntry[]> {
  const entries: CatalogEntry[] = [];
  const seen = new Set<string>();

  for (const source of sources) {
    let candidates: PlaylistEntry[];
    try {
      candidates = await readPlaylist(source.playlistId);
    } catch (error) {
      console.warn(`  ! ${source.playlistId}: ${(error as Error).message}`);
      continue;
    }

    let taken = 0;
    for (const candidate of candidates) {
      if (taken >= (source.take ?? TAKE)) break;
      if (seen.has(candidate.youtubeId)) continue;
      if (candidate.durationSec < MIN_SECONDS || candidate.durationSec > MAX_SECONDS) continue;

      const confirmed = await verify(candidate.youtubeId);
      if (!confirmed) {
        console.warn(`  ! ${candidate.youtubeId} nicht abrufbar – übersprungen`);
        continue;
      }

      seen.add(candidate.youtubeId);
      taken += 1;
      entries.push({
        youtubeId: candidate.youtubeId,
        title: confirmed.title,
        channelName: confirmed.channelName,
        channelUrl: confirmed.channelUrl,
        durationSec: candidate.durationSec,
        level: source.level,
        topic: source.topic,
        slowSpeech: source.slowSpeech ?? false,
        tags: source.tags,
      });
    }
    console.log(`  ${source.level} ${source.topic}: ${taken} Video(s)`);
  }

  console.log(`${code}: ${entries.length} Videos`);
  return entries;
}

function render(catalog: Record<string, CatalogEntry[]>): string {
  const body = Object.entries(catalog)
    .map(([code, entries]) => {
      const rows = entries
        .map(
          (entry) => `    {
      youtubeId: ${JSON.stringify(entry.youtubeId)},
      title: ${JSON.stringify(entry.title)},
      channelName: ${JSON.stringify(entry.channelName)},
      channelUrl: ${JSON.stringify(entry.channelUrl)},
      durationSec: ${entry.durationSec},
      level: CefrLevel.${entry.level},
      topic: VideoTopic.${entry.topic},
      slowSpeech: ${entry.slowSpeech},
      tags: ${JSON.stringify(entry.tags)},
    },`,
        )
        .join('\n');
      return `  ${code}: [\n${rows}\n  ],`;
    })
    .join('\n');

  return `/*
  Erzeugt von \`npm run videos:refresh\` – nicht von Hand ändern.

  Die Auswahl (welche Playlist für welches Niveau und Thema steht) liegt in
  scripts/refresh-video-catalog.ts; hier stehen nur die daraus gezogenen
  Videos. Jede ID war zum Zeitpunkt der Erzeugung öffentlich abrufbar.
  Gelöschte Videos fängt der Seed nicht ab – dafür das Skript erneut laufen
  lassen.

  Zuletzt erzeugt: ${new Date().toISOString().slice(0, 10)}
*/
import { CefrLevel, VideoTopic } from '@prisma/client';

export interface VideoSeed {
  youtubeId: string;
  title: string;
  channelName: string;
  channelUrl: string;
  durationSec: number;
  level: CefrLevel;
  topic: VideoTopic;
  slowSpeech: boolean;
  tags: string[];
}

/** Sprachcode (ISO-639-1) → kuratierte Videos für diese Lernsprache. */
export const VIDEO_CATALOG: Record<string, VideoSeed[]> = {
${body}
};
`;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : undefined;
  const checkOnly = args.includes('--check');

  const codes = only ? [only] : Object.keys(SOURCES);
  const catalog: Record<string, CatalogEntry[]> = {};

  for (const code of codes) {
    const sources = SOURCES[code];
    if (!sources) throw new Error(`Keine Quellen für Sprache "${code}"`);
    console.log(`\n${code}`);
    catalog[code] = await buildLanguage(code, sources);
  }

  const total = Object.values(catalog).reduce((sum, entries) => sum + entries.length, 0);
  if (checkOnly) {
    console.log(`\n${total} Videos geprüft, nichts geschrieben (--check).`);
    return;
  }

  /*
    Bei `--only` würden die übrigen Sprachen sonst aus der Datei fallen. Der
    bestehende Katalog wird deshalb geladen und nur der geprüfte Teil ersetzt.
  */
  if (only) {
    const existing = (await import('../prisma/seed/video-catalog')).VIDEO_CATALOG;
    for (const [code, entries] of Object.entries(existing)) {
      if (!catalog[code]) catalog[code] = entries as CatalogEntry[];
    }
  }

  const target = join(__dirname, '..', 'prisma', 'seed', 'video-catalog.ts');
  const ordered = Object.fromEntries(
    Object.keys(SOURCES).map((code) => [code, catalog[code] ?? []]),
  );
  // Durch Prettier, damit erzeugter Code im Diff nicht anders aussieht als
  // geschriebener – sonst fällt jede Auffrischung durch die Formatprüfung.
  const prettier = (await import('prettier')) as typeof import('prettier');
  const options = (await prettier.resolveConfig(target)) ?? {};
  writeFileSync(
    target,
    await prettier.format(render(ordered), { ...options, parser: 'typescript' }),
    'utf8',
  );
  console.log(`\n${total} Videos → ${target}`);
}

void main().catch((error) => {
  console.error(error);
  process.exit(1);
});
