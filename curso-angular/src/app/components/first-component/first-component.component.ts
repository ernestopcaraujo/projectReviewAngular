import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  clientName: string = 'John Voight';
  hobbies: string[] = ['Correr', 'Jogar', 'Saltar'];
  car = {
    name: 'McLaren',
    model:'MP4/4',
    year: 1988
  };

  constructor() { }

  ngOnInit(): void {
  }

}
