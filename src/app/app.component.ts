import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from "./detalle/detalle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DetalleComponent, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListadoPaises';
  cabecera = "Web de paises del mundo"; 
}
