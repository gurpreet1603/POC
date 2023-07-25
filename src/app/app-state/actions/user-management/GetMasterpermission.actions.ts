import { createAction, props } from '@ngrx/store';

 
export const GetMasterpermission = createAction(
  '[GET_MASTER_PERMISSION] Get GetMasterpermission',
  props<any>()
);

export const GetMasterpermissionSuccess = createAction(
'[GET_MASTER_PERMISSION] Get GetMasterpermission Success',
  props<any>()
);

export const GetMasterpermissionFailure = createAction(
'[GET_MASTER_PERMISSION] Get GetMasterpermission Failure',
  props<any>()
);


