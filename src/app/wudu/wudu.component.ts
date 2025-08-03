import { Component } from '@angular/core';
@Component({
  selector: 'app-wudu',
  standalone: false,
  templateUrl: './wudu.component.html',
  styleUrl: './wudu.component.css'
})
export class WuduComponent {
  stepsOfWudu:stepInt[] = [
    {
      step:"Having the intention to make Wudu",
      
    },
    {
      step:"Say Bismillah",
      
    },
    {
      step:"Wash your hands throughly",
      image:['assets/step1.png']
      
    },
    {
      step:"Rinse your mouth 3 times",
      image:['assets/step2.png']
      
    },
    {
      step:"Rinse the nose 3 times",
      image:['assets/step3.png','assets/step4.png']
      
    },
    {
      step:"Wash the face 3 times",
      image:['assets/step5.png']
    },
    {
      step:"Wash the arms up to and including the elbows 3 times each",
      image:['assets/step6.png',]
    },
    {
      step:"Wipe the head once",
      image:['assets/step7part1.png']
    },
    {
      step:"Wipe the ears",
      image:['assets/step7part2.png','assets/step7part3.png']
    },
    {
      step:"Wash both feet up to and including the ankles 3 times each",
      image:['assets/step8.png']
    }
  ]
  breakWudu:breakage[] = [
    {
      action:"Urinating",
      depth:"Taking a piss"
    },
    {
      action:"Defecating",
      depth:"Going Number 2"
    },
    {
      action:"Passing Gas",
      depth:"Farting out, even the littlest"
    },
    {
      action:"Deep Sleep whilst lying down",
      depth:"If in a deep sleep, and also laying down breaks Wudu"
    },
    {
      action:"Flowing blood or pus",
      depth:"If you're are bleeding or excreting pus"
    },
    {
      action:"Vommiting a mouthful",
      depth:"Vommiting out a whole bunch"
    }
    
  ]
}
interface stepInt{
  step:string,
  image?:string[],
  images?:string
}
interface breakage{
  action:string,
  depth:string
}