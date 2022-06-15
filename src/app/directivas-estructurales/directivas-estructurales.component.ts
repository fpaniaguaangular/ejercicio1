import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.css']
})
export class DirectivasEstructuralesComponent implements OnInit {

  activo:boolean=false;
  importe:number=60;
  diasSemana:string[]=["Lunes","Martes","Miércoles","Jueves"];
  dia:string;
  numeroOpciones:number=3;
  constructor() {
    this.dia = this.diasSemana[3];
  }

  ngOnInit(): void {
  }

  superiorA50(){
    return this.importe>50;
  }
}
