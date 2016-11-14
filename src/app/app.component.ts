import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sub: Subscription;


  constructor(private titleService: Title, private router: Router) {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(_ => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .flatMap(route => route.data)
      .subscribe(data => {
        this.titleService.setTitle(data['title'] || 'My default title');
      });
  }

}