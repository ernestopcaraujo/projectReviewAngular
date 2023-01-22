import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  textTest:string = 'williams honda'
  today: Date = new Date();
  valueTest:number = 0.175; //transoforma valores decimais em porcentatgem

  constructor() { }

  ngOnInit(): void {
  }

}
