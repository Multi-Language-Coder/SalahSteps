import { Injectable } from '@angular/core';

export interface CalculatedPrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  "Isha'a": string;
}

@Injectable({
  providedIn: 'root'
})
export class PrayerCalculationService {

  // Islamic University of Karachi method angles
  private readonly FAJR_ANGLE = 18.0;
  private readonly ISHA_ANGLE = 18.0;
  private readonly SUNRISE_SUNSET_ANGLE = -0.833; // Atmospheric refraction

  calculatePrayerTimes(latitude: number, longitude: number, date: Date = new Date()): CalculatedPrayerTimes {
    const julianDay = this.getJulianDay(date);
    const solarDeclination = this.getSolarDeclination(julianDay);
    const equationOfTime = this.getEquationOfTime(julianDay);
    
    // Calculate solar noon first
    const solarNoon = this.calculateDhuhr(longitude, equationOfTime, date);
    
    // Calculate prayer times
    const fajr = this.calculateTimeForAngle(latitude, solarDeclination, -this.FAJR_ANGLE, longitude, equationOfTime, date, true);
    const sunrise = this.calculateTimeForAngle(latitude, solarDeclination, this.SUNRISE_SUNSET_ANGLE, longitude, equationOfTime, date, true);
    const dhuhr = solarNoon;
    const asr = this.calculateAsrHanafi(latitude, solarDeclination, longitude, equationOfTime, date);
    const maghrib = this.calculateTimeForAngle(latitude, solarDeclination, this.SUNRISE_SUNSET_ANGLE, longitude, equationOfTime, date, false);
    const isha = this.calculateTimeForAngle(latitude, solarDeclination, -this.ISHA_ANGLE, longitude, equationOfTime, date, false);

    return {
      Fajr: this.formatTime(fajr),
      Sunrise: this.formatTime(sunrise),
      Dhuhr: this.formatTime(dhuhr),
      Asr: this.formatTime(asr),
      Maghrib: this.formatTime(maghrib),
      "Isha'a": this.formatTime(isha)
    };
  }

  private getJulianDay(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    let a = Math.floor((14 - month) / 12);
    let y = year - a;
    let m = month + 12 * a - 3;
    
    return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1721119;
  }

  private getSolarDeclination(julianDay: number): number {
    const n = julianDay - 2451545.0;
    const L = (280.460 + 0.9856474 * n) % 360;
    const g = this.toRadians((357.528 + 0.9856003 * n) % 360);
    const lambda = this.toRadians(L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g));
    
    return Math.asin(Math.sin(this.toRadians(23.439)) * Math.sin(lambda));
  }

  private getEquationOfTime(julianDay: number): number {
    const n = julianDay - 2451545.0;
    const L = this.toRadians((280.460 + 0.9856474 * n) % 360);
    const g = this.toRadians((357.528 + 0.9856003 * n) % 360);
    const lambda = L + this.toRadians(1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g));
    
    const alpha = Math.atan2(Math.cos(this.toRadians(23.439)) * Math.sin(lambda), Math.cos(lambda));
    const E = L - alpha;
    
    return 4 * this.toDegrees(E);
  }

  private calculateTimeForAngle(lat: number, declination: number, angle: number, lng: number, eqTime: number, date: Date, isMorning: boolean = true): number {
    const latRad = this.toRadians(lat);
    const angleRad = this.toRadians(angle);
    
    const cosHourAngle = (Math.sin(angleRad) - Math.sin(latRad) * Math.sin(declination)) /
      (Math.cos(latRad) * Math.cos(declination));
    
    // Handle extreme latitudes
    if (cosHourAngle < -1 || cosHourAngle > 1) {
      return isMorning ? 0 : 24;
    }
    
    const hourAngle = Math.acos(cosHourAngle);
    const timeOffset = this.toDegrees(hourAngle) / 15;
    
    // Calculate local solar noon
    const solarNoon = 12 - lng / 15 - eqTime / 60;
    
    return isMorning ? solarNoon - timeOffset : solarNoon + timeOffset;
  }

  private calculateDhuhr(lng: number, eqTime: number, date: Date): number {
    return 12 - lng / 15 - eqTime / 60;
  }

  private calculateAsrHanafi(lat: number, declination: number, lng: number, eqTime: number, date: Date): number {
    const latRad = this.toRadians(lat);
    const decRad = declination;
    
    // Calculate sun altitude at solar noon
    const noonAltitude = Math.PI/2 - Math.abs(latRad - decRad);
    
    // Hanafi: shadow length = object length + shadow at noon
    const shadowLength = 1 + (1 / Math.tan(noonAltitude));
    const asrAltitude = Math.atan(1 / shadowLength);
    
    const cosHourAngle = (Math.sin(asrAltitude) - Math.sin(latRad) * Math.sin(decRad)) /
      (Math.cos(latRad) * Math.cos(decRad));
    
    if (cosHourAngle < -1 || cosHourAngle > 1) {
      return 18; // Default afternoon time
    }
    
    const hourAngle = Math.acos(cosHourAngle);
    const solarNoon = 12 - lng / 15 - eqTime / 60;
    
    return solarNoon + this.toDegrees(hourAngle) / 15;
  }

  private formatTime(decimalTime: number): string {
    // Remove timezone offset handling - work in local time directly
    let adjustedTime = decimalTime;
    
    // Normalize to 24-hour format
    while (adjustedTime < 0) adjustedTime += 24;
    while (adjustedTime >= 24) adjustedTime -= 24;
    
    const hours = Math.floor(adjustedTime);
    const minutes = Math.round((adjustedTime - hours) * 60);
    
    const finalHours = hours;
    const finalMinutes = minutes >= 60 ? 59 : minutes < 0 ? 0 : minutes;
    
    return `${finalHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`;
  }

  private toRadians(degrees: number): number {
    return degrees * Math.PI / 180;
  }

  private toDegrees(radians: number): number {
    return radians * 180 / Math.PI;
  }
}

