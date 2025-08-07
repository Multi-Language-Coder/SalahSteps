import { Component } from '@angular/core';
import {enviroment} from '../../enviroment/enviroment';
@Component({
  selector: 'app-fajr',
  standalone: false,
  templateUrl: './fajr.component.html',
  styleUrl: './fajr.component.css'
})
export class FajrComponent {
  stepsOfSalah = enviroment.salahSteps;
  open = false;
setsAmount = [
    {
      set:1,
      prayer:"2 Sunnah Mu'akkadah",
      units:enviroment.stepsUpUntil.UnitTwo,
      c:"#collapseContent1"
    },
    {
      set:2,
      prayer:"2 Fard",
      units:enviroment.stepsUpUntil.UnitTwo,
      c:"#collapseContent2"
    },

  ]
  document=document;
  togglePlayPause(audioPlayer: HTMLAudioElement): void {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  constructor() {
   }
}
