import { Component, OnInit } from '@angular/core';
import { movies } from '../movies/movies-model';

@Component({
  selector: 'app-movie-list-section',
  templateUrl: './movie-list-section.component.html',
  styleUrls: ['./movie-list-section.component.css']
})
export class MovieListSectionComponent implements OnInit {

  movieList= new movies().moviesList;
  constructor() { }

  ngOnInit(): void {
  }

}
