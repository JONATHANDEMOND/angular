import { Component, inject } from '@angular/core';
import { SeriesAPIService } from '../../service/series-api.service';
import { subscribe } from 'diagnostics_channel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  servicio=inject(SeriesAPIService)
series:any
  ngOnInit(){
    this.servicio.getSeries().subscribe(s=>{
      this.series=s
    })

    
  }

}
