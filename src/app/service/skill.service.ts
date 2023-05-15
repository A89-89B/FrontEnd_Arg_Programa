import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //url del backend
  private url="http://localhost:8080/skill/"
  
  constructor(private httpClient:HttpClient) { }
  
  getSkill():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.url+'list')
  }

  getSkillById(id?:number):Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.url}/${id}`);
  }

  saveSkill(skill:Skill):Observable<Skill>{
    return this.httpClient.post<Skill>(this.url+'save',skill);
  }

  updateSkill(id?:number,skill?:Skill): Observable<Skill>{
    return this.httpClient.put<Skill>(`${this.url}update/${id}`,skill);
  }

  deleteSkill(skill:Skill): Observable<Object>{
    return this.httpClient.delete(`${this.url}${skill.id}`);
  }
}
