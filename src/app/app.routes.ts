import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CrudComponent } from './pages/crud/crud.component';
import { SeriesComponent } from './components/series/series.component';
import { DetallesAPIComponent } from './pages/detalles-api/detalles-api.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    {path:'crud',component:CrudComponent,canActivate:[loginGuard]},
    {path:'serie',component:SeriesComponent},
    {path:'detalles/:idDetalles',component:DetallesAPIComponent},
    {path:'editar/:idEditar',component:EditarUsuariosComponent},

    {path: '**',component:LoginComponent}

];
