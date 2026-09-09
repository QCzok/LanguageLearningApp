/**
 * CEFR-Sprachniveaus (Gemeinsamer Europäischer Referenzrahmen).
 * Reihenfolge ist bedeutungstragend: Index = Rangfolge.
 */
export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type CefrLevel = (typeof CEFR_LEVELS)[number];

export const CEFR_LABELS: Record<CefrLevel, { short: string; description: string }> = {
  A1: { short: 'Anfänger', description: 'Einfache Wörter und alltägliche Ausdrücke' },
  A2: { short: 'Grundlagen', description: 'Alltagssituationen und einfache Gespräche' },
  B1: { short: 'Mittelstufe', description: 'Zusammenhängend über vertraute Themen sprechen' },
  B2: { short: 'Gute Mittelstufe', description: 'Komplexe Texte verstehen, fließend diskutieren' },
  C1: { short: 'Fortgeschritten', description: 'Sprache flexibel und wirksam einsetzen' },
  C2: { short: 'Nahezu muttersprachlich', description: 'Alles mühelos verstehen und ausdrücken' },
};

export function levelIndex(level: CefrLevel): number {
  return CEFR_LEVELS.indexOf(level);
}

export function isAtLeast(level: CefrLevel, minimum: CefrLevel): boolean {
  return levelIndex(level) >= levelIndex(minimum);
}

/** Levelband für Content-Filter: gibt das Niveau plus optional das Nachbarniveau zurück. */
export function levelRange(level: CefrLevel, spread = 0): CefrLevel[] {
  const i = levelIndex(level);
  return CEFR_LEVELS.filter((_, idx) => Math.abs(idx - i) <= spread);
}
