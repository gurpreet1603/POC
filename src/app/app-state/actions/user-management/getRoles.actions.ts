import { createAction, props } from '@ngrx/store';

 
export const getRoles = createAction(
  '[GET_ROLES] Get getRoles',
  props<any>()
);

export const getRolesSuccess = createAction(
'[GET_ROLES] Get getRoles Success',
  props<any>()
);

export const getRolesFailure = createAction(
'[GET_ROLES] Get getRoles Failure',
  props<any>()
);


