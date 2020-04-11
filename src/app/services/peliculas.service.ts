import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

//import { map } from 'rxjs/operators';

import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';



// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apikey = '1855e3c6a4a48896a7cb8a59c05398c1';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  pruebaElemento: any;

  constructor(private http: HttpClient, private jsonp: Jsonp) {}

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&languaje=es&callback=JSONP_CALLBACK`;

    //return this.http.get(url);
    return this.jsonp.get(url).pipe(map((res) => res.json()));
  }

  getPopularChildren() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&languaje=es&callback=JSONP_CALLBACK`;

    //return this.http.get(url);
    return this.jsonp.get(url).pipe(map((res) => res.json()));
  }

  getSearchMovie(texto: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&languaje=es&callback=JSONP_CALLBACK`;

    // return this.http.get(url);
    return this.jsonp.get(url).pipe(map((res) => res.json()));
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = desde.toISOString().substring(0, 10);

    const hastaStr = hasta.toISOString().substring(0, 10);

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&languaje=es&callback=JSONP_CALLBACK`;

    // return this.http.get(url);
    // return this.jsonp.get(url).map((res) => res.json());
    return this.jsonp.get(url).pipe(map((res) => res.json()));
  }
}
