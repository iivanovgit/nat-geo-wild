import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AdminAuthService {
  private authState: FirebaseAuthState = null;


  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number, method): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({ provider, method })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }


  signOut(): void {
    this.auth$.logout();
  }
}
