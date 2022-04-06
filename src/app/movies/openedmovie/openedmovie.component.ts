import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-openedmovie',
  templateUrl: './openedmovie.component.html',
  styleUrls: ['./openedmovie.component.scss']
})
export class OpenedmovieComponent implements OnInit {
  faChevronRight=faChevronRight;
  faFilm=faFilm;
  faVideoCamera=faVideoCamera;
  constructor() {}
  ngOnInit(): void {
  }

}
