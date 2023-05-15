import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

   //url del backend
   private url="http://localhost:8080/education/"
  
   constructor(private httpClient:HttpClient) { }
   
   getEducacion():Observable<Educacion[]>{
     return this.httpClient.get<Educacion[]>(this.url+'list')
   }
 
   getEducacionById(id?:number):Observable<Educacion>{
     return this.httpClient.get<Educacion>(`${this.url}/${id}`);
   }
 
   saveEducacion(educacion:Educacion):Observable<Educacion>{
     return this.httpClient.post<Educacion>(this.url+'save',educacion);
   }
 
   updateEducacion(id?:number,educacion?:Educacion): Observable<Educacion>{
     return this.httpClient.put<Educacion>(`${this.url}update/${id}`,educacion);
   }
 
   deleteEducacion(educacion:Educacion): Observable<Object>{
     return this.httpClient.delete(`${this.url}${educacion.id}`);
   }
}
