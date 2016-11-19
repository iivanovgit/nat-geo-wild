import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class FirebaseService {
    private homeSlides: FirebaseListObservable<any>;

    constructor(private af: AngularFire) {
    }

    getHomeSlides() {
        return this.homeSlides = this.af.database.list('public/home/slides');
    }
}
