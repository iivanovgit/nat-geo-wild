import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  private appMenuOpen: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

   appOpenSideBar(value: boolean) {
    this.appMenuOpen = value;
  }

  appMenuClose() {
    this.appMenuOpen = false;
  }

}
