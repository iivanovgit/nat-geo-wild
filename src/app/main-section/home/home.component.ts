import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Slide, SlideService } from './slide.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isActiveSlide: boolean = false;
  slides: Slide[];

  private sub: Subscription;

  fireSlides: Slide[];

  // items: FirebaseListObservable<any>;

  constructor(
    private service: SlideService,
    private route: ActivatedRoute,
    af: AngularFire) {
    // this.items = af.database.list('/home/slides');
    af.database.list('home/slides').subscribe(item => {
      this.fireSlides = item;
      console.log('new proba : ' + JSON.stringify(this.fireSlides));
    });
  }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.service.getSlides()
          .then(slides => this.slides = slides);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  viewSlide(index) {
    for (let i = 0; i < this.fireSlides.length; i++) {
      this.fireSlides[i].active = false;
    }
    this.fireSlides[index].active = true;
  }

}
