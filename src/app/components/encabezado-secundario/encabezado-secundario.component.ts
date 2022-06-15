import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-secundario',
  templateUrl: './encabezado-secundario.component.html',
  styleUrls: ['./encabezado-secundario.component.css']
})
export class EncabezadoSecundarioComponent implements OnInit {
  UMBRAL_PRECIO:number=5;
  estilos:string[]=["nivel1"];
  estiloActivox:string[]=["activado"];
  estiloNoActivo:string[]=["desactivado"];
  activo:boolean=true;
  precio:number=2;

  constructor() { 
    setTimeout(()=>{
      this.activo=!this.activo;
    },5000);
  }

  ngOnInit(): void {
  }

  agregarEstilo():void {
    this.estilos.push("colores-inversos");
  }

  esCaro():boolean {
    return this.precio>this.UMBRAL_PRECIO;
  }
  enSaldo():boolean {
    return this.precio<3;
  }
}
