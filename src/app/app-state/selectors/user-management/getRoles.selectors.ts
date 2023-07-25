import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../../reducers/user-management/getRoles.reducers'

const state = createFeatureSelector<reducer.State>('getRoles');


export const selectLoadinggetRoles = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesgetRoles= createSelector(
  state,
  state => state
);

export const selectStatesgetRolesBody= createSelector(
  state,
  state => state.body
);

export const selectStatesgetRolesData= createSelector(
  state,
  state => state.getRoles
);
