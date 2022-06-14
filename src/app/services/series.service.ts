import { Injectable } from '@angular/core';
import { Serie } from '../entities/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private series:Serie[];
  constructor() {
    this.series=[];
  }
  addSerie(serie:Serie):void{
    this.series.push(serie);
    console.log("Agregando serie:");
    for (let serie of this.series){
      console.log(serie.titulo);
    }
  }
  deleteSerie(serie:Serie):void{
    this.series.splice(this.series.indexOf(serie),1);
  }
  getSeries():Serie[]{
    return this.series;
  }
}
