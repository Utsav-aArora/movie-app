import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './common/errorpage/errorpage.component';
import { MovieComponent } from './movies/movie/movie.component';
import { OpenedmovieComponent } from './movies/openedmovie/openedmovie.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'name', component: OpenedmovieComponent },
  { path: '',   redirectTo: '/movie', pathMatch: 'full' },
  { path: '**', component:ErrorpageComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
