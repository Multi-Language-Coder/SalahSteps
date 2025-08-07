import { Component } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-isha',
  standalone: false,
  templateUrl: './isha.component.html',
  styleUrl: './isha.component.css'
})
export class IshaComponent {
  stepsOfSalah = enviroment.salahSteps;
  witr = enviroment.Salah_Witr;
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
        {
          set:5,
          prayer:"3 Wajib",
          units:enviroment.stepsUpUntil.UnitTwo,
          c:"#collapseContent5"
        },
        {
          set:6,
          prayer:"2 Nafl",
          units:enviroment.stepsUpUntil.UnitTwo,
          c:"#collapseContent6"
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
