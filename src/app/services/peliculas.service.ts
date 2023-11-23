import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../interfaces/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getPeliculas(){

    return this.http.get('https://api.themoviedb.org/4/account/653adcb5e894a600ff158787/movie/rated?page=1&language=en-US')
    
  }
}
