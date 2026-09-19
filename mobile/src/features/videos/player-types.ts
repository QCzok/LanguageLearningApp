/**
 * Der Vertrag, den beide Fassungen des Players erfüllen – die native mit
 * einer Webansicht, die des Web-Clients mit einem eingesetzten Rahmen. Steht
 * getrennt, damit `YoutubePlayer.web.tsx` ihn nicht aus der nativen Datei
 * importieren muss (die dort gar nicht gebündelt wird).
 */
export interface YoutubePlayerProps {
  youtubeId: string;
  /** Sekunde, an der eingestiegen wird – die zuletzt gespeicherte Position. */
  startSec?: number;
  /** Im Sekundentakt, solange der Rahmen steht. */
  onProgress?: (positionSec: number, playing: boolean) => void;
  onEnded?: () => void;
  /** Das Video lässt sich nicht einbetten – meist ein Verbot des Kanals. */
  onUnplayable?: () => void;
}
