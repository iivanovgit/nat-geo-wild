import { Component } from '@angular/core';
import { AuthService } from './admin-login/services/auth-service';

@Component({
  selector: 'app-admin',
  template: `
  <admin-header
      [authenticated]="auth.authenticated"
      (signOut)="signOut()"></admin-header>
  <router-outlet></router-outlet>
  `
})
export class AdminComponent{

  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}