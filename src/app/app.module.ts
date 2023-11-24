import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
//import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { NavbarComponent} from './shared/navbar/navbar.component';
import {carouselComponent} from './shared/carousel/carousel.component'
import { SharedModule } from './shared/shared.module';
import {HomeComponent} from './shared/home/home.component'

import 'jquery';
import 'popper.js';
import 'bootstrap';

import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    carouselComponent,
    HomeComponent
    

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    //PagesModule,    
    MatSlideToggleModule,
    NoopAnimationsModule,
    HammerModule, 
    IgxCarouselModule,    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

