import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { HeaderComponent } from './main-section/header/header.component';
import { FooterComponent } from './main-section/footer/footer.component';
import { HomeModule } from './main-section/home/home.module';

import { WildcatsModule } from './main-section/wildcats/wildcats.module';
import { HeroesModule } from './main-section/heroes/heroes.module';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
    HeroesModule,
    WildcatsModule,
    HomeModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
