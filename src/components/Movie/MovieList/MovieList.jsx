import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMoviesAsync } from '../../../actions';
import Movie from '../Movie/Movie';
import PopUpWrapper from '../../PopUpWrapper/PopUpWrapper';
import MovieForm from '../MovieForm/MovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import './moviesList.scss';

const MovieList = ({ movies, setMoviesFromApi, openMovieEditForm, openMovieDeleteForm, total, setMoviesError }) => {
  useEffect(() => {
    setMoviesFromApi();
  }, []);

  return (
    <section className="movie-list container">
      {openMovieEditForm
        ? (
          <PopUpWrapper>
            <MovieForm />
          </PopUpWrapper>
        ) : ''}
      {openMovieDeleteForm
        ? (
          <PopUpWrapper>
            <DeleteMovie />
          </PopUpWrapper>
        ) : ''}
      <div className="movie-list__movies-count">
        {total}
        &nbsp;movies found
      </div>
      <div className="movie-list__list">
        { setMoviesError
          ? (
            <h1>Sorry, it was a problem with movies loading. Please try again later.</h1>
          ) : '' }
        {movies?.map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
          />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  openMovieEditForm: state.openMovieEditForm,
  openMovieDeleteForm: state.openMovieDeleteForm,
  total: state.total,
  setMoviesError: state.setMoviesError,
});

const mapDispatchToProps = (dispatch) => ({
  setMoviesFromApi: () => dispatch(setMoviesAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
