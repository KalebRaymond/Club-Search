import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { IClub } from "../interfaces/club";
import { IState } from "../store/club-search.reducer";

import * as Actions from "../store/club-search.actions";
import * as Selectors from "../store/club-search.selector";

@Injectable({
    providedIn: 'root'
})
export class ClubSearchService {
    clubs$: Observable<IClub[]> = new Observable<IClub[]>();

    constructor(
        private readonly httpClient: HttpClient,
        private readonly store: Store<IState>
    ) {
        this.clubs$ = this.store.pipe(select(Selectors.getClubs));
    }

    getClubs(): void {
        //Dispatch a "Get Clubs" action. Activates the getClubs$ effect in club-search.effects.ts
        this.store.dispatch(Actions.getClubs());
    }

    _getClubs(): Observable<IClub[]> {
        return this.httpClient.get<IClub[]>(`${environment.apiUrl + environment.apiPath.clubs}`);
    }
} 