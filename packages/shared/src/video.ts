/**
 * Adressen rund um ein eingebettetes YouTube-Video.
 *
 * Gespeichert wird nur die elfstellige Kennung. Alles andere – Vorschaubild,
 * Einbettung, der Weg zur Seite selbst – ist daraus ableitbar und wird hier
 * abgeleitet, damit Server und App dieselbe Adresse bilden und eine Änderung
 * an einem Parameter nicht an zwei Stellen nachgezogen werden muss.
 */

/** Vorschaubild in 480 × 360. Existiert für jedes öffentliche Video. */
export function youtubeThumbnailUrl(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

/**
 * Die Adresse für den eingebetteten Player.
 *
 * `youtube-nocookie.com` statt `youtube.com`: Die Domain setzt erst beim
 * Abspielen Cookies, nicht schon beim Laden des Rahmens. Für eine Lern-App,
 * die ein Video nur zeigt und sonst nichts von YouTube will, ist das die
 * richtige Vorgabe.
 *
 * `enablejsapi` öffnet die IFrame-API, über die der Player seine Position
 * meldet; ohne sie wüsste die App nicht, wie weit jemand gekommen ist.
 * `playsinline` verhindert, dass iOS beim Start in den Vollbildmodus springt
 * und die App verlässt.
 */
export function youtubeEmbedUrl(
  youtubeId: string,
  options: { startSec?: number; origin?: string } = {},
): string {
  const params = new URLSearchParams({
    enablejsapi: '1',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
  });
  if (options.startSec) params.set('start', String(Math.floor(options.startSec)));
  if (options.origin) params.set('origin', options.origin);
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
}

/** Der Weg zu YouTube selbst – für „im Browser öffnen“ und als Ausweg, wenn ein Video die Einbettung verbietet. */
export function youtubeWatchUrl(youtubeId: string, startSec?: number): string {
  const suffix = startSec ? `&t=${Math.floor(startSec)}s` : '';
  return `https://www.youtube.com/watch?v=${youtubeId}${suffix}`;
}
