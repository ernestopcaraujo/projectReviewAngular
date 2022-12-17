import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber():number {
    this.myNumber = Math.floor(Math.random()*100);
    if(this.myNumber < 50){
      this.myNumber = 99;
    }
    return this.myNumber;
  }

}
