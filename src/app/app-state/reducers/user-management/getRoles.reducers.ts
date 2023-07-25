import { Action, createReducer, on } from '@ngrx/store';
import { getRoles, getRolesBody,GetRolesResponse } from '../../types/user-management/getRoles.types';
import * as actions from '../../actions';

export interface State {
  getRoles: GetRolesResponse;
  defaultPreferredWorkshop: getRoles[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: string;
  body: getRolesBody;
}

export const initialState: State = {
  getRoles: {
    "myRequest": [
        {
            "id": '',
            "tenant_Id": '',
            "tenant_Name": "",
            "name": "",
            "description": "",
            "is_Active": null,
            "created_By": 0,
            "created_By_Name": "",
            "created_On": "",
            "modified_By": 0,
            "modified_By_Name": null,
            "modified_On": "",
            "isWorkFlow": null,
            "action": 1,
            "approvedBy": 0,
            "approvedOn": "",
            "workFlowStatus": 0,
            "masterId": 0,
            "approvedByName": "",
            "remark": null
        },
    ],
    "pendingRequests": [
        {
          "id": '',
          "tenant_Id": '',
          "tenant_Name": "",
          "name": "",
          "description": "",
          "is_Active": null,
          "created_By": 0,
          "created_By_Name": "",
          "created_On": "",
          "modified_By": 0,
          "modified_By_Name": null,
          "modified_On": "",
          "isWorkFlow": null,
          "action": 1,
          "approvedBy": 0,
          "approvedOn": "",
          "workFlowStatus": 0,
          "masterId": 0,
          "approvedByName": "",
          "remark": null
        },
      
    ],
    "approvedRequests": [
        {
          "id": '',
          "tenant_Id": '',
          "tenant_Name": "",
          "name": "",
          "description": "",
          "is_Active": null,
          "created_By": 0,
          "created_By_Name": "",
          "created_On": "",
          "modified_By": 0,
          "modified_By_Name": null,
          "modified_On": "",
          "isWorkFlow": null,
          "action": 1,
          "approvedBy": 0,
          "approvedOn": "",
          "workFlowStatus": 0,
          "masterId": 0,
          "approvedByName": "",
          "remark": null
        },
    ],
    "allRoles": null,
    "isWorkFlowEnabled": null
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
  on(actions.getRoles, (state,action) => ({...state, isLoading: true})),
  on(actions.getRolesSuccess, (state, result) => {
    return{
      ...state,
      defaultPreferredWorkshop: result.response,
      getRoles: result.response,
      isLoading: false,
      isLoadingSuccess: true
    }}),
  on(actions.getRolesFailure, (state, result) => ({
      ...state,
      getRoles: result,
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure:result.error
  })),
);

export function reducer(state: State | undefined, action: Action): any {
  return funReducer(state, action);
}

