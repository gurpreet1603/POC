import { Action, createReducer, on } from '@ngrx/store';
import { GetMasterpermission, GetMasterpermissionBody,permissionResponse } from '../../types/user-management/GetMasterpermission.types';
import * as actions from '../../actions';

export interface State {
  GetMasterpermission: permissionResponse[];
  defaultPreferredWorkshop: GetMasterpermission[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: string;
  body: GetMasterpermissionBody;
}

export const initialState: State = {
  GetMasterpermission: [],
  defaultPreferredWorkshop:[],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: '',
  body:{
  },
};

const funReducer = createReducer(
  initialState,
  on(actions.GetMasterpermission, (state,action) => ({...state, isLoading: true})),
  on(actions.GetMasterpermissionSuccess, (state, result) => {
    return{
      ...state,
      defaultPreferredWorkshop: result.response,
      GetMasterpermission: result.response,
      isLoading: false,
      isLoadingSuccess: true
    }}),
  on(actions.GetMasterpermissionFailure, (state, result) => ({
      ...state,
      GetMasterpermission: [],
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure:result.error
  })),
);

export function reducer(state: State | undefined, action: Action): any {
  return funReducer(state, action);
}

