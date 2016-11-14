import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-header',
  template: `
    <header>
          <h1>Admin Panel</h1>
    
          <ul>
            <li *ngIf="authenticated">
              <a href="#" (click)="signOut.emit()">Sign out</a>
            </li>
            
          </ul>
    </header>
  `
})

export class AdminHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
}