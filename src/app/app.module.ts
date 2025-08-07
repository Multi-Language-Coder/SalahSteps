import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WuduComponent } from './wudu/wudu.component';
import { FajrComponent } from './fajr/fajr.component';
import { ZuhrComponent } from './zuhr/zuhr.component';
import { AsrComponent } from './asr/asr.component';
import { MaghribComponent } from './maghrib/maghrib.component';
import { IshaComponent } from './isha/isha.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { ExtrasComponent } from './extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    WuduComponent,
    FajrComponent,
    ZuhrComponent,
    AsrComponent,
    MaghribComponent,
    IshaComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    ExtrasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
