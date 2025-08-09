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

  janazah = enviroment.SalahAlJanazah;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.currentTheme$.subscribe(
      (theme: any) => this.currentTheme = theme
    );
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
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
