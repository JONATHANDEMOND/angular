import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
servicio=inject(LoginService)
email:any
password:any
registrar(datos:any){
  this.servicio.postRegistro(datos.value).subscribe()
  location.href= 'login'
  }
}



