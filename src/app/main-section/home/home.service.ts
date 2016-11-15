import { Injectable } from '@angular/core';
import { FirebaseService } from '../../firebase/firebase-service';

export class Slide {
  constructor(
    public title: string,
    public url: string,
    public active: boolean) { }
}

@Injectable()
export class HomeService {


  constructor(private fs: FirebaseService) {
  }

  getSlides() {
    return this.fs.getHomeSlides();
  }
}
