import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/Register';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { Jwt } from '../models/Jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080/auth/"

  constructor(private httpClient:HttpClient) { }

  public register(register:Register): Observable<any>{
    return this.httpClient.post<any>(this.url+'register',register);
  }

  public login(login:Login):Observable<Jwt>{
    return this.httpClient.post<Jwt>(this.url+'authenticate',login)
  }
}
