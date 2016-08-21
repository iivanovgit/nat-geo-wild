import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HomeComponent }  from './home.component';

import { SlideService } from './slide.service';
import { HomeRouting } from './home.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    SlideService
  ]
})
export class HomeModule {}

