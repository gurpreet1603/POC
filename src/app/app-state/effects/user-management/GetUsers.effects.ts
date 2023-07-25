
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as allActions  from '../../actions';
import { MessageService } from 'src/app/service/message-service/message.service';


@Injectable()
export class GetUsersEffects {
    constructor(
        private actions$: Actions,
        private UserService: MessageService,
        private readonly store: Store,
    ){ }
  //   GetUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(allActions.GetUsers),
  //   exhaustMap(action =>
  //   this.UserService.GetUsers({body:action}).pipe(
  //   map(response =>
  //       {
  //     return allActions.GetUsersSuccess({response})
  //         }),
  //         catchError((error: any) => of(allActions.GetUsersFailure(error))))
  //     )
  //   )
  // );

}
