import { Component } from '@angular/core';
import { AdminAuthService } from './admin-login/services/admin-auth-service';

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

  constructor(private auth: AdminAuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}