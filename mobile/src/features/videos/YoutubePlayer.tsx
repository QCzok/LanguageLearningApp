import React, { useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import type { WebViewMessageEvent } from 'react-native-webview';
import { youtubeEmbedUrl } from '@lingua/shared';
import { colors, radius } from '../../theme';
import type { YoutubePlayerProps } from './player-types';

/**
 * Der eingebettete YouTube-Player auf iOS und Android.
 *
 * Ein Video von YouTube lässt sich nicht mit `expo-video` abspielen – die
 * Adresse der eigentlichen Datei ist nicht öffentlich und ändert sich laufend.
 * Was es gibt, ist der Einbettungsrahmen, und der braucht eine Webansicht.
 * Deshalb hier eine `WebView` statt eines nativen Players.
 *
 * Darin steht nicht bloß ein `<iframe>`, sondern die IFrame-API von YouTube:
 * Nur über sie lässt sich erfahren, wie weit jemand gekommen ist. Die Seite
 * meldet Position und Zustand im Sekundentakt an die App zurück; ohne das
 * wüsste die Mediathek nichts von „weiterschauen" und nichts von „gesehen".
 *
 * Fürs Web gibt es eine eigene Fassung (`YoutubePlayer.web.tsx`), die den
 * Rahmen direkt ins Dokument setzt – Metro wählt sie automatisch.
 */
export default function YoutubePlayer({
  youtubeId,
  startSec = 0,
  onProgress,
  onEnded,
  onUnplayable,
}: YoutubePlayerProps) {
  const webview = useRef<WebView>(null);

  /*
    Nur beim Wechsel des Videos neu bauen. Stünde `startSec` in den
    Abhängigkeiten, lüde sich der Player bei jeder gespeicherten Position neu
    und spränge zurück an den Anfang der Meldung.
  */
  const html = useMemo(() => playerHtml(youtubeId, startSec), [youtubeId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMessage = useCallback(
    (event: WebViewMessageEvent) => {
      let message: PlayerMessage;
      try {
        message = JSON.parse(event.nativeEvent.data) as PlayerMessage;
      } catch {
        return;
      }

      if (message.type === 'progress') onProgress?.(message.positionSec, message.playing);
      if (message.type === 'ended') onEnded?.();
      if (message.type === 'error') onUnplayable?.();
    },
    [onProgress, onEnded, onUnplayable],
  );

  return (
    <View style={frameStyle}>
      <WebView
        ref={webview}
        source={{ html, baseUrl: EMBED_ORIGIN }}
        originWhitelist={['*']}
        onMessage={handleMessage}
        // Ohne diese beiden startet iOS das Video im Vollbild und verlässt die App.
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo
        javaScriptEnabled
        domStorageEnabled
        // Der Rahmen soll scrollen wie ein Bild, nicht wie eine Webseite.
        scrollEnabled={false}
        bounces={false}
        style={{ backgroundColor: '#000' }}
      />
    </View>
  );
}

type PlayerMessage =
  | { type: 'progress'; positionSec: number; playing: boolean }
  | { type: 'ended' }
  | { type: 'error' };

/**
 * `baseUrl` bestimmt die Herkunft der Seite. YouTube verlangt für die
 * IFrame-API eine, die zur `origin`-Angabe der Einbettung passt – mit dem
 * Vorgabewert `about:blank` verweigert der Player den Dienst.
 */
const EMBED_ORIGIN = 'https://www.youtube-nocookie.com';

/** Meldeabstand der Abspielposition. Dichter als nötig bringt nichts – gespeichert wird ohnehin seltener. */
const REPORT_MS = 1000;

function playerHtml(youtubeId: string, startSec: number): string {
  const embed = youtubeEmbedUrl(youtubeId, { startSec, origin: EMBED_ORIGIN });

  return `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <style>
      html, body { margin: 0; padding: 0; background: #000; overflow: hidden; }
      iframe { border: 0; display: block; width: 100%; height: 100%; position: absolute; inset: 0; }
    </style>
  </head>
  <body>
    <iframe id="player" src="${embed}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <script src="https://www.youtube.com/iframe_api"></script>
    <script>
      var post = function (payload) {
        if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage(JSON.stringify(payload));
      };

      // Die API greift den vorhandenen Rahmen auf, statt einen zweiten zu bauen.
      window.onYouTubeIframeAPIReady = function () {
        var player = new YT.Player('player', {
          events: {
            onReady: function () {
              setInterval(function () {
                var state = player.getPlayerState();
                post({
                  type: 'progress',
                  positionSec: Math.floor(player.getCurrentTime() || 0),
                  playing: state === YT.PlayerState.PLAYING,
                });
              }, ${REPORT_MS});
            },
            onStateChange: function (event) {
              if (event.data === YT.PlayerState.ENDED) post({ type: 'ended' });
            },
            // Kommt vor allem dann, wenn der Kanal die Einbettung untersagt.
            onError: function () {
              post({ type: 'error' });
            },
          },
        });
      };
    </script>
  </body>
</html>`;
}

const frameStyle = {
  // 16 : 9, das Seitenverhältnis so gut wie jedes YouTube-Videos.
  aspectRatio: 16 / 9,
  width: '100%' as const,
  borderRadius: radius.lg,
  overflow: 'hidden' as const,
  backgroundColor: colors.text,
};
