import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Theme {
  name: string;
  displayName: string;
  styles: {
    body: string;
    headings: string;
    contentBox: string;
    text: string;
    buttons: string;
    recitations?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: Theme[] = [
    {
      name: 'teal-gradient',
      displayName: 'Teal Gradient',
      styles: {
        body: 'background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #093637 100%); font-family: "Poppins", sans-serif; color: #FFFFFF; min-height: 100vh; background-attachment: fixed;',
        headings: 'font-family: "Poppins", sans-serif; color: #FFFFFF; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); text-align: center; font-weight: 700;',
        contentBox: 'background: rgba(255, 255, 255, 0.15); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: 20px; padding: 2rem; margin: 2rem auto; max-width: 800px; backdrop-filter: blur(15px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);',
        text: 'color: #FFFFFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);',
        buttons: 'background: rgba(255, 255, 255, 0.2); border: 2px solid rgba(255, 255, 255, 0.3); color: #FFFFFF; font-weight: 600; border-radius: 25px; backdrop-filter: blur(10px);',
        recitations: 'border: 2px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.1); border-radius: 15px; backdrop-filter: blur(10px); padding: 15px;'
      }
    },
    {
      name: 'islamic-green',
      displayName: 'Islamic Green',
      styles: {
        body: 'background-color: #0d422a; font-family: "Poppins", sans-serif; color: #f5eeda;',
        headings: 'font-family: "Amiri", serif; color: #d4af37; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); text-align: center;',
        contentBox: 'border: 3px solid #d4af37; border-radius: 10px; background-color: rgba(0, 0, 0, 0.2); padding: 2rem; margin: 2rem auto; max-width: 800px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);',
        text: 'color: #f5eeda;',
        buttons: 'background: #d4af37; border: 2px solid #d4af37; color: #0d422a; font-weight: 600; border-radius: 8px;',
        recitations: 'border: 2px solid #d4af37; background: rgba(212, 175, 55, 0.1); border-radius: 10px; padding: 15px;'
      }
    },
    {
      name: 'sky-gradient',
      displayName: 'Sky Gradient',
      styles: {
        body: 'background: linear-gradient(180deg, #87CEEB 0%, #B0E0E6 50%, #F0E68C 100%); font-family: "Poppins", sans-serif; color: #FFFFFF; min-height: 100vh; background-attachment: fixed;',
        headings: 'font-family: "Poppins", sans-serif; color: #FFFFFF; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); text-align: center; font-weight: 700;',
        contentBox: 'background: rgba(255, 255, 255, 0.15); border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 20px; padding: 2rem; margin: 2rem auto; max-width: 800px; backdrop-filter: blur(15px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);',
        text: 'color: #FFFFFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);',
        buttons: 'background: rgba(255, 255, 255, 0.2); border: 2px solid rgba(255, 255, 255, 0.3); color: #FFFFFF; font-weight: 600; border-radius: 25px; backdrop-filter: blur(10px);',
        recitations: 'border: 2px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.1); border-radius: 15px; backdrop-filter: blur(10px); padding: 15px;'
      }
    }
  ];

  private currentThemeSubject = new BehaviorSubject<Theme>(this.themes[0]);
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      const theme = this.themes.find(t => t.name === savedTheme);
      if (theme) {
        this.currentThemeSubject.next(theme);
      }
    }
  }

  getThemes(): Theme[] {
    return this.themes;
  }

  getCurrentTheme(): Theme {
    return this.currentThemeSubject.value;
  }

  setTheme(themeName: string): void {
    const theme = this.themes.find(t => t.name === themeName);
    if (theme) {
      this.currentThemeSubject.next(theme);
      localStorage.setItem('selectedTheme', themeName);
    }
  }
}