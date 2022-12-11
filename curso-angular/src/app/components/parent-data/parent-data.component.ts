import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() driverName:string ='';
  @Input () driverData!: {car:string, model:string, year:number };
  @Input () sponsorsData!:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
