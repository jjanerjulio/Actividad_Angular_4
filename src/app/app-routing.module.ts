import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MuestraComponent } from './components/muestra/muestra.component';
import { ListaComponent } from './components/Guitarras/lista/lista.component';
import { VentaComponent } from './components/Guitarras/venta/venta.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'muestra',
    component: MuestraComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'venta',
    component: VentaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
