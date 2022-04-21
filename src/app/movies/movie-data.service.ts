import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import MovieResponse from './models/movieResponse';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private data!:MovieResponse;
  private filterData!:MovieResponse;
  constructor(private http:HttpClient) { 
    this.getApiData().subscribe(data=>{console.warn(data)
      this.data=data;
      
  this.filterData = JSON.parse(JSON.stringify(this.data))
    })
  }
  getData() {
    return this.data.results;
  }
  getfilterData() {
    return this.filterData.results
  }
  getApiData():Observable<MovieResponse>
  {
    let url="https://api.themoviedb.org/3/discover/movie?api_key=35dc3190c1e2fe841d84b3b96ad1fc2b&language=en-US&year=2021";
    return this.http.get<MovieResponse>(url);
  }

  deleteMovie(event: Event, id: number) {
    event.preventDefault()
    event.stopPropagation()
    this.filterData.results= this.filterData.results.filter(function(value){ 
      return value.id!==id;
    })
    this.data.results= this.data.results.filter(function(value){ 
      return value.id!==id;
    })
  }
  mediumRatingFilter()
  {
    this.filterData.results = this.data.results.filter(function(value){ 
      return value.vote_average < 7 ;
    })
  }
  highRatingFilter()
  {
    
    this.filterData.results = this.data.results.filter(function(value){ 
      return value.vote_average >= 7 ;
      
    })
  }
  allRatingFilter()
  {
    
    this.filterData.results = this.data.results.filter(function(value){ 
      return value.vote_average;
      
    })
  }
}
