import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { FirebaseModule, FirebaseService } from './firebase';

import { AdminComponent, AdminHeaderComponent, AdminDashboardComponent, AdminLoginComponent, AdminGuard, AdminDataService } from './admin';
import { PrivateComponent, LoginWrapperComponent, LoginComponent, AuthGuard, DashboardComponent, AuthService } from './private';
import { SideMenuComponent, HeaderComponent, FooterComponent, MainSectionComponent, HomeService, HomeComponent, PublicComponent, WildcatsService, WildcatComponent, WildcatsComponent, ClickOutsideDirective, AutosizeDirective } from './public';
import { NavComponent } from './private/nav/nav.component';


// const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

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
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    PrivateComponent,
    PublicComponent,
    LoginWrapperComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    ClickOutsideDirective,
    AutosizeDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseModule,
    routing,
    MaterialModule.forRoot(),
  ],
  providers: [FirebaseService, HomeService, WildcatsService, AdminGuard, AdminDataService, AuthService, AuthGuard],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
