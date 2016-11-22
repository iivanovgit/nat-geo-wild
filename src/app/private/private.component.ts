import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-private',
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.Emulated
})
export class PrivateComponent {

  constructor() { }
 
}
