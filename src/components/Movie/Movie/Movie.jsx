import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie.scss';
import { connect } from 'react-redux';
import { openDeleteMovieForm, openEditMovieForm } from '../../../actions';

const Movie = ({ data, editMovie, deleteMovie }) => {
  const { id, title, poster_path, tagline, release_date } = data;
  const [showOptionsFlag, showOptions] = useState(false);

  return (
    <div className="movie">
      <div className="movie__dots" onClick={() => showOptions(true)} role="button" />
      { showOptionsFlag
        ? (
          <div className="movie__options">
            <span className="movie__options-close" onClick={() => showOptions(false)} role="button">&#10006;</span>
            <ul>
              <li onClick={() => { showOptions(false); editMovie(id); }}>Edit</li>
              <li onClick={() => { showOptions(false); deleteMovie(id); }}>Delete</li>
            </ul>
          </div>
        )
        : ''}
      <img src={poster_path} alt={title} />
      <div className="movie__info">
        <div>
          <div className="movie__info-name">
            <Link to={`/movie/${id}`}>{title}</Link>
          </div>
          <div className="movie__info-tagline">
            {tagline}
          </div>
        </div>
        <div className="movie__release">
          {release_date.split('-')[0]}
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editMovie: (id) => dispatch(openEditMovieForm(id)),
  deleteMovie: (id) => dispatch(openDeleteMovieForm(id)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Movie);
