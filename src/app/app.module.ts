import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { HomeService, HomeComponent } from './main-section/home';
<<<<<<< HEAD
import { WildcatsService, WildcatComponent, WildcatsComponent } from './main-section/wildcats';
=======
import { WildcatsService, WildcatComponent, WildcatsComponent  } from './main-section/wildcats';
>>>>>>> 66ae3fe93a9c4c6d9a1f8b5ca442a8c0b54fa206

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
<<<<<<< HEAD
    WildcatsComponent,
    ClickOutsideDirective
=======
    WildcatsComponent
>>>>>>> 66ae3fe93a9c4c6d9a1f8b5ca442a8c0b54fa206
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
