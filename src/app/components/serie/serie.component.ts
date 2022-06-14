import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Serie } from 'src/app/entities/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  @Input() serie:Serie|any={};
  @Output() eventoFavorito:EventEmitter<Serie>;
  favorito:boolean=false;

  estilo:string[]=["card"];
  
  constructor(private servicioSeries:SeriesService) { 
    console.log("En el constructor:" + this.serie.titulo);//En este punto, serie no está disponible (no se ha inyectado)
    this.eventoFavorito = new EventEmitter<Serie>();
  }

  ngOnInit(): void {
    console.log("En el ngOnInit:" + this.serie.titulo);//En este punto, serie está disponible (ha sido inyectado)
  }

  seleccionar(){
    this.eventoFavorito.emit(this.serie);
    this.favorito=true;
  }
  eliminar(){
    this.servicioSeries.deleteSerie(this.serie);
  }
}