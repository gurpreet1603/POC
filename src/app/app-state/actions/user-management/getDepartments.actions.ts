import { createAction, props } from '@ngrx/store';

 
export const getDepartments = createAction(
  '[GET_DEPARTMENTS] Get getDepartments',
  props<any>()
);

export const getDepartmentsSuccess = createAction(
'[GET_DEPARTMENTS] Get getDepartments Success',
  props<any>()
);

export const getDepartmentsFailure = createAction(
'[GET_DEPARTMENTS] Get getDepartments Failure',
  props<any>()
);


