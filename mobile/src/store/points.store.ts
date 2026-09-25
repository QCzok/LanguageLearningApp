import { create } from 'zustand';
import type { DashboardDto, PointsAward } from '@lingua/shared';
import { queryClient } from '../api/query-client';
import { useAuthStore } from './auth.store';

/**
 * Der gemeinsame Punktestand der App – und die kurze Gratulation, wenn neue
 * Punkte dazukommen.
 *
 * Vokabeln, Lektionen, Buchseiten, Lesen und Hören melden ihre Ergebnisse alle
 * über `awardPoints`. Dadurch zieht die Startseite den Stand sofort nach, ohne
 * neu zu laden, und die Gratulation sieht überall gleich aus (siehe
 * `PointsCelebration`).
 */
interface PointsState {
  /** Die gerade sichtbare Gratulation; `id` startet die Animation neu. */
  celebration: { id: number; points: number } | null;
  celebrate: (points: number) => void;
  dismiss: () => void;
}

export const usePointsStore = create<PointsState>((set) => ({
  celebration: null,
  celebrate(points) {
    if (points <= 0) return;
    set({ celebration: { id: Date.now(), points } });
  },
  dismiss() {
    set({ celebration: null });
  },
}));

/**
 * Übernimmt die Punkte aus einer Serverantwort.
 *
 * @param celebrate `false`, wenn die Punkte in kleinen Schritten kommen und
 *   die Gratulation erst am Ende gesammelt folgt – etwa pro Vokabelkarte.
 */
export function awardPoints(award: PointsAward, { celebrate = true } = {}): void {
  useAuthStore.setState((state) =>
    state.user ? { user: { ...state.user, xp: award.totalPoints } } : state,
  );

  queryClient.setQueryData<DashboardDto>(['dashboard'], (dashboard) =>
    dashboard
      ? {
          ...dashboard,
          user: { ...dashboard.user, xp: award.totalPoints },
          pointsToday: dashboard.pointsToday + award.pointsEarned,
        }
      : dashboard,
  );

  if (award.pointsEarned > 0) {
    // Die übrigen Tageszahlen (Minuten, Wochenkurve) kommen vom Server.
    void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    void queryClient.invalidateQueries({ queryKey: ['study-overview'] });
    if (celebrate) usePointsStore.getState().celebrate(award.pointsEarned);
  }
}
