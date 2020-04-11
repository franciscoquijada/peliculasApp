import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pelisApp';
  peliculas: any = [];

  constructor(public _ps: PeliculasService /*private api: PeliculasService*/) {
      this._ps.getPopulares()
      .subscribe(
        data => console.log(data)
      );
  }

  getPeliculasPopulares() {
    /*this.api.getPopulares().subscribe(data => {
      for (const d of (data as any)) {
        this.peliculas.push({
          id: d.id,
          titulo: d.title,
        });
      }
      console.log(this.peliculas);
    });*/
    //console.log(this.api.getPopulares());
  }


}
