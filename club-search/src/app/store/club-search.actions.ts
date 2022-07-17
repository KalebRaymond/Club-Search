import { createAction, props } from '@ngrx/store';

import { IClub } from '../interfaces/club';

//Dispatching this getClubs action causes the getClubs$ effect to run
export const getClubs = createAction(
    "Get Clubs",    
);

export const getClubsSuccess = createAction(
    "Get Clubs Success",
    props<{clubs: IClub[]}>(),    
);

export const getClubsFailure = createAction(
    "Get Clubs Failure",
    props<{error: string}>(),
);

export const selectClub = createAction(
    "Select Club",
    props<{selectedClub: IClub}>(),
);

export const deselectClub = createAction(
    "Deselect Club",
);