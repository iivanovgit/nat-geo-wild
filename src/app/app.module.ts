import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { FirebaseModule, FirebaseService } from './firebase';

import { HomeService, HomeComponent } from './main-section/home';
import { WildcatsService, WildcatComponent, WildcatsComponent } from './main-section/wildcats';


import { SideMenuComponent } from './side-menu';
import { MainSectionComponent } from './main-section';
import { HeaderComponent } from './main-section/header';
import { FooterComponent } from './main-section/footer';



import { ClickOutsideDirective } from './directives';

import { AdminComponent, AdminHeaderComponent, AdminDashboardComponent, AdminLoginComponent, AdminGuard } from './admin';
import { PrivateComponent, LoginComponent, LoginFormComponent, AuthGuard, DashboardComponent, AuthService } from './private';
import { PublicComponent } from './public/public.component';




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
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    PrivateComponent,
    PublicComponent,
    LoginComponent,
    DashboardComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FirebaseModule,
    routing
  ],
  providers: [FirebaseService, HomeService, WildcatsService, AdminGuard, AuthService, AuthGuard],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
