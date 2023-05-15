import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  //url del backend
  private url="http://localhost:8080/profile/"
  
  constructor(private httpClient:HttpClient) { }
  
  getPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url+'list')
  }

  getPersonaById(id?:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.url}/${id}`);
  }

  savePersona(persona:Persona):Observable<Persona>{
    return this.httpClient.post<Persona>(this.url+'save',persona);
  }

  updatePersona(id?:number,persona?:Persona): Observable<Persona>{
    return this.httpClient.put<Persona>(`${this.url}update/${id}`,persona);
  }

  deletePersona(persona:Persona): Observable<Object>{
    return this.httpClient.delete(`${this.url}${persona.id}`);
  }
}
