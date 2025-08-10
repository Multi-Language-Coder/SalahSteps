import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { PrayerTimesService } from '../services/prayer-times.service';
import { LoadingService } from '.././loading.service';
import { PrayerCalculationService } from '../services/prayer-calculation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  widgetScript: SafeHtml | undefined;
  prayers: subPrayerData[] = [
    { name: "Fajr", time: "Loading..." },
    { name: "Sunrise", time: "Loading..." },
    { name: "Dhuhr", time: "Loading..." },
    { name: "Asr", time: "Loading..." },
    { name: "Maghrib", time: "Loading..." },
    { name: "Isha", time: "Loading..." }
  ];
  location: string = 'Loading...';
  currTime: string = '';
  currTimeHrMin: string = ''
  isLoading$: typeof this.loadingService.loading$;
  hasError = false;

  constructor(
    private prayerTimesService: PrayerTimesService,
    private loadingService: LoadingService,
    private sanitizer: DomSanitizer
  ) {
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
    const scriptCode = '<script type="text/javascript" src="http://www.muslimpro.com/muslimprowidget.js?cityid=4366476" async></script>';
    this.widgetScript = this.sanitizer.bypassSecurityTrustHtml(scriptCode);
    this.getCurrentLocation();
    this.startTimeUpdater();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getCurrentLocation(): void {
    if (!navigator.geolocation) {
      this.handleLocationError('Geolocation is not supported by this browser.');
      return;
    }

    this.loadingService.show();
    
    navigator.geolocation.getCurrentPosition(
      (position) => this.onLocationSuccess(position),
      (error) => this.handleLocationError('Location access denied or unavailable'),
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  private onLocationSuccess(position: GeolocationPosition): void {
    const { latitude, longitude } = position.coords;
    console.log('Latitude: ' + latitude + '\nLongitude: ' + longitude);
    
    // Get location details for display
    this.prayerTimesService.getLocationDetails(latitude, longitude)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (locationData: any) => {
          if (locationData && locationData.display_name) {
            this.location = locationData.display_name;
          } else {
            this.location = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
          }
          this.loadPrayerTimes();
        },
        error: () => {
          this.location = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
          this.loadPrayerTimes();
        }
      });
  }

  private loadPrayerTimes(): void {
    this.loadingService.show();
    this.prayerTimesService.getPrayerTimes(this.location)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingService.hide())
      )
      .subscribe({
        next: (response) => {
          if (response && response.data && response.data.praytimes) {
            const today = Object.keys(response.data.praytimes)[0];
            const todayPrayers = response.data.praytimes[today];
            
            this.prayers = [
              { name: "Fajr", time: todayPrayers.Fajr },
              { name: "Sunrise", time: todayPrayers.Sunrise },
              { name: "Dhuhr", time: todayPrayers.Dhuhr },
              { name: "Asr", time: todayPrayers.Asr },
              { name: "Maghrib", time: todayPrayers.Maghrib },
              { name: "Isha", time: todayPrayers["Isha'a"] }
            ];
            
            this.hasError = false;
          }
        },
        error: (error) => {
          /*console.error('Prayer times error:', error);
          this.hasError = true;*/
          this.prayers = [
            { name: "Fajr", time: "04:33" },
            { name: "Sunrise", time: "06:13" },
            { name: "Dhuhr", time: "13:13" },
            { name: "Asr", time: "18:07" },
            { name: "Maghrib", time: "20:12" },
            { name: "Isha", time: "21:52" }
          ];
        }
      });
  }

  private handleLocationError(message: string): void {
    console.error(message);
    this.location = 'Randallstown';
    this.loadPrayerTimes();
  }

  private startTimeUpdater(): void {
    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime(), 1000);
  }

  private updateCurrentTime(): void {
    this.currTime = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    this.currTimeHrMin = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  }

  retryLoadPrayerTimes(): void {
    this.hasError = false;
    this.getCurrentLocation();
  }

  isTimeBetween(currentPrayerTime: string, nextPrayerTime: string, currentTime: string): boolean {
    if (!currentPrayerTime || !nextPrayerTime || !currentTime) {
      return false;
    }

    const parseTime = (timeStr: string): number => {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    };

    const current = parseTime(currentTime);
    const prayerStart = parseTime(currentPrayerTime);
    const prayerEnd = parseTime(nextPrayerTime);

    // Handle case where prayer spans midnight
    if (prayerEnd < prayerStart) {
      return current >= prayerStart || current < prayerEnd;
    }

    return current >= prayerStart && current < prayerEnd;
  }
}
interface subPrayerData {
  name: string;
  time: string;
}
// Interface for the prayer times on a specific day
export interface PrayTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  "Isha'a": string; // The JSON uses 'Isha'a', which can be represented this way
}

// Interface for the 'praytimes' object, where keys are dynamic date strings
export interface DailyPrayers {
  [date: string]: PrayTimes;
}

// Interface for the main 'data' object
export interface PrayerData {
  location: string;
  calculationMethod: string;
  asrjuristicMethod: string;
  praytimes: DailyPrayers;
  ramadhan: null;
}

// Top-level interface for the entire JSON response
export interface PrayerTimeResponse {
  status: number;
  message: string;
  data: PrayerData;
}


interface placeDetails {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  address: addressDetails;
  boundingbox: number[]
}
interface addressDetails {
  city: string;
  county: string;
  state: string;
  country: string;
  country_code: string
}
