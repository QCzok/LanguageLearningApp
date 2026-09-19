import React, { useEffect, useId, useRef } from 'react';
import { View } from 'react-native';
import { youtubeEmbedUrl } from '@lingua/shared';
import { colors, radius } from '../../theme';
import type { YoutubePlayerProps } from './player-types';

/**
 * Derselbe Player im Web-Client.
 *
 * Hier braucht es keine Webansicht – die App *ist* eine Webseite. Der Rahmen
 * wird direkt ins Dokument gesetzt und die IFrame-API von YouTube im selben
 * Dokument geladen; sie liefert Position und Zustand genauso wie in der
 * nativen Fassung, nur ohne Umweg über Nachrichten zwischen zwei Welten.
 *
 * Metro wählt diese Datei automatisch für die Web-Plattform; unter iOS und
 * Android gilt `YoutubePlayer.tsx`.
 */
export default function YoutubePlayer({
  youtubeId,
  startSec = 0,
  onProgress,
  onEnded,
  onUnplayable,
}: YoutubePlayerProps) {
  // `useId` liefert je Einbettung eine eigene Kennung – die IFrame-API spricht
  // ihren Rahmen über die Element-ID an, und zwei Player dürfen sich nicht
  // gegenseitig übernehmen.
  const elementId = `yt-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`;

  /*
    Die Rückrufe wandern durch eine Referenz in den Player. Sonst müsste der
    Effekt bei jedem Rendern neu laufen – und jedes Neuladen des Rahmens
    setzte das Video zurück an den Anfang.
  */
  const handlers = useRef({ onProgress, onEnded, onUnplayable });
  handlers.current = { onProgress, onEnded, onUnplayable };

  useEffect(() => {
    let player: YtPlayer | undefined;
    let timer: ReturnType<typeof setInterval> | undefined;
    let cancelled = false;

    void loadIframeApi().then((YT) => {
      if (cancelled) return;
      player = new YT.Player(elementId, {
        events: {
          onReady: () => {
            timer = setInterval(() => {
              if (!player) return;
              handlers.current.onProgress?.(
                Math.floor(player.getCurrentTime() || 0),
                player.getPlayerState() === YT.PlayerState.PLAYING,
              );
            }, REPORT_MS);
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) handlers.current.onEnded?.();
          },
          onError: () => handlers.current.onUnplayable?.(),
        },
      });
    });

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
      player?.destroy?.();
    };
  }, [elementId, youtubeId]);

  return (
    <View style={frameStyle}>
      {React.createElement('iframe', {
        id: elementId,
        src: youtubeEmbedUrl(youtubeId, { startSec, origin: window.location.origin }),
        allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
        allowFullScreen: true,
        style: { border: 0, width: '100%', height: '100%', display: 'block' },
      })}
    </View>
  );
}

/** Meldeabstand der Abspielposition. */
const REPORT_MS = 1000;

interface YtPlayer {
  getCurrentTime(): number;
  getPlayerState(): number;
  destroy?(): void;
}

interface YtNamespace {
  Player: new (
    element: string,
    options: {
      events: {
        onReady: () => void;
        onStateChange: (event: { data: number }) => void;
        onError: () => void;
      };
    },
  ) => YtPlayer;
  PlayerState: { PLAYING: number; ENDED: number };
}

type WindowWithYt = Window & {
  YT?: YtNamespace;
  onYouTubeIframeAPIReady?: () => void;
};

/**
 * Lädt `iframe_api` genau einmal je Seitenaufruf und gibt danach immer
 * dasselbe Versprechen zurück – zwei Player auf einer Seite würden das Skript
 * sonst zweimal einhängen, und der zweite Aufruf überschriebe den Rückruf des
 * ersten.
 */
let apiPromise: Promise<YtNamespace> | undefined;

function loadIframeApi(): Promise<YtNamespace> {
  const target = window as WindowWithYt;
  if (target.YT?.Player) return Promise.resolve(target.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<YtNamespace>((resolve) => {
    target.onYouTubeIframeAPIReady = () => resolve(target.YT!);
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  });
  return apiPromise;
}

const frameStyle = {
  aspectRatio: 16 / 9,
  width: '100%' as const,
  borderRadius: radius.lg,
  overflow: 'hidden' as const,
  backgroundColor: colors.text,
};
