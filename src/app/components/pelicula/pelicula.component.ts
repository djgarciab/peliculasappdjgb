import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = "";
  busqueda: string = "";
  constructor( public _ps:PeliculasService, public router:ActivatedRoute) {

    this.router.params.subscribe( parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];

      if( parametros['busqueda'] ){
        this.busqueda = parametros['busqueda']
      }

      this._ps.getPelicula( parametros['id'] )
      .subscribe( pelicula =>{
        console.log(pelicula);
       this.pelicula=pelicula })    
    })
  }

  ngOnInit() {
  }

}
