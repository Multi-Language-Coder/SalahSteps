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
      name: 'classic-islamic',
      displayName: 'Classic Islamic',
      styles: {
        body: 'background-color: #0d422a !important; background-image: url("https://www.transparenttextures.com/patterns/arabesque.png"); font-family: "Poppins", sans-serif; color: #f5eeda; min-height: 100vh; background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;',
        headings: 'font-family: "Amiri", serif; color: #d4af37; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); text-align: center; font-size: 4.5rem; margin-bottom: 1.5rem;',
        contentBox: 'background: rgba(245, 238, 218, 0.15) !important; margin: 20px auto; padding: 30px; border: 2px solid rgba(212, 175, 55, 0.4); border-radius: 20px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); max-width: 800px; backdrop-filter: blur(15px);',
        text: 'padding: 10px; color: #d4af37; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);',
        buttons: 'background: rgba(255, 255, 255, 0.2) !important; border: 2px solid rgba(255, 255, 255, 0.3) !important; color: #FFFFFF !important; font-weight: 600 !important; font-size: 1.1rem !important; padding: 0.8rem 2rem !important; margin-top: 1rem !important; border-radius: 25px !important; backdrop-filter: blur(10px) !important; transition: all 0.3s ease !important; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;',
        recitations: 'border: 2px solid rgba(212, 175, 55, 0.4); padding: 20px; margin-top: 15px; background: rgba(245, 238, 218, 0.1); border-radius: 15px; backdrop-filter: blur(10px);'
      }
    },
    {
      name: 'ocean-breeze',
      displayName: 'Ocean Breeze',
      styles: {
        body: 'background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #093637 100%); font-family: "Poppins", sans-serif; color: #FFFFFF; min-height: 100vh; background-attachment: fixed; background-repeat: no-repeat; background-size: cover;',
        headings: 'font-family: "Poppins", sans-serif; color: #FFFFFF; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); text-align: center; font-weight: 700; font-size: 4rem; letter-spacing: -0.02em;',
        contentBox: 'background: rgba(255, 255, 255, 0.15) !important; margin: 20px auto; padding: 30px; border: 2px solid rgba(255, 255, 255, 0.25); border-radius: 20px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); max-width: 800px; backdrop-filter: blur(15px);',
        text: 'padding: 10px; color: #FFFFFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);',
        buttons: 'background: rgba(255, 255, 255, 0.2) !important; border: 2px solid rgba(255, 255, 255, 0.3) !important; color: #FFFFFF !important; font-weight: 600 !important; font-size: 1.1rem !important; padding: 0.8rem 2rem !important; margin-top: 1rem !important; border-radius: 25px !important; backdrop-filter: blur(10px) !important; transition: all 0.3s ease !important; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;',
        recitations: 'border: 2px solid rgba(255, 255, 255, 0.3); padding: 20px; margin-top: 15px; background: rgba(255, 255, 255, 0.1); border-radius: 15px; backdrop-filter: blur(10px);'
      }
    },
    {
      name: 'teal-gradient',
      displayName: 'Teal Gradient',
      styles: {
        body: 'background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #093637 100%); font-family: "Poppins", sans-serif; color: #FFFFFF; min-height: 100vh; background-attachment: fixed;',
        headings: 'font-family: "Poppins", sans-serif; color: #FFFFFF; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); text-align: center; font-weight: 700;',
        contentBox: 'background: rgba(255, 255, 255, 0.15) !important; border: 2px solid rgba(255, 255, 255, 0.25); border-radius: 20px; padding: 2rem; margin: 2rem auto; max-width: 800px; backdrop-filter: blur(15px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);',
        text: 'color: #FFFFFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);',
        buttons: 'background: rgba(255, 255, 255, 0.2) !important; border: 2px solid rgba(255, 255, 255, 0.3) !important; color: #FFFFFF !important; font-weight: 600 !important; font-size: 1.1rem !important; padding: 0.8rem 2rem !important; margin-top: 1rem !important; border-radius: 25px !important; backdrop-filter: blur(10px) !important; transition: all 0.3s ease !important; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;',
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
        this.setTheme(savedTheme);
      }
    } else {
      this.applyTheme(this.themes[0]);
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
      this.applyTheme(theme);
      localStorage.setItem('selectedTheme', themeName);
    }
  }

  private applyTheme(theme: Theme): void {
    // Remove existing theme styles
    const existingStyle = document.getElementById('dynamic-theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create new style element
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-theme-styles';
    
    // Convert theme styles to CSS
    const css = `
      body { ${theme.styles.body} }
      h1, h4 { ${theme.styles.headings} }
      .card-box { ${theme.styles.contentBox} }
      .set-container { ${theme.styles.contentBox} }
      li, p#SajdahAlSahw, p#missedPrayers, p#womenProcedure, p.janazahParagraph { ${theme.styles.text} }
      .btn-success { ${theme.styles.buttons} }
      .btn-success:hover { 
        background: rgba(255, 255, 255, 0.3) !important;
        border-color: rgba(255, 255, 255, 0.5) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2) !important;
      }
      .btn-success:active {
        background: rgba(255, 255, 255, 0.4) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        transform: translateY(1px) !important;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
      }
      #recitations { ${theme.styles.recitations} }
    `;
    
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }
}





