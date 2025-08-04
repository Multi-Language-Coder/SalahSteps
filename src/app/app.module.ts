import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WuduComponent } from './wudu/wudu.component';
import { FajrComponent } from './fajr/fajr.component';

@NgModule({
  declarations: [
    AppComponent,
    WuduComponent,
    FajrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
