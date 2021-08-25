import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavsMenuComponent } from './navs-menu/navs-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthUserComponent,
    HomePageComponent,
    NavsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
