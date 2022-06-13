import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

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

  ngOnInit(): void {
    console.log("ngOnInit...");
    this.metodoPruebaError();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges...");
  }

  ngAfterViewInit():void {
    console.log("ngAfterViewInit...");
  }

  ngOnDestroy():void {
    console.log("ngOnDestroy...");
  }

  metodoPruebaError():void {
    try {
      let resultado = this.calcularDoble(4);
      console.log(resultado);
    } catch (objetoDelError) {
      console.error("Te has equivocado, el número no puede impar");
    }
  }
  
  calcularDoble(numero:number):number{
    if (numero%2==0){
      return numero*2;
    } else {
      throw new Error("El número es impar");
    }
  }

}
