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
  isLoggedIn = false;
  currentUser: User;

  logInOut() {
    this.isLoggedIn = !this.isLoggedIn;
    this.currentUser = this.isLoggedIn ? someUser : undefined;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
