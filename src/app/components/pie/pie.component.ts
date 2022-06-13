import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  anyo:number;
  activo:boolean;
  estadoAnyo:string;
  constructor() { 
    this.anyo = 2022;
    this.activo = false;
    this.estadoAnyo = "desactivado";
  }

  ngOnInit(): void {
  }

  getPropietario():string {
    return "Los magos de la web";
  }

  conmutar():void{
    if (this.estadoAnyo==="desactivado") {
      this.estadoAnyo = "activado";
    } else {
      this.estadoAnyo = "desactivado";
    }
  }

  accionBoton(evento:any):void {
    if (evento.path[0].id==="boton1"){
      console.log("Hemos pulsado el botón 1");
    } else {
      console.log("Hemos pulsado el botón 2");
    };
  }


}
