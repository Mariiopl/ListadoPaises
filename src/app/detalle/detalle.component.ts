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
export class DetalleComponent {
pais:any;
  constructor(private manejar:ManejarService) {
    this.pais = {
      nombre: "",
      poblacion: ""
    };
  }

  ngOnInit() {
    let aux=this;
    this.manejar.object$.subscribe(function(datos){
      aux.pais = datos;     
    });
  }


  mostrarPaisActual(){
    alert(this.pais);
  }

  paisNoVacio():boolean{
    return this.pais.nombre == "";
  }

}
