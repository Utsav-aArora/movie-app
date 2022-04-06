import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MoviesModule } from '../movies/movies.module';
@NgModule({
  declarations: [
    ErrorpageComponent,
    
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    CommonModule,
    
  ]
})
export class CommonModule { }
