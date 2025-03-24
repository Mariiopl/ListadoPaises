import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from "./detalle/detalle.component";
import { BanderaComponent } from "./bandera/bandera.component";
import { MensajePadreComponent } from "./mensaje-padre/mensaje-padre.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DetalleComponent, ListadoComponent, BanderaComponent, MensajePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListadoPaises';
  cabecera = "Web de paises del mundo"; 
}
