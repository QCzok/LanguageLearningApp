import { useCallback, useRef } from 'react';
import type { PointsAward } from '@lingua/shared';
import { awardPoints, usePointsStore } from '../store/points.store';

/**
 * Sammelt Punkte, die in vielen kleinen Schritten kommen – etwa pro
 * Vokabelkarte –, und gratuliert einmal am Ende statt nach jeder Karte.
 *
 * `track` reicht die Anfrage unverändert durch und bucht ihr Ergebnis still
 * (Punktestand und Startseite ziehen sofort nach). `finish` wartet auf alle
 * noch laufenden Anfragen, damit auch die Punkte der letzten Karte in der
 * Gratulation stecken.
 */
export function usePointsBatch() {
  const pending = useRef<Array<Promise<number>>>([]);

  const track = useCallback(<T extends PointsAward>(request: Promise<T>): Promise<T> => {
    pending.current.push(
      request.then(
        (award) => {
          awardPoints(award, { celebrate: false });
          return award.pointsEarned;
        },
        () => 0,
      ),
    );
    return request;
  }, []);

  const finish = useCallback(() => {
    const all = pending.current;
    pending.current = [];
    void Promise.all(all).then((earned) => {
      usePointsStore.getState().celebrate(earned.reduce((sum, points) => sum + points, 0));
    });
  }, []);

  return { track, finish };
}
