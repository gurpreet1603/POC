import { UsersService } from '../../../modules/usermanagement/service/users/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as allActions  from '../../actions';


@Injectable()
export class getDepartmentsEffects {
    constructor(
        private actions$: Actions,
        private UserService: UsersService,
    ){ }
    getDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.getDepartments),
    exhaustMap(action =>
    this.UserService.GetDepartments({body:action}).pipe(
      map(response =>
        {
      return allActions.getDepartmentsSuccess({response})
          }),
          catchError((error: any) => of(allActions.getDepartmentsFailure(error))))
      )
    )
  );

}
