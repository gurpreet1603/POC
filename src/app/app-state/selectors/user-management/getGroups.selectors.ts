import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../../reducers/user-management/getGroups.reducers'

const state = createFeatureSelector<reducer.State>('getGroups');


export const selectLoadinggetGroups = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesgetGroups= createSelector(
  state,
  state => state
);

export const selectStatesgetGroupsBody= createSelector(
  state,
  state => state.body
);

export const selectStatesgetGroupsData= createSelector(
  state,
  state => state.getGroups
);
