import { PrismaClient } from '@prisma/client';
import { VIDEO_CATALOG } from './video-catalog';

/**
 * Schreibt den Videokatalog der Mediathek in die Datenbank.
 *
 * Steht getrennt vom großen Seed, weil er auch allein gebraucht wird: Beim
 * Ausrollen läuft nur `prisma migrate deploy` (siehe render.yaml), und eine
 * frisch angelegte Tabelle ist leer – die Mediathek zeigte dann die
 * Leermeldung statt Videos. `npm run videos:seed` füllt sie nach, ohne den
 * übrigen Seed (Demo-Konten, Bibliothek, Lehrwerk) anzufassen.
 *
 * Idempotent über den natürlichen Schlüssel (Sprache, YouTube-Kennung).
 * Gelöscht wird nichts: Fällt ein Video aus dem Katalog, bleibt sein Eintrag
 * stehen, denn daran hängt der Sehfortschritt der Nutzer.
 *
 * Anders als die übrigen Inhalte gibt es den Katalog für alle fünf
 * Lernsprachen – fremdes Material kostet nichts, und für Französisch und
 * Italienisch ist er vorerst der einzige Inhalt überhaupt.
 */
export async function seedVideos(prisma: PrismaClient): Promise<number> {
  let written = 0;

  for (const [code, videos] of Object.entries(VIDEO_CATALOG)) {
    const language = await prisma.language.findUnique({ where: { code } });
    if (!language) {
      console.warn(`  Videokatalog: Sprache "${code}" unbekannt – übersprungen.`);
      continue;
    }

    for (const video of videos) {
      const data = {
        languageId: language.id,
        level: video.level,
        topic: video.topic,
        youtubeId: video.youtubeId,
        title: video.title,
        channelName: video.channelName,
        channelUrl: video.channelUrl,
        durationSec: video.durationSec,
        slowSpeech: video.slowSpeech,
        tags: video.tags,
      };
      await prisma.videoItem.upsert({
        where: {
          languageId_youtubeId: { languageId: language.id, youtubeId: video.youtubeId },
        },
        create: data,
        update: data,
      });
      written += 1;
    }

    console.log(`  Mediathek ${code}: ${videos.length} Videos`);
  }

  return written;
}
