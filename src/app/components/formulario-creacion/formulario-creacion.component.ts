import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-creacion',
  templateUrl: './formulario-creacion.component.html',
  styleUrls: ['./formulario-creacion.component.css']
})
export class FormularioCreacionComponent implements OnInit {
  static prefijo:string = "./assets/";
  imagen:string="";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarImagen(evento:any):void {
    this.imagen = FormularioCreacionComponent.prefijo + evento.target.value;
  }

  crearSerie():void{

  }
  limpiar():void{

  }
}
