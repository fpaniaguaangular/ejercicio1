import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  template: `
    <h1 class="fondo-verde">{{texto}}</h1>
  `,
  styles:[
    'h1 { color:white; }',
    '.fondo-verde { background-color:green; }'
  ]  
})
export class EncabezadoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  texto:string="Encabezado";

  constructor() { 
    console.log("Constructor...");
  }
 
  ngOnInit():void {
    console.log("ngOnInit...");
  }

  ngOnChanges():void {
    console.log("ngOnChanges...");
  }

  ngAfterViewInit():void {
    console.log("ngAfterViewInit...");
  }

  ngOnDestroy():void {
    console.log("ngOnDestroy...");
  }
  
}
