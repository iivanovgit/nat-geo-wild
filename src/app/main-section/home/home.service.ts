import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export class Slide {
  constructor(
    public title: string,
    public url: string,
    public active: boolean) { }
}

@Injectable()
export class HomeService {
  private slides: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.slides = af.database.list('/home/slides');
  }

  getSlides() { return this.slides; }
}
