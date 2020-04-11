import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [],
})
export class GaleriaComponent implements OnInit {
  @Input()
  pelicula;
  @Input()
  titulo;

  /*@Output
  outputData = new EventEmitter();*/

  constructor() {}

  ngOnInit() {
    console.log(this.pelicula);
  }

  /*emitData(data) {
    this.outputData(data);
  }*/
}
