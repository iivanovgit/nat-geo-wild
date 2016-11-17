import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AdminAuthService } from './services/admin-auth-service';

@Component({
  templateUrl: 'admin-login.component.html'
})
export class AdminLoginComponent {
  public error: any;

  constructor(
    private af: AngularFire,
    private auth: AdminAuthService,
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
              if (result) {
                console.log(success);
                this.router.navigate(['/admin']);
              } else {
                 this.auth.signOut();
              }
            }
            );

        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/admin']);
        });
    } else {
      this.error = 'Your form is invalid';
    }
  }
  
  private postSignIn(): void {
    this.router.navigate(['admin']);
  }

}
