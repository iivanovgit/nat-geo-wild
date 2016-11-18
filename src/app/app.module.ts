import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { FirebaseModule, FirebaseService } from './firebase';

import { AdminComponent, AdminHeaderComponent, AdminDashboardComponent, AdminLoginComponent, AdminGuard } from './admin';
import { PrivateComponent, LoginComponent, LoginFormComponent, AuthGuard, DashboardComponent, AuthService } from './private';
import { SideMenuComponent, HeaderComponent, FooterComponent, MainSectionComponent, HomeService, HomeComponent, PublicComponent, WildcatsService, WildcatComponent, WildcatsComponent, ClickOutsideDirective } from './public';

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
    routing,
    MaterialModule.forRoot()
  ],
  providers: [FirebaseService, HomeService, WildcatsService, AdminGuard, AuthService, AuthGuard],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
