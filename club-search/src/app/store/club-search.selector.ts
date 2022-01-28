import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from './club-search.reducer';

export const getAppState = createFeatureSelector<IState>('club-search');

export const getSelectedClub = createSelector(
    getAppState,
    (state: IState) => state.selectedClub,
);

export const getClubs = createSelector(
    getAppState,
    (state: IState) => state.clubs,
);