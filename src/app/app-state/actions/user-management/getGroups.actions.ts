import { createAction, props } from '@ngrx/store';

 
export const getGroups = createAction(
  '[GET_GROUPS] Get getGroups',
  props<any>()
);

export const getGroupsSuccess = createAction(
'[GET_GROUPS] Get getGroups Success',
  props<any>()
);

export const getGroupsFailure = createAction(
'[GET_GROUPS] Get getGroups Failure',
  props<any>()
);


