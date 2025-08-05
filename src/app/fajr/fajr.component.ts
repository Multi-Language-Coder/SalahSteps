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

  ]
  constructor() {
   }
}
