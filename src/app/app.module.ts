import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ListadoSeriesComponent } from './components/listado-series/listado-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { FormularioCreacionComponent } from './components/formulario-creacion/formulario-creacion.component';
import { EncabezadoPrincipalComponent } from './components/encabezado-principal/encabezado-principal.component';
import { EncabezadoSecundarioComponent } from './components/encabezado-secundario/encabezado-secundario.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';
import { ComponenteTemplateComponent } from './components/componente-template/componente-template.component';
import { FichaDemoComponent } from './components/ficha-demo/ficha-demo.component';
import { FichaDemo2Component } from './components/ficha-demo2/ficha-demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    ListadoSeriesComponent,
    SerieComponent,
    FormularioCreacionComponent,
    EncabezadoPrincipalComponent,
    EncabezadoSecundarioComponent,
    CatalogoProductosComponent,
    DirectivasEstructuralesComponent,
    ComponenteTemplateComponent,
    FichaDemoComponent,
    FichaDemo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
