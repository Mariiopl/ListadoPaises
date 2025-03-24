import { Component } from '@angular/core';
import { ManejarService } from '../manejar.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-bandera',
  imports: [CommonModule,FormsModule],
  templateUrl: './bandera.component.html',
  styleUrl: './bandera.component.css'
})
export class BanderaComponent implements OnInit {
  pais:any;
  cargado:boolean;
  rutaBandera:string;
  constructor(private manejar:ManejarService) {
    this.pais = {};
    this.cargado=false;
    this.rutaBandera="";
  }

  ngOnInit():void {
    let aux=this;
    this.manejar.object$.subscribe(function(datos){
      if (datos){
        aux.pais=datos;
        aux.cargado=true;
        aux.rutaBandera=datos.flags.png;
      }  
    });
  }
  paisNoVacio():boolean{
    return this.cargado;
  }
}
