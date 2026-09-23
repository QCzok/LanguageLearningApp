/**
 * Prüft eine getippte Antwort gegen die Lösung einer Karte.
 *
 * `exact`  – stimmt (ohne Rücksicht auf Groß-/Kleinschreibung, Artikel,
 *            Satzzeichen und Klammerzusätze).
 * `typo`   – stimmt bis auf Akzente oder einen Tippfehler; zählt als richtig,
 *            die Karte zeigt die korrekte Schreibung trotzdem an.
 * `wrong`  – falsch.
 *
 * Mehrere Bedeutungen stehen in der Lösung durch Komma getrennt („hell,
 * leicht") – jede davon gilt.
 */
export type AnswerVerdict = 'exact' | 'typo' | 'wrong';

/** Artikel und Verbpartikel, die beim Vergleich wegfallen – je Sprache der Wortlisten. */
const LEADING_WORDS =
  /^(der|die|das|den|dem|des|ein|eine|to|the|a|an|el|la|los|las|un|una|unos|unas|le|les|une|il|lo|gli|i|uno)\s+/;
const ELIDED_ARTICLE = /^(l|d)['’]\s*/;

export function normalizeAnswer(value: string): string {
  let result = value
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[¿¡?!.,;:"“”„«»]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  result = result.replace(ELIDED_ARTICLE, '');
  // Zweimal: „to the …" oder „sich …" bleiben selten, ein Artikel vor dem Nomen häufig.
  result = result.replace(LEADING_WORDS, '').replace(LEADING_WORDS, '');
  return result.trim();
}

function stripAccents(value: string): string {
  return value.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
}

function editDistance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 1) return 2;
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let diagonal = previous[0];
    previous[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const above = previous[j];
      previous[j] = Math.min(
        previous[j] + 1,
        previous[j - 1] + 1,
        diagonal + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      diagonal = above;
    }
  }
  return previous[b.length];
}

export function checkAnswer(typed: string, solution: string): AnswerVerdict {
  const answer = normalizeAnswer(typed);
  if (!answer) return 'wrong';

  const options = solution
    .split(',')
    .map(normalizeAnswer)
    .filter((option) => option.length > 0);
  // Die ganze Lösung zählt auch am Stück („light, bright" getippt wie angezeigt).
  options.push(normalizeAnswer(solution));

  if (options.includes(answer)) return 'exact';

  const plain = stripAccents(answer);
  for (const option of options) {
    const plainOption = stripAccents(option);
    if (plainOption === plain) return 'typo';
    // Ein Tippfehler ist erst ab fünf Buchstaben verzeihlich – bei „sal"
    // statt „sol" wäre es ein anderes Wort.
    if (plainOption.length >= 5 && editDistance(plainOption, plain) <= 1) return 'typo';
  }
  return 'wrong';
}
