import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/entities/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent implements OnInit {
  public series:Serie[];
  constructor(private seriesService:SeriesService) { 
    this.series = this.seriesService.getSeries();
    console.log(this.series);
  }

  ngOnInit(): void {
  }

}
