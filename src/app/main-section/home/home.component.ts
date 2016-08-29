import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Slide, HomeService } from './home.service';
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


  constructor(
    private service: HomeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(() => {
        this.service.getSlides()
          .subscribe(slides => {
            this.slides = slides;
          });
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
