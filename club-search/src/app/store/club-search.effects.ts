import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ClubSearchService } from '../services/club-search.service';

import * as ClubActions from './club-search.actions';

@Injectable()
export class ClubSearchEffects {
    constructor(
        private readonly actions: Actions,
        private readonly clubSearchService: ClubSearchService,
    ) {}

    /* This effect is called whenever a getClubs action is dispatched. Retrieves the
     * list of clubs from the backend server. If successful, dispatches a getClubsSuccess
     * action; otherwise, dispatches a getClubsFailure action. These actions activate
     * corresponding branches in the reducer function in club-search.reducer.ts
     */
    getClubs$ = createEffect(() => this.actions.pipe(
            ofType(ClubActions.getClubs),
            switchMap(() => 
                this.clubSearchService._getClubs().pipe(
                    map(data => ClubActions.getClubsSuccess({ clubs: data })),
                    catchError(error => of(ClubActions.getClubsFailure({ error: error })))
                ),
            )
        )
    );
}