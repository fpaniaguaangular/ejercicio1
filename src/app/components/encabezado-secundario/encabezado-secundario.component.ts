import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-secundario',
  templateUrl: './encabezado-secundario.component.html',
  styleUrls: ['./encabezado-secundario.component.css']
})
export class EncabezadoSecundarioComponent implements OnInit {

  estilos:string[]=["nivel1"];

  constructor() { }

  ngOnInit(): void {
  }

  agregarEstilo():void {
    this.estilos.push("colores-inversos");
  }

}
