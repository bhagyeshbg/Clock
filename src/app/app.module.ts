import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import { WorldClockComponent } from './world-clock/world-clock.component';
//import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorldClockComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: "", component: HomeComponent }, 
     { path: "home", component: HomeComponent },
     { path: "WorldClock", component: WorldClockComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
