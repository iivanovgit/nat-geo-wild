import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(
    private auth: AngularFireAuth
  ) { }

  signOut(){
    return this.auth.logout();
  }

}
