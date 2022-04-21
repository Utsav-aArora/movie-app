import { Component, OnInit } from '@angular/core';
import MovieResponse from '../models/movieResponse';
import {MovieDataService} from  '../movie-data.service';
import { ActivatedRoute } from '@angular/router';
import {faStar,faCalendar,faFilm,faCircleXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-displaymovies',
  templateUrl: './displaymovies.component.html',
  styleUrls: ['./displaymovies.component.scss']
})
export class DisplaymoviesComponent implements OnInit {
  i:number=0;
  currentMovie:number=-1;
  faStar=faStar;
  movieId!: string | null;
  constructor(private movieService:MovieDataService,private route:ActivatedRoute) {}

  
  ngOnInit():void 
  {
      this.movieId=this.route.snapshot.paramMap.get('movieIndex');
      console.log(this.movieId);
      this.getCurrentMovie();
  }
  
  getCurrentMovie():void
  { 
    for(this.i=0;this.i<this.getData().length;this.i++)
    {
      if(this.movieId==this.getData()[this.i].title.split(' ').join(''))
      {
       this.currentMovie=this.i;
      }
    }
  }  
  getData()
  {
    return this.movieService.getData();
  }
  

}
