import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: 'main-section.component.html',
  styleUrls: ['main-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainSectionComponent implements OnInit {

  @Input() menuClicked: Boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
