import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  {path:'login',component:AuthUserComponent},
  {path:'homepage',component:HomePageComponent},
  {path: '',
    redirectTo:'/homepage',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthUserComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
