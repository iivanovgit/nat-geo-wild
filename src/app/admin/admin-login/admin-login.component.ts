import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthService } from './services/auth-service';

@Component({
  templateUrl: 'admin-login.component.html'
})
export class AdminLoginComponent {
  public error: any;

  constructor(
    private af: AngularFire,
    private auth: AuthService,
    private router: Router) { }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/admin']);
        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/admin']);
        })
    } else {
      this.error = 'Your form is invalid';
    }
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
