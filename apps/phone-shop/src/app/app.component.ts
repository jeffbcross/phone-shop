import { Component, Inject, PLATFORM_ID } from "@angular/core";
import {style, state, animate, transition, trigger} from '@angular/animations';

import { User } from '@tuskphone/data-access-interfaces';
import { UserService } from '@tuskphone/user-data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "tuskphone-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(700, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({opacity:0})) 
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
