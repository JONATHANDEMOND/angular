import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

private ADMIN_LOGIN=" http://localhost:3000/login"
///login
postLogin(user:any):Observable<any>{
  return this.http.post(this.ADMIN_LOGIN,user)
}
private ADMIN_REGISTRO=" http://localhost:3000/users"
postRegistro(user:any):Observable<any>{
  return this.http.post(this.ADMIN_REGISTRO,user)
}


}
