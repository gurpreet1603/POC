import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../../reducers/user-management/getDepartments.reducers'

const state = createFeatureSelector<reducer.State>('getDepartments');


export const selectLoadinggetDepartments = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesgetDepartments= createSelector(
  state,
  state => state
);

export const selectStatesgetDepartmentsBody= createSelector(
  state,
  state => state.body
);

export const selectStatesgetDepartmentsData= createSelector(
  state,
  state => state.getDepartments
);
