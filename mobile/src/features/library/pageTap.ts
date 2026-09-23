import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import type { GestureResponderEvent } from 'react-native';

/** Weiter darf der Finger nicht wandern, sonst war es ein Wischen, kein Tipp. */
const TAP_SLOP = 10;

/** Länger gedrückt ist kein Tipp mehr – auf Android beginnt dann die Textauswahl. */
const TAP_MAX_MS = 350;

/**
 * Ein Knopf innerhalb der Seite meldet hierüber, dass der Tipp ihm galt – die
 * Seite schaltet dann ihre Leisten nicht um.
 */
const PageTapContext = createContext<() => void>(() => {});

export const PageTapProvider = PageTapContext.Provider;

export function useClaimPageTap() {
  return useContext(PageTapContext);
}

/**
 * Tipp-Erkennung, die die Berührung nicht an sich reißt.
 *
 * Gebraucht auf Android, wo eine Fläche mit markierbarem Text auf einen Tipp
 * reagieren soll. Ein `Pressable` wird dort beim ersten Berühren zum
 * JS-Responder, und Android leitet ihm ab da jede Bewegung des Fingers zu
 * (`JSResponderHandler.onInterceptTouchEvent`) – der Text darunter bekommt
 * ein `CANCEL`, das lange Drücken zum Markieren kommt nie an.
 *
 * `onTouchStart`/`onTouchEnd` hören nur zu, statt die Berührung zu übernehmen.
 * Ein Tipp ist, was kurz und ohne Wandern bleibt. Ausgelöst wird einen Takt
 * später: Bis dahin kann ein Knopf in der Fläche den Tipp für sich beanspruchen
 * (`claim`) – egal, ob sein `onPress` vor oder nach diesem `onTouchEnd` läuft.
 */
export function useTapWithoutResponder(onTap: () => void) {
  const start = useRef<{ x: number; y: number; at: number } | null>(null);
  const claimed = useRef(false);
  const onTapRef = useRef(onTap);
  onTapRef.current = onTap;

  const claim = useCallback(() => {
    claimed.current = true;
  }, []);

  const handlers = useMemo(
    () => ({
      onTouchStart: (event: GestureResponderEvent) => {
        const { touches, pageX, pageY } = event.nativeEvent;
        claimed.current = false;
        // Zwei Finger (Zoomen) sind nie ein Tipp.
        start.current = touches.length > 1 ? null : { x: pageX, y: pageY, at: Date.now() };
      },
      onTouchMove: (event: GestureResponderEvent) => {
        const origin = start.current;
        if (!origin) return;
        const { pageX, pageY } = event.nativeEvent;
        if (Math.abs(pageX - origin.x) > TAP_SLOP || Math.abs(pageY - origin.y) > TAP_SLOP) {
          start.current = null;
        }
      },
      onTouchEnd: () => {
        const origin = start.current;
        start.current = null;
        if (!origin || Date.now() - origin.at > TAP_MAX_MS) return;
        setTimeout(() => {
          if (!claimed.current) onTapRef.current();
        }, 0);
      },
      onTouchCancel: () => {
        start.current = null;
      },
    }),
    [],
  );

  return { handlers, claim };
}
