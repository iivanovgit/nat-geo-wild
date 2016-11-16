import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {
  private simpleText: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.simpleText = this.af.database.list('authentication/users/');


    this.af.database.list('/authentication/users/').$ref.once('value').then(
      function (snapshot) {
        console.log('data of', snapshot.key, snapshot.hasChild('jKKQ440QhwYvQNYxVwJlL20JtLh2')); //child('')
      }
    );

    // this.af.database.list('/authentication/users/{{uid}}').$ref.once('value').then(
    //   function (snapshot) {
    //     console.log('data of', snapshot.key, snapshot.val(), ); //child('jKKQ440QhwYvQNYxVwJlL20JtLh2')
    //   }
    // );
  }

}
