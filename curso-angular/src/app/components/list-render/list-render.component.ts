import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  creditLines = [
    {operation:'CGI', ltv:'60'},
    {operation:'Aquisição', ltv:'80'},
    {operation:'CDB', ltv:'300'},
    {operation: 'Aquisiçao Terreno', ltv:'40'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
