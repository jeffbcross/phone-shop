import { Injectable } from '@angular/core';
import { User } from '@tuskphone/data-access-interfaces';

const someUser: User = {
  name: 'Kaitlyn',
  goodCredit: true
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = true;
  currentUser = someUser;

  logInOut() {
    this.isLoggedIn = !this.isLoggedIn;
    this.currentUser = this.isLoggedIn ? someUser : undefined;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
