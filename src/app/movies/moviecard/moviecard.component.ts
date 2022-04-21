import { Component, Input, OnInit } from '@angular/core';
import { faCalendar, faCircleXmark, faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import Movie from '../models/movie';
import MovieResponse from '../models/movieResponse';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  faStar = faStar;
  faCalendar = faCalendar;
  faFilm = faFilm;
  faCircleXmark = faCircleXmark;
  data!: MovieResponse;
  filterData!: MovieResponse;
  @Input() movieData!: Movie;

  constructor(private readonly movieservice: MovieDataService) {

  }
  ngOnInit(): void {
  
  }

  deleteMovie(event: Event, id: number) {
    this.movieservice.deleteMovie(event, id);
  }



}
