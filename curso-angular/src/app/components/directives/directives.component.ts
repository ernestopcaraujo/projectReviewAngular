import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size: number = 30;
  fontType: string = "Times New Roman";
  textColor: string = "Blueviolet";

  styles:string[]=['style01','style02'];

  constructor() { }

  ngOnInit(): void {
  }

}
