import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AdminAuthService } from '../services/admin-Auth-service';


@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private auth: AdminAuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.auth$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['admin-login']);
        }
      });
  }
}
