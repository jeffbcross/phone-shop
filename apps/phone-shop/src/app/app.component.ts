import { Component, Inject, PLATFORM_ID } from "@angular/core";
import {style, animate, transition, trigger} from '@angular/animations';

import { User } from '@tuskphone/data-access-interfaces';
import { UserService } from '@tuskphone/user-data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "tuskphone-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(800, style({opacity:1})) 
      ])
    ])
  ]
})
export class AppComponent {
  title = "phone-shop";
  currentUser: User;
  isBrowser: boolean;

  constructor(
    private readonly userService: UserService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.currentUser = this.userService.getCurrentUser();    
  }

  toggleLogIn() {
    this.userService.logInOut();
    this.currentUser = this.userService.getCurrentUser();
  }
}
