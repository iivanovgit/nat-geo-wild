import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service';


@Injectable()
export class UnauthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._auth.auth$
      .take(1)
      .map(authState => !authState)
      .do(unauthenticated => {
        if (!unauthenticated) {
          this._router.navigate(['admin']);
        }
      });
  }
}
