import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
