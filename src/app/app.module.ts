import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { ExtrasComponent } from './extras/extras.component';
import { QiblaComponent } from './qibla/qibla.component';
import { LoadingService } from './loading.service';
import { BrowserModule } from '@angular/platform-browser';
import { HijriCalendarComponent } from './hijri-calendar/hijri-calendar.component';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    WuduComponent,
    FajrComponent,
    ZuhrComponent,
    AsrComponent,
    MaghribComponent,
    IshaComponent,
    ErrorComponent,
    NavbarComponent,
    ExtrasComponent,
    QiblaComponent,
    HomeComponent,
    HijriCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    LoadingService,
    ThemeService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
