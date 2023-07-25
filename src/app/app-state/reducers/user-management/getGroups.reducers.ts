import { Action, createReducer, on } from '@ngrx/store';
import { getGroups, getGroupsBody } from '../../types/user-management/getGroups.types';
import * as actions from '../../actions';

export interface State {
  getGroups: getGroups[];
  defaultPreferredWorkshop: getGroups[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: string;
  body: getGroupsBody;
}

export const initialState: State = {
  getGroups: [],
  defaultPreferredWorkshop:[],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: '',
  body:{
  },
};

const funReducer = createReducer(
  initialState,
  on(actions.getGroups, (state,action) => ({...state, isLoading: true})),
  on(actions.getGroupsSuccess, (state, result) => {
    return{
      ...state,
      defaultPreferredWorkshop: result.response,
      getGroups: result.response,
      isLoading: false,
      isLoadingSuccess: true
    }}),
  on(actions.getGroupsFailure, (state, result) => ({
      ...state,
      getGroups: [],
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure:result.error
  })),
);

export function reducer(state: State | undefined, action: Action): any {
  return funReducer(state, action);
}

