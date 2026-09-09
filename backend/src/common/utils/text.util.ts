/** Länge des Vorschautexts auf Bibliothekskacheln. */
const EXCERPT_LENGTH = 50;

/**
 * Kurzer Vorschautext für die Kachelansicht: die ersten ~50 Zeichen eines
 * Fließtexts, an einer Wortgrenze abgeschnitten statt mitten im Wort.
 */
export function excerptOf(body: string, maxLength = EXCERPT_LENGTH): string {
  const flat = body.replace(/\s+/g, ' ').trim();
  if (flat.length <= maxLength) return flat;

  const cut = flat.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`;
}
