import { Action, createReducer, on } from '@ngrx/store';

import { IClub } from '../interfaces/club';

import * as Actions from "./club-search.actions";

export interface IState {
    selectedClub: IClub,
    clubs: IClub[],
}

export const initialState: IState = {
    selectedClub: {
        name: "",
        description: ""
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
            })
    )(existingState, action);
}