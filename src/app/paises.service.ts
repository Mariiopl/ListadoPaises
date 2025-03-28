import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  traerPaises():Observable<any> {
    return this.http.get("https://restcountries.com/v3.1/all");
  }
  traerPais(codigo:string):Observable<any> {
    return this.http.get("https://restcountries.com/v3.1/alpha/"+codigo);
  }
}
