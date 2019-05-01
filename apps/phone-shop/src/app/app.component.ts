import { Component } from "@angular/core";
import { User } from '@tuskphone/data-access-interfaces';
import { UserService } from '@tuskphone/user-data';

@Component({
  selector: "tuskphone-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "phone-shop";
  currentUser: User;
  
  //TODO: implement logic when universal is here
  isBrowser = true;

  constructor(private readonly userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
  }

  toggleLogIn() {
    this.userService.logInOut();
    this.currentUser = this.userService.getCurrentUser();
  }
}
