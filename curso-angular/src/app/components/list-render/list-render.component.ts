import { Component, OnInit } from '@angular/core';
import { ICredit } from 'src/app/models/ICredit';
import { ListService } from 'src/app/services/list.service';

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

  // creditLines: ICredit[] = [
  //   { id: 1, operation: 'CGI', ltv: 60 },
  //   { id: 2, operation: 'Aquisição', ltv: 80 },
  //   { id: 3, operation: 'CDB', ltv: 300 },
  //   { id: 4, operation: 'Aquisição Terreno', ltv: 40 }
  // ]

  creditLines: ICredit[] = [];

  nameOperation!: string;
  ltvOperation!: number;
  i!: number;
  creditDetails!: string;

  constructor(private listService: ListService) { this.getCreditLines() }

  ngOnInit(): void {
  }

  showLtv(creditLine: ICredit): void {
    this.nameOperation = creditLine.operation;
    this.ltvOperation = creditLine.ltv;
    switch (this.nameOperation) {
      case 'CGI':
        this.i = 0;
        break;
      case 'Aquisição':
        this.i = 1;
        break;
      case 'CDB':
        this.i = 2;
        break;
      case 'Aquisição Terreno':
        this.i = 3;
        break;
      case 'FGI':
        this.i = 4;
      break;
    }
    this.creditDetails = 'A Linha de Crédito ' + creditLine.operation + ' tem LTV de ' + creditLine.ltv + ' %.';
  }

  excludeCredit(creditLine: ICredit): void {
    this.creditLines = this.listService.excludeCreditService(this.creditLines, creditLine);
  }

  //essa feature de inclusão de linha de crédito não está funcionando corretamente
  //pois ela não mostra no template "in-line" o valor do LTV
  //e cria uma bagunça nos ítens já criados quando eles são excluídos
  includeCredit(): void {
    this.listService.includeCreditService(this.creditLines);
  }

  getCreditLines():void{
    this.listService.getAll().subscribe((creditLines)=>{this.creditLines = creditLines})
  }

}

