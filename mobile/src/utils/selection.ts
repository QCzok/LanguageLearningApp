import { Platform } from 'react-native';

/**
 * Markiert die lesende Person gerade Text?
 *
 * Gebraucht dort, wo eine ganze Fläche auf ein Tippen reagiert und zugleich
 * Text trägt, den man herauskopieren können soll: die Seite des Lesers
 * (ein Tipp blendet die Leisten ein und aus) und der Übersetzungskasten
 * darunter (ein Tipp klappt ihn zu). Im Browser endet das Markieren mit einem
 * Klick auf genau dieser Fläche – ohne diese Abfrage klappt beim Loslassen
 * der Maus jedes Mal die Seite um, die man gerade kopieren wollte.
 *
 * Auf iOS und Android stellt sich die Frage nicht: Dort fängt die Textauswahl
 * die Berührung selbst ab, die Fläche darunter erfährt nichts davon. Die
 * Funktion meldet deshalb gleich `false`, ohne nach einer Browser-Auswahl zu
 * suchen, die es dort nicht gibt.
 */
export function hasTextSelection(): boolean {
  if (Platform.OS !== 'web') return false;

  // `getSelection` fehlt in manchen Einbettungen (z. B. in einem Prerender
  // ohne DOM) – eine fehlende Auswahl ist dann schlicht keine.
  const selection = typeof window.getSelection === 'function' ? window.getSelection() : null;
  return Boolean(selection && !selection.isCollapsed && selection.toString().trim().length > 0);
}
