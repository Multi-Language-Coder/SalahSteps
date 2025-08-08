export interface PrayTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  "Isha'a": string;
}

export interface DailyPrayers {
  [date: string]: PrayTimes;
}

export interface PrayerData {
  location: string;
  calculationMethod: string;
  asrjuristicMethod: string;
  praytimes: DailyPrayers;
  ramadhan: null;
}

export interface PrayerTimeResponse {
  status: number;
  message: string;
  data: PrayerData;
}

export interface subPrayerData {
  name: string;
  time: string;
}