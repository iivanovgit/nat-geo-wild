import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { HomeService } from './main-section/home/home.service';
import { WildcatsService } from './main-section/wildcats/wildcats.service';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { HeaderComponent } from './main-section/header/header.component';
import { FooterComponent } from './main-section/footer/footer.component';

import { AdminComponent } from './admin/admin.component';




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
    AdminComponent
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
