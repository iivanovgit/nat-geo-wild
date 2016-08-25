import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private appMenuOpen: boolean = false;

  appOpenSideBar(value: boolean) {
    this.appMenuOpen = value;
  }

  appMenuClose() {
    this.appMenuOpen = false;
  }
}
