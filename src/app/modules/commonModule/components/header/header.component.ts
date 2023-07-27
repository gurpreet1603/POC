import { Component } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  event$;
  even: any;
  constructor(private router:Router){

    this.event$
    =this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
            this.even =   event.url;
            }
          });
  }
  Logout(){
     localStorage.removeItem('userDetails')
    this.router.navigate(['/login']);

  }

}
