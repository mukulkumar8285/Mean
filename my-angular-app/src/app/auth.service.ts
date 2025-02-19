import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:8080/api/user/login"

  private signupurl = "http://localhost:8080/api/user/signup"


  constructor(private http:HttpClient) { }

  login(loginData:{username:string; password:string}):Observable<any>{
    return this.http.post<any>(this.apiUrl, loginData)
  }

  
  signup(signupData:{username:string; password:string , fullName : string , email:string}):Observable<any>{
    return this.http.post<any>(this.signupurl, signupData)
   
  }
}
