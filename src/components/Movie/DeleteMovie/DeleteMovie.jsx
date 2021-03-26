import React from 'react';
import './deleteMovie.scss';
import { connect } from 'react-redux';
import { closeDeleteMovieForm, deleteMovieAsync } from '../../../actions';

const DeleteMovie = ({ deleteMovie, closeDeleteMovieForm, id }) => (
  <div className="delete-movie-form">
    <span className="delete-movie-form__close" onClick={closeDeleteMovieForm} role="button">&#10006;</span>
    <h2>Delete Movie</h2>
    <div>Are you sure you want to delete this movie?</div>
    <button className="button" onClick={() => deleteMovie(id)}>Delete</button>
  </div>
);

const mapStateToProps = (state) => ({
  id: state.idMovieIdToDelete,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (id) => dispatch(deleteMovieAsync(id)),
  closeDeleteMovieForm: () => dispatch(closeDeleteMovieForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteMovie);
