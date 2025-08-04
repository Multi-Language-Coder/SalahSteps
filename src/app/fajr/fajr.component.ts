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

  constructor() {
   }
}
