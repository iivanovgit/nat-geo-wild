import { Component } from '@angular/core';

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html'
})
export class LoginWrapperComponent{

  private appMenuOpen: boolean = false;

  constructor() { }
  appOpenSideBar(value: boolean) {
    this.appMenuOpen = value;
  }

  appMenuClose() {
    this.appMenuOpen = false;
  }

}
