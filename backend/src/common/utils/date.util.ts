/** Normalisiert ein Datum auf Mitternacht UTC – Schlüssel für DailyActivity. */
export function startOfUtcDay(date: Date = new Date()): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

export function addUtcDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86_400_000);
}

export function differenceInUtcDays(a: Date, b: Date): number {
  return Math.round((startOfUtcDay(a).getTime() - startOfUtcDay(b).getTime()) / 86_400_000);
}

export function toDateKey(date: Date): string {
  return startOfUtcDay(date).toISOString().slice(0, 10);
}

/** Fisher-Yates – deterministisch testbar, wenn ein rng übergeben wird. */
export function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
