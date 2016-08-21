import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Wildcat, WildcatsService } from './wildcats.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'wildcat.component.html',
  styleUrls: ['wildcats.component.css']
})
export class WildcatComponent implements OnInit, OnDestroy {
  wildcat: Wildcat;
  randNumb: number;
  private sub: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WildcatsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getWildcat(id).then(wildcat => this.wildcat = wildcat);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  gotoWildcats() {
    let wildcatId = this.wildcat ? this.wildcat.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/wildcats', { id: wildcatId, foo: 'foo' }]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/