import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-principal',
  templateUrl: './encabezado-principal.component.html',
  styleUrls: ['./encabezado-principal.component.css']
})
export class EncabezadoPrincipalComponent implements OnInit {
  claseRoja:any;
  claseVariable:any;
  constructor() { 
    this.claseRoja = {
      color:'rgb(100,250,10)',
      backgroundColor:'blue'
    }
    this.claseVariable = {
      color:'white',
    }
    setInterval(()=>{
      this.cambiarColor()
    },500);
  }

  ngOnInit(): void {
  }

  cambiarColor(){
    if (this.claseRoja.backgroundColor==='blue'){
      this.claseRoja.backgroundColor='black';
    } else {
      this.claseRoja.backgroundColor='blue';
    }
  }
}
