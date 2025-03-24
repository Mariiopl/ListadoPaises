import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-padre',
  imports: [],
  templateUrl: './mensaje-padre.component.html',
  styleUrl: './mensaje-padre.component.css'
})
export class MensajePadreComponent {
@Input() childMessage: string | undefined;
  mensajeHijo:string;
  constructor() { 
    this.mensajeHijo = "Hola Padre";
  }


}
