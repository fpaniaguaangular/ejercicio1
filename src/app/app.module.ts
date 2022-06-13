import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ListadoSeriesComponent } from './components/listado-series/listado-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { FormularioCreacionComponent } from './components/formulario-creacion/formulario-creacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    ListadoSeriesComponent,
    SerieComponent,
    FormularioCreacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
