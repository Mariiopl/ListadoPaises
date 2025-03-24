import { Component } from '@angular/core';
import { PaisesService } from '../paises.service';
import { CommonModule } from '@angular/common';
import { ManejarService } from '../manejar.service';

@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  listadoPaises:any[] = [];
  paisActual: any;

  constructor(private paises:PaisesService, private manejar:ManejarService) {
    let aux = this;
    paises.traerPaises().subscribe(function(datos:any[]){
      aux.listadoPaises = datos;
      aux.ordenarPaises();
    });
  }
  ordenarPaises():void{
    if (this.listadoPaises.length > 1) {
      this.listadoPaises.sort(function(a:any,b:any){
        return (a.translations.spa.common.localeCompare(b.translations.spa.common));
      });
    }
  }

  pedirInformacion(codigo:string):void{
    let aux = this;
    this.paises.traerPais(codigo).subscribe(function(datos){
      aux.manejar.setPaisActual(datos[0]);
    });
  }
}


