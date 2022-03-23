import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MuestraComponent } from './components/muestra/muestra.component';
import { BateriaComponent } from './components/bateria/bateria.component';
import { ListaComponent } from './components/Guitarras/lista/lista.component';
import { VentaComponent } from './components/Guitarras/venta/venta.component';
import { ListaPianosComponent } from './components/piano/lista-pianos-niños/lista-pianos.component';
import { ListaPianoProComponent } from './components/piano/lista-piano-pro/lista-piano-pro.component';
import { ListaPianoOrganosComponent } from './components/piano/lista-piano-organos/lista-piano-organos.component';
import { ListaPianoSintetizadoresComponent } from './components/piano/lista-piano-sintetizadores/lista-piano-sintetizadores.component';
import { ListaPianoCasioComponent } from './components/piano/lista-piano-casio/lista-piano-casio.component';
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
   {
    path: 'bateria',
    component: BateriaComponent
  },
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'venta',
    component: VentaComponent
  },

  {
    path:'lista-pianos-niños',
    component: ListaPianosComponent
  },
  {
    path:'lista-pianos-pro',
    component: ListaPianoProComponent
  },
  {
    path:'lista-pianos-sint',
    component: ListaPianoSintetizadoresComponent
  },
  {
    path:'lista-pianos-organos',
    component:  ListaPianoOrganosComponent
  },
  {
    path:'lista-pianos-casio',
    component:  ListaPianoCasioComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
