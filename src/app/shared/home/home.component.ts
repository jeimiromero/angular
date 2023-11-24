import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { HammerModule } from '@angular/platform-browser';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
