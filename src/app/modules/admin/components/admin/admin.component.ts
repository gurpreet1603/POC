import { Component } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  event$
  even: any;
  constructor(public router : Router){
    this.event$
    =this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
            this.even =   event.url;
            }
          });
  }

}
