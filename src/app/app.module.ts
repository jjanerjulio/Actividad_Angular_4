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
import { ListaComponent } from './components/Guitarras/lista/lista.component';
import { VentaComponent } from './components/Guitarras/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    MuestraComponent,
    ListaComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
