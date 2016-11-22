import { Component } from '@angular/core';
import { AuthService } from '../login/services/auth-service';
import { FirebaseService } from '../../firebase';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  private userName;

  constructor(
    private auth: AuthService,
    private fs: FirebaseService
  ) {
    this.fs.getUserData(this.auth.id).subscribe((data)=>{
      this.userName = data.name;
      console.log(data);
    })
  }

}
