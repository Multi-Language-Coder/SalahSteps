import { Component } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';
@Component({
  selector: 'app-zuhr',
  standalone: false,
  templateUrl: './zuhr.component.html',
  styleUrl: './zuhr.component.css'
})
export class ZuhrComponent {
  enviromentVariables=enviroment
  stepsOfSalah=enviroment.salahSteps;
  setsAmount = [
    {
      set:1,
      prayer:"4 Sunnah Mu'akkadah",
      units:enviroment.stepsUpUntil.UnitFour,
      c:"#collapseContent1"
    },
    {
      set:2,
      prayer:"4 Fard",
      units:enviroment.stepsUpUntil.UnitFour,
      c:"#collapseContent2"
    },
    {
      set:3,
      prayer:"2 Sunnah Mu'akkadah",
      units:enviroment.stepsUpUntil.UnitTwo,
      c:"#collapseContent3"
    },
    {
      set:4,
      prayer:"2 Nafl - Optional",
      units:enviroment.stepsUpUntil.UnitTwo,
      c:"#collapseContent4"
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
