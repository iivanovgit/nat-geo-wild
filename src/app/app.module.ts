import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { HomeService, HomeComponent } from './main-section/home';
import { WildcatsService, WildcatComponent, WildcatsComponent } from './main-section/wildcats';


import { SideMenuComponent } from './side-menu';
import { MainSectionComponent } from './main-section';
import { HeaderComponent } from './main-section/header';
import { FooterComponent } from './main-section/footer';

import { AdminComponent } from './admin';

import { ClickOutsideDirective } from './directives';



const firebaseConfig = {
  apiKey: 'AIzaSyCaWUokAXGAu4ehY9AH1OheIcQjgSZppN8',
  authDomain: 'nat-geo-wild.firebaseapp.com',
  databaseURL: 'https://nat-geo-wild.firebaseio.com',
  storageBucket: 'nat-geo-wild.appspot.com',
};

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainSectionComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    HomeComponent,
    WildcatComponent,
    WildcatsComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing

  ],
  providers: [HomeService, WildcatsService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
