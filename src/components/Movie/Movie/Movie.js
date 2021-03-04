import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movie.scss';

const Movie = (props) => {
  const { data } = props;
  const { title, poster_path, tagline, release_date } = data;
  const [showOptionsFlag, showOptions] = useState(false);

  return (
    <div className="movie">
      <div className="movie__dots" onClick={() => showOptions(true)} role="button" />
      { showOptionsFlag
        ? (
          <div className="movie__options">
            <span className="movie__options-close" onClick={() => showOptions(false)} role="button">&#10006;</span>
            <ul>
              <li>Edit</li>
              <li>Delite</li>
            </ul>
          </div>
        )
        : ''}
      <img src={poster_path} alt={title} />
      <div className="movie__info">
        <div>
          <div className="movie__info-name">
            {title}
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

export default Movie;
