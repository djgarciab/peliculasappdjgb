import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] [];
  constructor( private router: Router) { }

  ngOnInit() {
  }

  verPelicula(item: any ){
    let peliculaId;
    peliculaId = item.id;
    console.log('ID= ' + peliculaId);
    this.router.navigate(['/film', peliculaId]);
  }

}
