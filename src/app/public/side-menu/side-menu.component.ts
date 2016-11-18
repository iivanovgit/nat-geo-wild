import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<boolean>();
  @Input() menuOpen: boolean = false;
  private search: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openSideMenu() {
    this.menuOpen = true;
    this.menuClicked.emit(this.menuOpen);
    this.search = false;
  }

  closeSideMenu() {
    this.menuOpen = false;
    this.menuClicked.emit(this.menuOpen);
  }

  toggleSearch() {
    this.search = !this.search;
  }
}
