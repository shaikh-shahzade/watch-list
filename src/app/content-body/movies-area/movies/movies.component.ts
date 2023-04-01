import { Component, OnInit } from '@angular/core';
import { movies } from './movies-model';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList = new movies().moviesList;
  constructor() { }

  ngOnInit(): void {
  }

}


