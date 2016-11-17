import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{

  private appMenuOpen: boolean = false;

  constructor() { }
  appOpenSideBar(value: boolean) {
    this.appMenuOpen = value;
  }

  appMenuClose() {
    this.appMenuOpen = false;
  }

}
