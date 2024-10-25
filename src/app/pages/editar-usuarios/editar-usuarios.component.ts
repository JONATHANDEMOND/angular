import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GestionService } from '../../service/gestion.service';

@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent {

  servicio=inject(GestionService)
  ruta=inject(ActivatedRoute)
  id:any
  nombre:any
  apellido:any
  edad:any
  ngOnInit() {
    this.ruta.params.subscribe(parametro=>{
      this.servicio.getUser(parametro['idEditar']).subscribe(p=>{
        this.id=p.id 
        this.nombre=p.nombre
        this.apellido=p.apellido
        this.edad=p.edad
        
      })})}
  editar(datos:any){
    this.servicio.putUsers(datos.value).subscribe()
    location.href='crud'
  }}
  

