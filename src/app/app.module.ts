import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

const appRoutes: Routes = [
  {path:'login',component:AuthUserComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'events',component:EventsComponent},
  {path:'create-event',component:CreateEventComponent},
  {path: '',
    redirectTo:'/homepage',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthUserComponent,
    HomePageComponent,
    EventsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
