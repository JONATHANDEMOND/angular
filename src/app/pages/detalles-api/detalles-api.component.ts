import { Component, inject } from '@angular/core';
import { SeriesAPIService } from '../../service/series-api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-api',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './detalles-api.component.html',
  styleUrl: './detalles-api.component.css'
})
export class DetallesAPIComponent {
  servicio=inject(SeriesAPIService)
  ruta= inject(ActivatedRoute)
 series:any
 
 ngOnInit() {
 this.ruta.params.subscribe(parametro=>{
 let id = parametro['idDetalles']
  this.servicio.getSerie(id).subscribe(pe=>{
 this.series=pe
 })
})
}
}


