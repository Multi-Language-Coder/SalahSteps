import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http: HttpClient){

  }
  ngOnInit(){
    const date = new Date();
    const todayDate = (`${date.getMonth()+1<10?"0"+(date.getMonth()+1):date.getMonth()+1}-${date.getDate()<10?"0"+date.getDate():date.getDate()}-${date.getFullYear()}`)
    navigator.geolocation.getCurrentPosition(position => {
      this.http.get<placeDetails>(`https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&api_key=${enviroment.apiKey}`).subscribe((value)=>{
        this.http.get<PrayerTimesData>(`https://api.aladhan.com/v1/timingsByAddress/${todayDate}?address=${value.display_name}&method=8`).subscribe((value)=>{
          
        })
    })
    })
  }
}
interface PrayerTimesData {
  code: number;
  status: string;
  data: {
    timings: {
      Fajr: string;
      Sunrise: string;
      Dhuhr: string;
      Asr: string;
      Sunset: string;
      Maghrib: string;
      Isha: string;
      Imsak: string;
      Midnight: string;
      Firstthird: string;
      Lastthird: string;
    };
    date: {
      readable: string;
      timestamp: string;
      hijri: {
        date: string;
        format: string;
        day: string;
        weekday: {
          en: string;
          ar: string;
        };
        month: {
          number: number;
          en: string;
          ar: string;
          days: number;
        };
        year: string;
        designation: {
          abbreviated: string;
          expanded: string;
        };
        holidays: any[]; // Adjust type if specific holiday structure is known
        adjustedHolidays: any[]; // Adjust type if specific holiday structure is known
        method: string;
      };
      gregorian: {
        date: string;
        format: string;
        day: string;
        weekday: {
          en: string;
        };
        month: {
          number: number;
          en: string;
        };
        year: string;
        designation: {
          abbreviated: string;
          expanded: string;
        };
        lunarSighting: boolean;
      };
    };
    meta: {
      latitude: number;
      longitude: number;
      timezone: string;
      method: {
        id: number;
        name: string;
        params: {
          Fajr: number;
          Isha: string;
        };
        location: {
          latitude: number;
          longitude: number;
        };
      };
      latitudeAdjustmentMethod: string;
      midnightMode: string;
      school: string;
      offset: {
        Imsak: number;
        Fajr: number;
        Sunrise: number;
        Dhuhr: number;
        Asr: number;
        Maghrib: number;
        Sunset: number;
        Isha: number;
        Midnight: number;
      };
    };
  };
}

interface placeDetails{
  place_id:number;
  licence:string;
  osm_type:string;
  osm_id:number;
  lat:string;
  lon:string;
  display_name:string;
  address:addressDetails;
  boundingbox:number[]
}
interface addressDetails{
  city:string;
  county:string;
  state:string;
  country:string;
  country_code:string
}