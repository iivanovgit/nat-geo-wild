import { Injectable } from '@angular/core';


export class Slide {
  constructor(
    public title: string,
    public url: string,
    public active: boolean) { }
}

let SLIDES = [{
  title: 'slide 1 title',
  url: '../../assets/images/slide1.jpg',
  active: false
}, {
  title: 'slide 2 title',
  url: '../../assets/images/slide2.jpg',
  active: false
}, {
  title: 'slide 3 title',
  url: '../../assets/images/slide3.jpg',
  active: true
}, {
  title: 'slide 1 title',
  url: '../../assets/images/slide1.jpg',
  active: false
}];

let slidesPromise = Promise.resolve(SLIDES);

@Injectable()
export class SlideService {
  getSlides() { return slidesPromise; }
}
