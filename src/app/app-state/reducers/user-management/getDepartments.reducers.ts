import { Action, createReducer, on } from '@ngrx/store';
import { getDepartments, getDepartmentsBody,getDepartmentResponse, AllDepartments } from '../../types/user-management/getDepartments.types';
import * as actions from '../../actions';

export interface State {
  getDepartments: getDepartmentResponse;
  defaultPreferredWorkshop: getDepartments[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: string;
  body: getDepartmentsBody;
}

export const initialState: State = {
  getDepartments:{
    approvedRequests: null,
    isWorkFlowEnabled:null,
    myRequest:null,
    pendingRequests: null,
    allDepartments:[]
  },
  defaultPreferredWorkshop:[], 
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: '',
  body:{
  },
};

const funReducer = createReducer(
  initialState,
  on(actions.getDepartments, (state,action) => ({...state, isLoading: true})),
  on(actions.getDepartmentsSuccess, (state, result) => {
    return{
      ...state,
      defaultPreferredWorkshop: result.response,
      getDepartments: result.response,
      isLoading: false,
      isLoadingSuccess: true
    }}),
  on(actions.getDepartmentsFailure, (state, result) => ({
      ...state,
      getDepartments: result,
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure:result.error
  })),
);

export function reducer(state: State | undefined, action: Action): any {
  return funReducer(state, action);
}

