import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

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
          this.af.database.list('/authentication/users/' + success.uid).$ref.once('value').then(
            function (snapshot) {
              console.log('data of', snapshot.key, snapshot.child('isAdmin').val());
              return snapshot.child('isAdmin').val();
            }
          ).then(
            (result) => {
              if (!result) {
                console.log(success);
                this.router.navigate(['/dashboard']);
              } else {
                this.auth.signOut();
              }
            }
            );

        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/dashboard']);
        });
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
    this.router.navigate(['dashboard']);
  }

}
