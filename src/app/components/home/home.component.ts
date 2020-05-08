import { Component, OnInit } from '@angular/core';
import { PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculasPopulares:any[]=[];
  
  cartelera:any;
  populares:any;
  popularesNinios:any;

  constructor( private _ps:PeliculasService) {

    this._ps.getCartelera()
    .subscribe( (data: any) =>  this.cartelera = data );

    this._ps.getPopulares()
    .subscribe( (data: any) =>  this.populares = data );

    this._ps.getPopularesNinios()
    .subscribe( (data: any) =>  this.popularesNinios = data );

/*
    this._ps.getPopulares()
      .subscribe( (data:any) =>{
          this.peliculasPopulares = data;
          //console.log(this.peliculasPopulares);
      }) ;

*/
   }

  ngOnInit() {
  }

}
