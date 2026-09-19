/**
 * Länge des Vorschautexts auf Bibliothekskarten.
 *
 * Lang genug für die ersten ein bis zwei Sätze: Die Übersicht zeigt keine
 * Titelbilder mehr, sondern lässt den Text selbst anlesen – dafür reichen 50
 * Zeichen nicht, die brechen mitten im ersten Satz ab.
 */
const EXCERPT_LENGTH = 220;

/** Reiht die Abschnittstexte eines Lesetexts zu einem Fließtext aneinander. */
export function plainTextOf(sections: Array<{ text: string }>): string {
  return sections.map((section) => section.text).join(' ');
}

/**
 * Der Anfang eines Fließtexts als Vorschau.
 *
 * Bevorzugt wird an einem Satzende abgeschnitten – eine Leseprobe, die mit
 * einem Punkt endet, liest sich wie der Anfang des Texts und nicht wie ein
 * abgerissener Streifen. Nur wenn im ersten Teil der erlaubten Länge kein Satz
 * endet, wird an der letzten Wortgrenze gekappt und das mit Auslassungspunkten
 * kenntlich gemacht.
 */
export function excerptOf(body: string, maxLength = EXCERPT_LENGTH): string {
  const flat = body.replace(/\s+/g, ' ').trim();
  if (flat.length <= maxLength) return flat;

  const cut = flat.slice(0, maxLength);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (sentenceEnd >= maxLength * 0.5) return cut.slice(0, sentenceEnd + 1);

  const lastSpace = cut.lastIndexOf(' ');
  return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`;
}
