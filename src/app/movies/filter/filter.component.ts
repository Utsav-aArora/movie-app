import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import MovieResponse from '../models/movieResponse';
import {MovieDataService} from  '../movie-data.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
faFilm=faFilm;
faStarHalfStroke=faStarHalfStroke;
faStar=faStar;
faGreaterThan=faGreaterThan;
faLessThan=faLessThan;
data!:MovieResponse;
  constructor(private movieservice:MovieDataService) {
   
   }
mediumRatingFilter()
{
  this.movieservice.mediumRatingFilter();
}

highRatingFilter()
{
  this.movieservice.highRatingFilter();
}
allRatingFilter()
{
  this.movieservice.allRatingFilter();
}
  ngOnInit(): void {
  }
}
