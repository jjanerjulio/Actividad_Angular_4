import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/layaut/menu/menu.component';
import { CabeceraComponent } from './components/layaut/cabecera/cabecera.component';
import { FooterComponent } from './components/layaut/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MuestraComponent } from './components/muestra/muestra.component';
import { ListaPianosComponent } from './components/piano/lista-pianos-niños/lista-pianos.component';
import { ListaPianoProComponent } from './components/piano/lista-piano-pro/lista-piano-pro.component';
import { ListaPianoOrganosComponent } from './components/piano/lista-piano-organos/lista-piano-organos.component';
import { ListaPianoSintetizadoresComponent } from './components/piano/lista-piano-sintetizadores/lista-piano-sintetizadores.component';
import { ListaPianoCasioComponent } from './components/piano/lista-piano-casio/lista-piano-casio.component';
import { ListaPianoAccesoriosComponent } from './components/piano/lista-piano-accesorios/lista-piano-accesorios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    MuestraComponent,
    ListaPianosComponent,
    ListaPianoProComponent,
    ListaPianoOrganosComponent,
    ListaPianoSintetizadoresComponent,
    ListaPianoCasioComponent,
    ListaPianoAccesoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
