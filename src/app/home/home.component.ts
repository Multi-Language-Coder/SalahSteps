import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { PrayerTimesService } from '../services/prayer-times.service';
import { LoadingService } from '.././loading.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
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
    private loadingService: LoadingService
  ) {
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
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
      (error) => this.onLocationError(error),
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  private onLocationSuccess(position: GeolocationPosition): void {
    const { latitude, longitude } = position.coords;
    console.log('Latitude: ' + latitude + '\nLongitude: ' + longitude);
    this.prayerTimesService.getLocationDetails(latitude, longitude)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingService.hide())
      )
      .subscribe({
        next: (locationData) => {
          if (locationData) {
            this.location = locationData.display_name;
            this.loadPrayerTimes();
          }
        },
        error: () => this.handleLocationError('Unable to get location details.')
      });
  }


isTimeBetween(startTime: string, endTime: string | undefined, targetTime: string): boolean {
  if (!endTime) {
    // For the last prayer (Isha), check if current time is after Isha
    const start = new Date(`2024-01-01T${startTime}`);
    const target = new Date(`2024-01-01T${targetTime}`);
    return target >= start;
  }

  const start = new Date(`2024-01-01T${startTime}`);
  const end = new Date(`2024-01-01T${endTime}`);
  const target = new Date(`2024-01-01T${targetTime}`);

  if (end < start) {
    return target >= start || target <= end;
  }

  return target >= start && target <= end;
}
  private onLocationError(error: GeolocationPositionError): void {
    this.loadingService.hide();
    let message = 'Location access denied. ';
    
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message += 'Please enable location access and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
    }
    
    this.handleLocationError(message);
  }

    private loadPrayerTimes(): void {
    this.loadingService.show();
    
    this.prayerTimesService.getPrayerTimes()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingService.hide())
      )
      .subscribe({
        next: (response) => {
          console.log('Prayer times response:', response); // Debug log
          if (response?.data?.praytimes) {
            this.processPrayerTimes(response);
            this.hasError = false;
          } else {
            console.log('No prayer times data in response'); // Debug log
            this.hasError = true;
          }
        },
        error: (error) => {
          console.error('Prayer times error:', error); // Debug log
          this.hasError = true;
        }
      });
  }
  private processPrayerTimes(response: PrayerTimeResponse): void {
    const todayISO = new Date().toISOString().split('T')[0];
    const today = new Date().toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    }).replace(/,/g, '');
    console.log(today)
    const timings = response.data.praytimes[today];
    console.log(timings)
    if (timings) {
      this.prayers = [
        { name: "Fajr", time: timings.Fajr },
        { name: "Sunrise", time: timings.Sunrise },
        { name: "Dhuhr", time: timings.Dhuhr },
        { name: "Asr", time: timings.Asr },
        { name: "Maghrib", time: timings.Maghrib },
        { name: "Isha", time: timings["Isha'a"] }
      ];
    }
  }

  private handleLocationError(message: string): void {
    console.error(message);
    this.hasError = true;
    // Load default location prayer times
    this.location = 'Randallstown, MD (Default)';
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
