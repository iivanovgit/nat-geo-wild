import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-header',
  template: `
    <md-toolbar color="primary">
      <span>Admin Panel</span>

      <!-- This fills the remaining space of the current row -->
      <span class="fill-remaining-space"></span>
      
      <span *ngIf="authenticated"><a href="#" md-button (click)="signOut.emit()">Sign out</a></span>
    </md-toolbar>
    
  `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    [md-button]:hover{
      color: #f6c717;
    }

    .username{
      color: #f6c717;
    }
  `]
})

export class AdminHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);

  
}