import { Component, OnInit } from '@angular/core';
import { PeliculasService  } from '../../services/peliculas.service';
import { GaleriaComponent } from './galeria.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tituloCartelera: string;
  tituloPopulares: string;
  tituloPopularesChildrens: string;
  cartelera: any;
  populares: any;
  childrens: any;

  constructor(public peliculasService: PeliculasService) {
    this.tituloCartelera = 'Peliculas en Cartelera';
    this.tituloPopulares = 'Peliculas Populares';
    this.tituloPopularesChildrens = 'Peliculas Populares para Niños';

    this.peliculasService.getCartelera().subscribe((data) => {
      // console.log(' Dataaa ' + data.results[0]['poster_path']);
      this.cartelera = data.results;
    });

    this.peliculasService.getPopulares().subscribe((data) => {
      // console.log(' Dataaa ' + data.results[0]['poster_path']);
      this.populares = data.results;
    });

    this.peliculasService.getPopularChildren().subscribe((data) => {
      // console.log(' Dataaa ' + data.results[0]['poster_path']);
      this.childrens = data.results;
    });
  }

  ngOnInit() {}
}
