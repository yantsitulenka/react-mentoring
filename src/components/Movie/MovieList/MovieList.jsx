import React, { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import PopUpWrapper from '../../PopUpWrapper/PopUpWrapper';
import MovieForm from '../MovieForm/MovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import './moviesList.scss';
import movieList from '../../../data/data';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState({});

  useEffect(() => {
    setMovies(movieList);
  }, []);

  const editMovie = (id) => {
    setOpenEditForm(!openEditForm);
    setMovieToEdit(movies.find((el) => el.id === id));
  };

  const toggleEditMovieForm = () => {
    setOpenEditForm(!openEditForm);
  };

  const toggleDeleteMovieForm = () => {
    setOpenDeleteForm(!openDeleteForm);
  };

  return (
    <section className="movie-list container">
      {openEditForm
        ? (
          <PopUpWrapper>
            <MovieForm movie={movieToEdit} toggleForm={toggleEditMovieForm} />
          </PopUpWrapper>
        ) : ''}
      {openDeleteForm
        ? (
          <PopUpWrapper>
            <DeleteMovie toggleForm={toggleDeleteMovieForm} />
          </PopUpWrapper>
        ) : ''}
      <div className="movie-list__movies-count">
        {movies.length}
        &nbsp;movies found
      </div>
      <div className="movie-list__list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            editMovie={editMovie}
            deleteMovie={toggleDeleteMovieForm}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
