import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { FirebaseModule } from './firebase';

import { HomeService, HomeComponent } from './main-section/home';
import { WildcatsService, WildcatComponent, WildcatsComponent } from './main-section/wildcats';


import { SideMenuComponent } from './side-menu';
import { MainSectionComponent } from './main-section';
import { HeaderComponent } from './main-section/header';
import { FooterComponent } from './main-section/footer';



import { ClickOutsideDirective } from './directives';
import { ClientComponent } from './client/client.component';

import { AdminComponent, AdminHeaderComponent, AdminDashboardComponent, AdminLoginComponent, AuthService, AuthGuard, UnauthGuard } from './admin';




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
    ClickOutsideDirective,
    ClientComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FirebaseModule,
    routing
  ],
  providers: [HomeService, WildcatsService, AuthService, AuthGuard, UnauthGuard],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
