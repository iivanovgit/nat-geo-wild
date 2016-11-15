import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
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

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github, AuthMethods.Redirect);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google, AuthMethods.Popup);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter, AuthMethods.Redirect);
  }

  signOut(): void {
    this.auth$.logout();
  }
}
