import { Component, inject } from '@angular/core';
import { GestionService } from '../../service/gestion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio=inject(GestionService)

datos:any
ngOnInit() {
  this.servicio.getUsers().subscribe(u=>{
    this.datos=u
  })}
eliminar(id:any){
  this.servicio.deletUser(id).subscribe()
  window.location.reload()}
}


