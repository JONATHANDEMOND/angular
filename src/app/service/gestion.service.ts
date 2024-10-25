import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
private API_USUARIOS="http://localhost:3000/clientes"

//ESCRIBIR 
posUser(datos:any):Observable<any>{
  return this.http.post(this.API_USUARIOS, datos)
}
//GET LEER
getUsers():Observable<any>{
  return this.http.get(this.API_USUARIOS) 
}
getUser(id:any):Observable<any>{
  return this.http.get(this.API_USUARIOS + "/" + id)
}
//EDITAR PUT
putUsers(datos:any):Observable<any>{
  return this.http.put(`${this.API_USUARIOS}/${datos.id}`,datos)  }
//eliminar delete
deletUser(id:any):Observable<any>{
return this.http.delete(`${this.API_USUARIOS}/${id}`)
}}







