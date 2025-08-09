import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../services/theme.service';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-extras',
  standalone: false,
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css'
})
export class ExtrasComponent implements OnInit {
  currentTheme: Theme;
  invalidation = enviroment.invalidation;
  womenProcedure = enviroment.womenProcedure;
  janazah = enviroment.SalahAlJanazah;
  
  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  togglePlayPause(audioPlayer: HTMLAudioElement): void {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
}
