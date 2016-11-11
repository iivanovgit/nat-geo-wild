import { Component, OnDestroy, ApplicationRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  private appMenuOpen: boolean = false;

  constructor(
    private _titleService: Title,
    private _applicationRef: ApplicationRef,
    private _router: Router) {
    // _router.events.subscribe(() => {
    //   this._applicationRef.tick();
    //   setTimeout(() => {
    //     this._applicationRef.tick();
    //   }, 100);
    // });

    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let title = this.getTitle(_router.routerState, _router.routerState.root).join('-');
        // console.log('title', title);
        _titleService.setTitle(title);
      }
    });

  }

  getTitle(state, parent) {
    let data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
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