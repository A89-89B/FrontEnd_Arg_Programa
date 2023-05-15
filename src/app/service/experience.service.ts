import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  //url del backend
  //private url="http://localhost:8080/experience/"
  private url="https://backend-arg-pro.onrender.com/experience/"
  
  constructor(private httpClient:HttpClient) { }
  
  getExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url+'list')
  }

  getExperienciaById(id?:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(`${this.url}/${id}`);
  }

  saveExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.httpClient.post<Experiencia>(this.url+'save',experiencia);
  }

  updateExperiencia(id?:number,experiencia?:Experiencia): Observable<Experiencia>{
    return this.httpClient.put<Experiencia>(`${this.url}update/${id}`,experiencia);
  }

  deleteExperiencia(experiencia:Experiencia): Observable<Object>{
    return this.httpClient.delete(`${this.url}${experiencia.id}`);
  }
}
