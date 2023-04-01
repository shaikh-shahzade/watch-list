import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { MovieListSectionComponent } from './content-body/movies-area/movie-list-section/movie-list-section.component';
import { MovieDescComponent } from './content-body/movies-area/movie-desc/movie-desc.component';
import { MoviesAreaComponent } from './content-body/movies-area/movies-area.component';
import { MoviesComponent } from './content-body/movies-area/movies/movies.component';
import { MovieComponent } from './content-body/movies-area/movies/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentBodyComponent,
    MovieListSectionComponent,
    MovieDescComponent,
    MoviesAreaComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
