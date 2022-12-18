import { Component, OnInit } from '@angular/core';
import { ICredit } from 'src/app/models/ICredit';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // creditLines : object[]= [
  //   {operation:'CGI', ltv:60},
  //   {operation:'Aquisição', ltv:80},
  //   {operation:'CDB', ltv:'300'},
  //   {operation: 'Aquisiçao Terreno', ltv:40}
  // ]
  //deixei comentado apenas para lembrar como fazer a tipagem de um array de objetos

  creditLines : ICredit[]= [
  {operation:'CGI', ltv:60},
  {operation:'Aquisição', ltv:80},
  {operation:'CDB', ltv:300},
  {operation: 'Aquisição Terreno', ltv:40}
  ]

  nameOperation!:string;
  ltvOperation!:number;
  i!:number;
  creditDetails!:string;

  constructor() { }

  ngOnInit(): void {
  }

  showLtv(creditLine:ICredit):void{
    this.nameOperation = creditLine.operation;
    this.ltvOperation = creditLine.ltv;
    switch ( this.nameOperation ) {
      case 'CGI':
          this.i=0;
          break;
      case 'Aquisição':
        this.i=1;
        break;
      case 'CDB':
        this.i=2;
        break;
      case 'Aquisição Terreno':
        this.i=3;
        break;
    }
    this.creditDetails = 'A Linha de Crédito '+creditLine.operation+' tem LTV de '+creditLine.ltv+ ' %.';
   }


  }

