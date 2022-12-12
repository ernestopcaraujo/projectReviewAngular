import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clic-events',
  templateUrl: './clic-events.component.html',
  styleUrls: ['./clic-events.component.css']
})
export class ClicEventsComponent implements OnInit {

  show:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show;
  }

}
