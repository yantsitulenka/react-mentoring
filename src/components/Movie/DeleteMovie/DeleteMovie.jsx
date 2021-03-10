import React from 'react';
import './deleteMovie.scss';

const DeleteMovie = (props) => (
  <div className="delete-movie-form">
    <span className="delete-movie-form__close" onClick={props.toggleForm} role="button">&#10006;</span>
    <h2>Delete Movie</h2>
    <div>Are you sure you want to delete this movie?</div>
    <button className="button" onClick={props.toggleForm}>Delete</button>
  </div>
);

export default DeleteMovie;
