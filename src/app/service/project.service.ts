import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  //url del backend
  private url="http://localhost:8080/project/"
  
  constructor(private httpClient:HttpClient) { }
  
  getProyecto():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url+'list')
  }

  getProyectoById(id?:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.url}/${id}`);
  }

  saveProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.url+'save',proyecto);
  }

  updateProyecto(id?:number,proyecto?:Proyecto): Observable<Proyecto>{
    return this.httpClient.put<Proyecto>(`${this.url}update/${id}`,proyecto);
  }

  deleteProyecto(proyecto:Proyecto): Observable<Object>{
    return this.httpClient.delete(`${this.url}${proyecto.id}`);
  }
}
