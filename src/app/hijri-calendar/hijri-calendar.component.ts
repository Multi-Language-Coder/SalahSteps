import { Component, OnInit } from '@angular/core';
import HijriDate from 'hijri-date';

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  gregorianDate: Date;
}

@Component({
  selector: 'app-hijri-calendar',
  standalone: false,
  templateUrl: './hijri-calendar.component.html',
  styleUrls: ['./hijri-calendar.component.css']
})
export class HijriCalendarComponent implements OnInit {
  currentHijriDate: HijriDate = new HijriDate();
  displayMonth: number = 0;
  displayYear: number = 0;
  calendarDays: CalendarDay[] = [];
  
  hijriMonths = [
    'Muharram', 'Safar', 'Rabi\' al-awwal', 'Rabi\' al-thani',
    'Jumada al-awwal', 'Jumada al-thani', 'Rajab', 'Sha\'ban',
    'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
  ];

 ngOnInit(): void {
  this.displayMonth = this.currentHijriDate.getMonth();
  this.displayYear = this.currentHijriDate.getFullYear();
  this.generateCalendar();
}

  generateCalendar(): void {
    this.calendarDays = [];
    
    // First day of the month
    const firstDay = new HijriDate(this.displayYear, this.displayMonth, 1);
    const firstDayGregorian = firstDay.toGregorian();
    const startDayOfWeek = firstDayGregorian.getDay();
    
    // Days in current month (approximate - Hijri months are 29-30 days)
    const daysInMonth = this.getDaysInHijriMonth(this.displayYear, this.displayMonth);
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startDayOfWeek; i++) {
      const prevMonthDay = new HijriDate(this.displayYear, this.displayMonth - 1, 30 - (startDayOfWeek - i - 1));
      this.calendarDays.push({
        date: prevMonthDay.getDate(),
        isCurrentMonth: false,
        isToday: false,
        gregorianDate: prevMonthDay.toGregorian()
      });
    }
    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const hijriDay = new HijriDate(this.displayYear, this.displayMonth, day);
      const isToday = this.isToday(hijriDay);
      
      this.calendarDays.push({
        date: day,
        isCurrentMonth: true,
        isToday: isToday,
        gregorianDate: hijriDay.toGregorian()
      });
    }
    
    // Fill remaining cells
    let nextMonthDay = 1;
    while (this.calendarDays.length < 42) {
      const nextDay = new HijriDate(this.displayYear, this.displayMonth + 1, nextMonthDay);
      this.calendarDays.push({
        date: nextMonthDay,
        isCurrentMonth: false,
        isToday: false,
        gregorianDate: nextDay.toGregorian()
      });
      nextMonthDay++;
    }
  }

previousMonth(): void {
  if (this.displayMonth === 1) {
    this.displayMonth = 12;
    this.displayYear--;
  } else {
    this.displayMonth--;
  }
  this.generateCalendar();
}

nextMonth(): void {
  if (this.displayMonth === 12) {
    this.displayMonth = 1;
    this.displayYear++;
  } else {
    this.displayMonth++;
  }
  this.generateCalendar();
}
private getDaysInHijriMonth(year: number, month: number): number {
  // Hijri months alternate between 30 and 29 days
  // Using 1-based indexing (1, 3, 5, 7, 9, 11 have 30 days)
  const oddMonths = [1, 3, 5, 7, 9, 11];
  return oddMonths.includes(month) ? 30 : 29;
}

  private isToday(hijriDate: HijriDate): boolean {
    const today = new HijriDate();
    return hijriDate.getDate() === today.getDate() &&
           hijriDate.getMonth() === today.getMonth() &&
           hijriDate.getFullYear() === today.getFullYear();
  }
}