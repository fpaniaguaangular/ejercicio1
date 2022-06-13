import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/entities/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-formulario-creacion',
  templateUrl: './formulario-creacion.component.html',
  styleUrls: ['./formulario-creacion.component.css']
})
export class FormularioCreacionComponent implements OnInit {
  //static prefijo:string = "./assets/";
  //imagen:string="";
  public serie : Serie = { titulo:"", sinopsis:"", numeroTemporadas:0, plataforma:"", director:""};

  constructor(private seriesService:SeriesService) { 

  }

  ngOnInit(): void {
  }

  cambiarImagen(evento:any):void {
    //this.imagen = FormularioCreacionComponent.prefijo + evento.target.value;
  }

  crearSerie():void{
    let nuevaSerie = {...this.serie};
    this.seriesService.addSerie(nuevaSerie);
  }

  limpiar():void{

  }
}
