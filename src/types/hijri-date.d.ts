declare module 'hijri-date' {
  export default class HijriDate {
    constructor(year?: number, month?: number, day?: number);
    getDate(): number;
    getMonth(): number;
    getFullYear(): number;
    setDate(date: number): void;
    setMonth(month: number): void;
    setFullYear(year: number): void;
    toGregorian(): Date;
    static fromGregorian(date: Date): HijriDate;
  }
}