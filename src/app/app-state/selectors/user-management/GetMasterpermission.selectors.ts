import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../../reducers/user-management/GetMasterpermission.reducers'

const state = createFeatureSelector<reducer.State>('GetMasterpermission');


export const selectLoadingGetMasterpermission = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesGetMasterpermission= createSelector(
  state,
  state => state
);

export const selectStatesGetMasterpermissionBody= createSelector(
  state,
  state => state.body
);

export const selectStatesGetMasterpermissionData= createSelector(
  state,
  state => state.GetMasterpermission
);
