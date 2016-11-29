import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AdminDataService } from '../admin-data-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  private users: any[];
  private latestUsers: any[];

  wildcatForm: FormGroup;

  constructor(
    private ads: AdminDataService,
    public fb: FormBuilder
  ) {
    this.ads.getUsers().subscribe((data) => {
      this.users = data;
    })

    this.ads.getLatestUsers().subscribe((data) => {
      this.latestUsers = data;
    })

    this.wildcatForm = this.fb.group({
      title: '',
      summary: '',
      description: '',
      status: '',
      population: '',
      habitat: ''
    });
    this.wildcatForm.patchValue({
      status: 'inactive'
    });
  }
}
