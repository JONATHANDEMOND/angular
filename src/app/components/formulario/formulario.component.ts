import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionService } from '../../service/gestion.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

servicio=inject(GestionService)
id:any
nombre:any
apellido:any
edad:any
guardar(datos:any){
this.servicio.posUser(datos.value).subscribe()
this.limpiar()
window.location.reload()
}
limpiar(){
  this.id='';
  this.nombre='';
  this.apellido='';
  this.edad='';
}


}
