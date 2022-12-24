import { Injectable } from '@angular/core';
import { ICredit } from '../models/ICredit';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/creditLines'
  //declarando private, só é acessível na classe e não no componente.
  //é uma boa prática.

  constructor(private http: HttpClient) { }

  excludeCreditService(creditLines:ICredit[], creditLine:ICredit):ICredit[]{
    console.log(creditLine.operation);
    return creditLines.filter((cl)=>creditLine.operation != cl.operation);
  }

  //Aqui eu estou forçando uma situação já que esses dados deveriam vir de um input de formulário
  includeCreditService(creditLines:ICredit[]){
    const creditLine:ICredit = {id:5, operation:'FGI', ltv:50};
    creditLines.push(creditLine);
  }

  getAll():Observable<ICredit[]>{
    return this.http.get<ICredit[]>(this.apiUrl);
  }

  getOneCreditLine(id:number):Observable<ICredit>{
    return this.http.get<ICredit>("http://localhost:3000/creditLines/"+id);
    // return this.http.get<ICredit>('${this.apiUrl}/${id}');
  }

}
