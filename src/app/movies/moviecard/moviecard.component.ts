import { Component, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {MovieDataService} from  '../movie-data.service'


export interface Data
{
  page:number,
  results:[adult:String,
  backdrop_path:String,
  genre_ids:[number,number,number],
  id:string,
  original_language:String,
  original_title:String,
  overview:String,
  popularity:String,
  poster_path:String,
  release_date:String,
  title:String,
  video:String,
  vote_average:String,
  vote_count:String,]

  total_pages:number,
  total_results:number   
}

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  faStar=faStar;
  faCalendar=faCalendar;
  faFilm=faFilm;
  data:any;
  constructor(private user:MovieDataService) 
  { 
    this.user.getApiData().subscribe(data=>{console.warn(data)
      this.data=data;
    })
  }
  ngOnInit(): void {
  }

}
