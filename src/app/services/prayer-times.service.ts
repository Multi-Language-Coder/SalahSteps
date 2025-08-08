import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';
import { PrayerTimeResponse } from '../interfaces/prayer-times.interface';
import { enviroment } from '../../enviroment/enviroment';
@Injectable({
  providedIn: 'root'
})
export class PrayerTimesService {
  
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getPrayerTimes(location: string = 'Randallstown'): Observable<PrayerTimeResponse> {
    const url = `https://muslimpro-scrapper.lleans.dev/${location}?calcMethod=Islamic_University_Karachi&asjurMethod=HANAFI`;
    
    return this.http.get<PrayerTimeResponse>(url).pipe(
      timeout(10000),
      catchError(this.errorHandler.handleError<PrayerTimeResponse>('getPrayerTimes'))
    );
  }

    getLocationDetails(lat: number, lon: number): Observable<any> {
    const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${enviroment.apiKey}`;
    
    return this.http.get(url).pipe(
      timeout(5000),
      catchError(this.errorHandler.handleError('getLocationDetails'))
    );
  }
}

