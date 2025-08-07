import { Component } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-asr',
  standalone: false,
  templateUrl: './asr.component.html',
  styleUrl: './asr.component.css'
})
export class AsrComponent {
  stepsOfSalah = enviroment.salahSteps;
  setsAmount = [
      {
        set:1,
        prayer:"4 Sunnah Ghayr Mu'akkadah",
        units:enviroment.stepsUpUntil.UnitFour,
        c:"#collapseContent1"
      },
      {
        set:2,
        prayer:"4 Fard",
        units:enviroment.stepsUpUntil.UnitFour,
        c:"#collapseContent2"
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
