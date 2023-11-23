import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private peliculasSvc:PeliculasService){

    this.peliculasSvc.getPeliculas().subscribe(res=>{
      console.log(res);
    })
  }
  ngOnInit(): void {
        
  }

}
