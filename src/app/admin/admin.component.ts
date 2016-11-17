import { Component } from '@angular/core';
import { FirebaseAuth,FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-admin',
  template: `
  <admin-header
      [authenticated]=""
      (signOut)="signOut()"></admin-header>
  <router-outlet></router-outlet>
  `
})
export class AdminComponent {
  constructor(public auth: FirebaseAuth) {
  }

  signOut(): void {
    this.auth.logout();
  }
}