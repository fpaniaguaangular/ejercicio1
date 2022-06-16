import { Component, OnInit } from '@angular/core';
import { FichaDemoComponent } from '../ficha-demo/ficha-demo.component';
import { FichaDemo2Component } from '../ficha-demo2/ficha-demo2.component';
import { FormularioCreacionComponent } from '../formulario-creacion/formulario-creacion.component';
import { ListadoSeriesComponent } from '../listado-series/listado-series.component';

@Component({
  selector: 'app-componente-template',
  templateUrl: './componente-template.component.html',
  styleUrls: ['./componente-template.component.css']
})
export class ComponenteTemplateComponent implements OnInit {

  componenteDinamico:any;
  componenteDinamico1=FichaDemoComponent;
  componenteDinamico2=FichaDemo2Component;

  cesta:string[]=['pan'];

  nombre:string="Fernando";

  constructor() { 
    this.componenteDinamico=this.componenteDinamico1;
    setInterval(()=>{
      if (this.componenteDinamico==this.componenteDinamico1){
        this.componenteDinamico=this.componenteDinamico2;
      } else {
        this.componenteDinamico=this.componenteDinamico1;
      }
    },1000);
  }

  ngOnInit(): void {
  }

}
