import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WildcatsComponent }    from './wildcats.component';
import { WildcatComponent }  from './wildcat.component';

import { WildcatsService } from './wildcats.service';

import { wildcatsRouting } from './wildcats.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    wildcatsRouting
  ],
  declarations: [
    WildcatsComponent,
    WildcatComponent
  ],
  providers: [
    WildcatsService
  ]
})
export class WildcatsModule {}

