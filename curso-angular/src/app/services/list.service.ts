import { Injectable } from '@angular/core';
import { ICredit } from '../models/ICredit';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  excludeCreditService(creditLines:ICredit[], creditLine:ICredit):ICredit[]{
    console.log(creditLine.operation);
    return creditLines.filter((cl)=>creditLine.operation != cl.operation);
  }

  //Aqui eu estou forçando uma situação já que esses dados deveriam vir de um input de formulário
  includeCreditService(creditLines:ICredit[]){

    const creditLine:ICredit = {id:5, operation:'FGI', ltv:50};

    creditLines.push(creditLine);

  }

}
