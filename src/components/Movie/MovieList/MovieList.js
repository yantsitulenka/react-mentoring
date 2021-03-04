import React from 'react';
import movies from '../../../data/data';
import Movie from '../Movie/Movie';
import './moviesList.scss';

const MovieList = () => (
  <section className="movie-list container">
    <div className="movie-list__movies-count">
      {movies.length}
      &nbsp;movies found
    </div>
    <div className="movie-list__list">
      {movies.map((movie) => <Movie key={movie.id} data={movie} />)}
    </div>
  </section>
);

export default MovieList;
