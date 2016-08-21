import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Wildcat, WildcatsService } from './wildcats.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'wildcats.component.html',
  styleUrls: ['wildcats.component.css']
})
export class WildcatsComponent implements OnInit, OnDestroy {
  wildcats: Wildcat[];

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: WildcatsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.service.getWildcats()
          .then(wildcats => this.wildcats = wildcats);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // isSelected(wildcat: Wildcat) { return wildcat.id === this.selectedId; }

  onSelect(wildcat: Wildcat) {
    this.router.navigate(['/wildcats', wildcat.id]);
  }

}
