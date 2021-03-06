import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2';


@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AngularFireAuth,
    private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['admin-login']);
        }
      });
  }
}
