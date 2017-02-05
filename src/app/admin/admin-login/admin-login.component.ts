import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Component({
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.css']
})
export class AdminLoginComponent {
  public error: any;

  constructor(
    private af: AngularFire,
    private auth: AngularFireAuth,
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
                 this.auth.logout();
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

}
