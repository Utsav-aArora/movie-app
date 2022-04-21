import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OpenedmovieComponent } from './openedmovie/openedmovie.component';
import { HeaderComponent } from './header/header.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';


@NgModule({
  declarations: [
    MovieComponent,
    ButtonComponent,
    OpenedmovieComponent,
    HeaderComponent,
    MoviecardComponent, 
    FilterComponent, DisplaymoviesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
 
  ],
})
export class MoviesModule { }
