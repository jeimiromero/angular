import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

const routes:Routes=[
  
  {path: 'home',component: HomeComponent },
  {path: 'buscar/:texto',component: BuscarComponent },
  {path: 'pelicula/:id',component: PeliculaComponent },

  {path: '',pathMatch: 'full', redirectTo: '/home' },
  {path: '**',pathMatch: 'full', redirectTo: '/home' },
]


@NgModule({
    imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule { }
