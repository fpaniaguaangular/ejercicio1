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
  }
  getSeries():Serie[]{
    return this.series;
  }
}
