import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
  import { localStorageSync } from 'ngrx-store-localstorage';
  import * as GetUsersReducers from './reducers/user-management/GetUsers.reducers';
  import * as getRolesReducers from './reducers/user-management/getRoles.reducers';
  import * as getGroupsReducers from './reducers/user-management/getGroups.reducers';
  import * as GetMasterpermissionReducers from './reducers/user-management/GetMasterpermission.reducers';
  import * as getDepartmentsReducers from './reducers/user-management/getDepartments.reducers';
  import { environment } from '../../environments/environment';


  export interface State {

    GetUsers: GetUsersReducers.State;
    getRoles: getRolesReducers.State;
    getGroups: getGroupsReducers.State;
    GetMasterpermission: GetMasterpermissionReducers.State;
    getDepartments: getDepartmentsReducers.State



  }

  export const reducers: ActionReducerMap<State> = {
    GetUsers : GetUsersReducers.reducer,
    getRoles : getRolesReducers.reducer,
    getGroups : getGroupsReducers.reducer,
    GetMasterpermission : GetMasterpermissionReducers.reducer,
    getDepartments : getDepartmentsReducers.reducer,

  };

  const reducerKeys = ['usernameToUserInformation'];
  export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: reducerKeys})(reducer);
  }

  export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {

      return reducer(state, action);
    };
  }


  export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

  export * from './selectors/index';




