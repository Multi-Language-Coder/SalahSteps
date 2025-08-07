import { Component } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-maghrib',
  standalone: false,
  templateUrl: './maghrib.component.html',
  styleUrl: './maghrib.component.css'
})
export class MaghribComponent {
  stepsOfSalah = enviroment.salahSteps;
  setsAmount = [
      {
        set:1,
        prayer:"3 Fard",
        units:enviroment.stepsUpUntil.UnitThree,
        c:"#collapseContent1"
      },
      {
        set:2,
        prayer:"2 Sunnah Mu'akkadah",
        units:enviroment.stepsUpUntil.UnitTwo,
        c:"#collapseContent2"
      },
      {
        set:3,
        prayer:"2 Nafl - Optional",
        units:enviroment.stepsUpUntil.UnitTwo,
        c:"#collapseContent3"
      },
    ]
    togglePlayPause(audioPlayer: HTMLAudioElement): void {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
}
