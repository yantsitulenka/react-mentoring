import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import { Link } from 'react-router-dom';
import HeaderBackground from '../../HeaderBackground/HeaderBackground';
import Logo from '../../Logo/Logo';

import './movieInfo.scss';

import movieList from '../../../data/data';

function useMovie(id) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(movieList.find((el) => el.id == id));
  }, []);

  return movie;
}

const MovieInfo = () => {
  const { id } = useParams();
  const movie = useMovie(id);

  return (
    <div className="movie-info">
      <HeaderBackground />
      <div className="container">
        <div className="movie-info__top-panel">
          <Logo />
          <Link to="/" className="movie-info__search-button">
            Search
          </Link>
        </div>
        <div className="movie-info__movie-details">
          <img src={movie?.poster_path} className="movie-details__poster" alt="movie poster" />
          <div>
            <div>
              <h2 className="movie-details__title">
                {movie?.title}
                <div className="movie-details__average">{movie?.vote_average}</div>
              </h2>
            </div>
            <div className="movie-details__tagline">{movie?.tagline}</div>
            <div className="movie-details__time-info">
              <span>{movie?.release_date?.split('-')[0]}</span>
              <span>{movie?.runtime} min</span>
            </div>
            <div className="movie-details__overview">{movie?.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
