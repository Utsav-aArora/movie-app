import { Component, OnInit ,Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  backButton=false;
  faChevronRight=faChevronRight;
  constructor() 
  { 
  }
  ngOnInit(): void {
  }
}