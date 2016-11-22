import { Component, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../../firebase';
import { AuthService } from '../login/services/auth-service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirm').value
    ? null : { 'nomatch': true };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {


  form: FormGroup;
  newBookForm: FormGroup;
  bookDataForm: FormGroup;

  latestBookTitle: String;

  bookChapters: any[];
  bookChapterAmount: number;
  bookTitle: string;
  bookStatus: number;

  constructor(
    private auth: AuthService,
    private fs: FirebaseService,
    public fb: FormBuilder
  ) {
    console.log('auth token', this.auth.token);

    this.fs.getBooksData(this.auth.id)
      .subscribe((data) => {
        console.log('all books', data);
      })

    this.fs.getLatestBook(this.auth.id)
      .subscribe((data) => {
        this.latestBookTitle = data[0].title;
      })


    this.newBookForm = this.fb.group({
      uid: auth.id,
      status: 1,
      title: '',
      gender: '',
      type: ''
    });
    this.newBookForm.patchValue({
      gender: 'son',
      type: 'son'
    });

    this.bookDataForm = this.fb.group({
      title: ''
    })


  }

  ngOnDestroy() {

  }

}
