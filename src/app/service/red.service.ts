import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Red } from '../models/Red';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  //url del backend
  //private url="http://localhost:8080/red/"
  private url="https://backend-arg-pro.onrender.com/red/"
  
  constructor(private httpClient:HttpClient) { }
  
  getRed():Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url+'list')
  }

  getRedById(id?:number):Observable<Red>{
    return this.httpClient.get<Red>(`${this.url}/${id}`);
  }

  saveRed(red:Red):Observable<Red>{
    return this.httpClient.post<Red>(this.url+'save',red);
  }

  updateRed(id?:number,red?:Red): Observable<Red>{
    return this.httpClient.put<Red>(`${this.url}update/${id}`,red);
  }

  deleteRed(red:Red): Observable<Object>{
    return this.httpClient.delete(`${this.url}${red.id}`);
  }
}
