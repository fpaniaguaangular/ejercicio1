import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/entities/serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  @Input() serie:Serie|any={};
  constructor() { }

  ngOnInit(): void {
  }

}
