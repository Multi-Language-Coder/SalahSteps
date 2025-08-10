import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-extras',
  standalone: false,
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css'
})
export class ExtrasComponent implements OnInit, OnDestroy {
  currentTheme: any;
  invalidation = enviroment.invalidation;
  womenProcedure = enviroment.womenProcedure;
  private themeSubscription!: Subscription;
  private previousThemeName?: string;
  private themeOverridden = false;

  janazah = enviroment.SalahAlJanazah;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.currentTheme$.subscribe(
      (theme: any) => this.currentTheme = theme
    );

    // Respect the user's selected theme; do not override to Teal
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.themeOverridden && this.previousThemeName) {
      this.themeService.setTheme(this.previousThemeName);
    }
  }

  togglePlayPause(audioPlayer: HTMLAudioElement): void {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
}
