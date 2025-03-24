import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManejarService } from '../manejar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
pais:any;
cargado:boolean;
  constructor(private manejar:ManejarService) {
    this.pais = {
    };
    this.cargado=false;
  }

  ngOnInit() {
    let aux=this;
    this.manejar.object$.subscribe(function(datos){
    if (datos){
      aux.pais=datos;
      aux.cargado=true;
    }  

    });
  }
  mostrarPaisActual(){
    alert(this.pais);
  }

  paisNoVacio():boolean{
    return this.cargado;
  }

}
