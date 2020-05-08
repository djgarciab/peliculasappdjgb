import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "8def013563565d13f97fc429d133b53d";
  private ulrMoviedb: string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient) { }

  peliculas: any[] =[];
  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);


      // 01, 02, 03, ... 29, 30, 31
     let dd = (desde.getDate() < 10 ? '0' : '') + desde.getDate();
     // 01, 02, 03, ... 10, 11, 12
     let MM = ((desde.getMonth() + 1) < 10 ? '0' : '') + (desde.getMonth() + 1);
     // 1970, 1971, ... 2015, 2016, ...
     let yyyy = desde.getFullYear();


      // 01, 02, 03, ... 29, 30, 31
      let ddh = (hasta.getDate() < 10 ? '0' : '') + hasta.getDate();
      // 01, 02, 03, ... 10, 11, 12
      let MMh = ((hasta.getMonth() + 1) < 10 ? '0' : '') + (hasta.getMonth() + 1);
      // 1970, 1971, ... 2015, 2016, ...
      let yyyyh = hasta.getFullYear();


      let desdeStr = `${ yyyy }-${ MM }-${ dd }`;
      let hastaStr = `${ yyyyh }-${ MMh }-${ ddh }`;

   

    let url = `${ this.ulrMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
        .pipe(map ( (res:any)=> res.results ) );
  }


  getPopulares(){
    let url = `${ this.ulrMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
        .pipe(map( (res:any)=> res.results));
  }

  
  getPopularesNinios(){
    //url duda
    let url = `${ this.ulrMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
        .pipe(map( (res: any) => res.results));
  }

  buscarPelicula( texto: string){
    let url = `${ this.ulrMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url )
      .pipe( 
            map( (res: any) => {
              this.peliculas = res.results;
              console.log(res);
              return res.results;
            } )
      );
  }

  getPelicula( id:string ){
    
    let url = `${ this.ulrMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
        .pipe(map( (res: any) => res));
  }

}
