import { UsersService } from '../../../modules/usermanagement/service/users/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as allActions  from '../../actions';


@Injectable()
export class GetMasterpermissionEffects {
    constructor(
        private actions$: Actions,
        private UserService: UsersService,  
    ){ }
    GetMasterpermission$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.GetMasterpermission),
    exhaustMap(action =>
    this.UserService.GetMasterpermission({body:action}).pipe(
      map(response =>
        {
      return allActions.GetMasterpermissionSuccess({response})
          }),
          catchError((error: any) => of(allActions.GetMasterpermissionFailure(error))))
      )
    )
  );

}
