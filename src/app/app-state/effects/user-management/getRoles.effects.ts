import { UsersService } from '../../../modules/usermanagement/service/users/users.service';
import { AuthService } from 'src/app/modules/auth/service/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as allActions  from '../../actions';


@Injectable()
export class getRolesEffects {
    constructor(
        private actions$: Actions,
        private UserService: UsersService,
        private readonly store: Store,
    ){ }
    getRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.getRoles),
    exhaustMap(action =>
    this.UserService.getRoles({body:action}).pipe(
      map(response =>
        {
      return allActions.getRolesSuccess({response})
          }),
          catchError((error: any) => of(allActions.getRolesFailure(error))))
      )
    )
  );

}
