import { Injectable } from '@angular/core';
import { ICredit } from '../models/ICredit';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  excludeCreditService(creditLines:ICredit[], creditLine:ICredit){
    console.log(creditLine.operation);
    return creditLines.filter((cl)=>creditLine.operation != cl.operation);
  }

  includeCreditService(creditLines:ICredit[]){

    const creditLine:ICredit = {operation:'FGI', ltv:50};

    creditLines.push(creditLine);


  }

}
