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
      image:'assets/placeholder.png'
    },
    {
      step:"Say Bismillah",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Wash your hands throughly",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Rinse your mouth 3 times",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Rinse the nose 3 times",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Wash the face 3 times",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Wash the arms up toand including the elbows 3 times each",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Wipe the head once",
      image:'../../assets/placeholder.png'
    },
    {
      step:"Wash both feet up to and including the ankles 3 times each",
      image:'../../assets/placeholder.png'
    }
  ]
step: any;
}
interface stepInt{
  step:string,
  image:string
}