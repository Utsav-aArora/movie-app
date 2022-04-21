import { Component, OnInit} from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MovieResponse from '../models/movieResponse';
import {MovieDataService} from  '../movie-data.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  backButton=false;
  faChevronRight=faChevronRight;
  constructor(private movieservice:MovieDataService) 
  { 
  
  }
  ngOnInit(): void {
  }
  getData() {
    return this.movieservice.getData()
  }
  getfilterData() {
    return this.movieservice.getfilterData()
  }
}