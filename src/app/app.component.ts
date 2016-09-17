import { Component, OnDestroy, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  private appMenuOpen: boolean = false;

  constructor(
    private _applicationRef: ApplicationRef,
    private _router: Router) {
    _router.events.subscribe(() => {
      this._applicationRef.tick();
      setTimeout(() => {
        this._applicationRef.tick();
      }, 100);
    });
  }

  ngOnDestroy() {

  }

  appOpenSideBar(value: boolean) {
    this.appMenuOpen = value;
  }

  appMenuClose() {
    this.appMenuOpen = false;
  }
}