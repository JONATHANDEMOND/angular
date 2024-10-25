import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

}
