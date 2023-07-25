import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './index';
import { GetUsersEffects,} from './effects/user-management/GetUsers.effects';
import { getDepartmentsEffects,} from './effects/user-management/getDepartments.effects';


import{EffectsModule} from '@ngrx/effects'
import {getGroupsEffects , GetMasterpermissionEffects, getRolesEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([

      GetUsersEffects,
      getRolesEffects,
      getGroupsEffects,
      GetMasterpermissionEffects,
      getDepartmentsEffects


    ]),
  ],
  exports: [StoreModule, EffectsModule],
})

export class AppStateModule {}
