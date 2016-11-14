import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  templateUrl: 'admin-login.component.html'
})
export class AdminLoginComponent {
  model: any = {};
  loading = false;
  
  constructor(private auth: AuthService, private router: Router) { }

  signInWithEmailAndPassword(u, p): void {
    let user = u;
    let pass = p;
    this.auth.signInWithEmailAndPassword(user, pass)
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['admin']);
  }

}
