import { Action, createReducer, on } from '@ngrx/store';

import { IClub } from '../interfaces/club';

import * as Actions from "./club-search.actions";

export interface IState {
    selectedClub: IClub | null,
    clubs: IClub[],
}

export const initialState: IState = {
    selectedClub: {
        name: "Test",
        description: "Mock data for testing. Lorem ipsum dolor."
    },
    clubs: []
}

//Executes a certain on() function depending on the action that is dispatched
export function reducer(existingState: IState, action: Action) {
    return createReducer(
            initialState,
            on(Actions.getClubsSuccess, (state, {clubs}): IState => {
                return {
                    ...state,
                    clubs: clubs,
                }
            }),
            on(Actions.getClubsFailure, (state, {error}): IState => {
                console.log("Failed to retrieve clubs from backend: ", error);
                return state;
            }),
            on(Actions.selectClub, (state, {selectedClub}): IState => {
                return {
                    ...state,
                    selectedClub: selectedClub
                };
            }),
            on(Actions.deselectClub, (state): IState => {
                return {
                    ...state,
                    selectedClub: null
                };
            })
    )(existingState, action);
}