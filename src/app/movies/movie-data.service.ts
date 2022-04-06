import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http:HttpClient) { }
  getApiData()
  {
    let url="https://api.themoviedb.org/3/discover/movie?api_key=35dc3190c1e2fe841d84b3b96ad1fc2b&language=en-US&year=2021";
    return this.http.get(url);
  }
}
