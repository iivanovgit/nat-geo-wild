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

  items: FirebaseListObservable<any>;

  constructor(
    private service: SlideService,
    private route: ActivatedRoute,
    af: AngularFire) {
    this.items = af.database.list('/home/slides');
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
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].active = false;
    }
    this.slides[index].active = true;
  }

}
