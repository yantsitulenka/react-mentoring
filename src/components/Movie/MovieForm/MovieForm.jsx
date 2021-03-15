import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './movieForm.scss';

const MovieForm = (props) => {
  const { movie, toggleForm } = props;
  const isEditForm = !!movie;
  const [title, setTitle] = useState(movie?.title || '');
  const [release_date, setReleaseDate] = useState(movie?.release_date || '');
  const [poster_path, setPosterPath] = useState(movie?.poster_path || '');
  const [overview, setOverview] = useState(movie?.overview || '');
  const [runtime, setRuntime] = useState(movie?.runtime || '');
  const [genres, setGenres] = useState(movie?.genres || '');
  const [showGenreList, setShowGenreList] = useState(false);
  const [validationFail, setValidationFail] = useState(false);

  const changeGenres = (event) => {
    const { target } = event;
    const { name, checked } = target;
    setGenres(checked ? [...genres, name] : genres.filter((genre) => genre !== name));
  };

  const submitForm = () => {
    if (!title || !release_date || !poster_path || !overview || !runtime || !genres.length) {
      setValidationFail(true);
    } else {
      toggleForm();
    }
  };

  const resetFields = () => {
    setTitle('');
    setReleaseDate('');
    setPosterPath('');
    setOverview('');
    setRuntime('');
    setGenres([]);
    setValidationFail(false);
  };

  return (
    <div className="add-movie-form">
      <div className="add-movie-form__close" />
      <span className="add-movie-form__close" onClick={() => toggleForm()} role="button">&#10006;</span>
      <h2 className="add-movie-form__title">Add Movie</h2>

      {isEditForm
        ? (
          <div className="add-movie-form__fields">
            <label className="add-movie-form__label" htmlFor="title">Id</label>
            <div className="add-movie-form__id">{movie.id}</div>
          </div>
        ) : ''}

      <div className="add-movie-form__fields">
        <label className="add-movie-form__label" htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className={`add-movie-form__fields-validation ${validationFail && !title ? '' : 'hidden'}`}>Please enter movie title</div>
      </div>

      <div className="add-movie-form__fields">
        <label className="add-movie-form__label" htmlFor="release">Release Date</label>
        <input id="release" name="release_date" type="text" value={release_date} onChange={(e) => setReleaseDate(e.target.value)} />
        <div className={`add-movie-form__fields-validation ${validationFail && !release_date ? '' : 'hidden'}`}>Please enter correct release date in format yyyy-mm-dd</div>
      </div>

      <div className="add-movie-form__fields">
        <label className="add-movie-form__label" htmlFor="image">Image URL</label>
        <input id="image" name="poster_path" type="text" value={poster_path} onChange={(e) => setPosterPath(e.target.value)} />
        <div className={`add-movie-form__fields-validation ${validationFail && !poster_path ? '' : 'hidden'}`}>Please enter movie image address</div>
      </div>

      <div className="add-movie-form__fields">
        <label htmlFor="genre">GenreL</label>
        <div id="genre" className="add-movie-form__selector" onClick={() => setShowGenreList(!showGenreList)}>Select Genre</div>
        <div className={`add-movie-form__selector-list ${showGenreList ? '' : 'hidden'}`}>
          <label>
            <input type="checkbox" name="crime" onChange={changeGenres} checked={genres.includes('crime')} />
            Crime
          </label>
          <label>
            <input type="checkbox" name="documentary" onChange={changeGenres} checked={genres.includes('documentary')} />
            Documentary
          </label>
          <label>
            <input type="checkbox" name="horror" onChange={changeGenres} checked={genres.includes('horror')} />
            Horror
          </label>
          <label>
            <input type="checkbox" name="comedy" onChange={changeGenres} checked={genres.includes('comedy')} />
            Comedy
          </label>
        </div>
        <div className={`add-movie-form__fields-validation ${validationFail && !genres.length ? '' : 'hidden'}`}>Please enter movie image address</div>
      </div>

      <div className="add-movie-form__fields">
        <label className="add-movie-form__label" htmlFor="overview">Overview</label>
        <input id="overview" name="overview" type="text" value={overview} onChange={(e) => setOverview(e.target.value)} />
        <div className={`add-movie-form__fields-validation ${validationFail && !overview ? '' : 'hidden'}`}>Please enter movie overview</div>
      </div>

      <div className="add-movie-form__fields">
        <label className="add-movie-form__label" htmlFor="runtime">Runtime</label>
        <input id="runtime" name="runtime" type="text" value={runtime} onChange={(e) => setRuntime(e.target.value)} />
        <div className={`add-movie-form__fields-validation ${validationFail && !runtime ? '' : 'hidden'}`}>Please enter movie runtime</div>
      </div>

      <div className="add-movie-form__buttons">
        <button type="button" className="button secondary" onClick={resetFields}>Reset</button>
        <button type="button" className="button" onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
};

MovieForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default MovieForm;
