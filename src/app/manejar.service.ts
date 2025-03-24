import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManejarService {

  private objectSubject = new BehaviorSubject<any>(null);
  object$ = this.objectSubject.asObservable();
  constructor() { }

  getPaisActual():any{
    return this.objectSubject.getValue();
  }
  setPaisActual(objeto:any){
    this.objectSubject.next(objeto);
  }
}
