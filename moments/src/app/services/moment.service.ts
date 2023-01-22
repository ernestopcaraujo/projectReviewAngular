import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moment } from '../models/Moment';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  createMoment(formData: FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getMoments():Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id:number):Observable<Response<Moment>>{
    const url =`${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  removeMoment(id:number){
    const url =`${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateMoment(id:number, formData:FormData):
    Observable<FormData>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.put<FormData>(url, formData)
    }
}
