import { UsersService } from '../../../modules/usermanagement/service/users/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as allActions  from '../../actions';


@Injectable()
export class getGroupsEffects {
    constructor(
        private actions$: Actions,
        private UserService: UsersService,
    ){ }
    getGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.getGroups),
    exhaustMap(action =>
    this.UserService.getGroups({body:action}).pipe(
      map(response =>
        {
      return allActions.getGroupsSuccess({response})
          }),
          catchError((error: any) => of(allActions.getGroupsFailure(error))))
      )
    )
  );

}
