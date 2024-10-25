import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesAPIService {

  constructor(private http:HttpClient) { }

  private API_SERIES="https://api.sampleapis.com/xbox/games"

  getSeries():Observable<any>{
    return this.http.get(this.API_SERIES);
  }

  getSerie(id:string):Observable<any>{
    return this.http.get(`${this.API_SERIES}/${id}`);
  }

}
