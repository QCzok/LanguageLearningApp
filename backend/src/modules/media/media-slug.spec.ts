import { MEDIA_SCRIPTS, mediaSlug } from '../../../prisma/seed/media-scripts';

/**
 * Der Dateiname einer Aufnahme entsteht aus ihrem Titel. Weil der Seed die
 * `audioUrl` schreibt und `scripts/generate-media-audio.ts` die Datei anlegt,
 * muss die Regel beidseitig dieselbe sein – sonst zeigt jeder Eintrag ins
 * Leere, und zwar lautlos: Der Server antwortet mit 404, und in der App bleibt
 * nur ein deaktivierter Abspielknopf.
 */
describe('mediaSlug', () => {
  it('schreibt Umlaute um, statt sie zu verschlucken', () => {
    // Die frühere Regel ersetzte alles außerhalb von a–z0–9 durch einen
    // Bindestrich und machte aus diesem Titel `beim-b-cker`.
    expect(mediaSlug('Beim Bäcker')).toBe('beim-baecker');
    expect(mediaSlug('Grüße aus Köln')).toBe('gruesse-aus-koeln');
    expect(mediaSlug('Straße')).toBe('strasse');
  });

  it('entfernt diakritische Zeichen der romanischen Sprachen', () => {
    expect(mediaSlug('Canción de cuna')).toBe('cancion-de-cuna');
    expect(mediaSlug('El Niño')).toBe('el-nino');
    expect(mediaSlug('Café à Paris')).toBe('cafe-a-paris');
  });

  it('lässt keinen führenden oder schließenden Bindestrich stehen', () => {
    // `-berall.mp3` wäre ein Dateiname, den eine Kommandozeile für eine
    // Option hält.
    expect(mediaSlug('Überall arbeiten')).toBe('ueberall-arbeiten');
    expect(mediaSlug('¿Dónde estás?')).toBe('donde-estas');
    expect(mediaSlug('Wie geht es dir?')).toBe('wie-geht-es-dir');
  });

  it('fasst Zeichenfolgen zu genau einem Bindestrich zusammen', () => {
    expect(mediaSlug('Slow News: Working From Anywhere')).toBe('slow-news-working-from-anywhere');
    expect(mediaSlug('A  --  B')).toBe('a-b');
  });

  it('vergibt für die vorhandenen Sprechtexte eindeutige Dateinamen', () => {
    // Zwei Titel, die auf denselben Slug fallen, überschrieben einander beim
    // Erzeugen – eine Aufnahme wäre dann stillschweigend die falsche.
    const slugs = MEDIA_SCRIPTS.map((script) => mediaSlug(script.title));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('erzeugt für jeden Sprechtext einen nicht-leeren, dateisicheren Namen', () => {
    for (const script of MEDIA_SCRIPTS) {
      const slug = mediaSlug(script.title);
      expect(slug).not.toBe('');
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });
});
