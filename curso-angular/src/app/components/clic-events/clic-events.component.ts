import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clic-events',
  templateUrl: './clic-events.component.html',
  styleUrls: ['./clic-events.component.css']
})
export class ClicEventsComponent implements OnInit {

  myTestNumber : number = 2;

  show:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show;
  }

  onChangeNumber():number{

    this.myTestNumber = this.myTestNumber * 2;

    return this.myTestNumber;

  }

}
