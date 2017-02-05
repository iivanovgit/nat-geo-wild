import { Component } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-admin',
  template: `
  <admin-header
      [authenticated]="authenticated"
      (signOut)="signOut()"></admin-header>
  <router-outlet></router-outlet>
  `
})
export class AdminComponent {
  private authState: FirebaseAuthState = null;

  constructor(public auth: AngularFireAuth) {
    auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      console.log(state);
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }
  signOut(): void {
    this.auth.logout();
  }
}