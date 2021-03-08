import React from 'react';
import PropTypes from 'prop-types';
import './addMovieForm.scss';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = {
      isEditForm: !!movie,
      movie: movie || {
        id: '',
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: '',
      },
      showGenreList: false,
      validationError: {
        title: false,
        release_date: false,
        poster_path: false,
        genres: false,
        overview: false,
        runtime: false,
      },
    };
    this.changeField = this.changeField.bind(this);
    this.changeFieldCheckbox = this.changeFieldCheckbox.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.showGenreList = this.showGenreList.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  changeField(event) {
    const { movie, validationError } = this.state;
    const { target } = event;
    const { name } = target;
    movie[name] = target.value;
    validationError[name] = false;
    this.setState({ movie, validationError });
  }

  submitForm() {
    const { movie, validationError } = this.state;
    const { toggleForm } = this.props;
    let validationFail = false;
    Object.keys(movie).forEach((key) => {
      if (key === 'genres') {
        validationFail = (!movie[key].length || validationFail);
        validationError[key] = !movie[key].length;
      } else {
        validationFail = (movie[key] === '' || validationFail);
        validationError[key] = movie[key] === '';
      }
    });
    if (!validationFail) {
      toggleForm();
    }
    this.setState({ movie, validationError });
  }

  showGenreList() {
    const { showGenreList } = this.state;
    this.setState({ showGenreList: !showGenreList });
  }

  changeFieldCheckbox(event) {
    const { movie } = this.state;
    const { target } = event;
    const { name, checked } = target;
    if (checked) {
      movie.genres.push(name);
    } else {
      movie.genres = movie.genres.filter((genre) => genre !== name);
    }
    this.setState({ movie });
  }

  resetFields() {
    const { movie } = this.state;
    Object.keys(movie).forEach((key) => {
      movie[key] = key === 'genres' ? [] : '';
    });
    this.setState({ movie });
  }

  render() {
    const { movie, validationError, showGenreList, isEditForm } = this.state;
    const { toggleForm } = this.props;
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
          <input id="title" name="title" type="text" value={movie.title} onChange={this.changeField} />
          <div className={`add-movie-form__fields-validation ${validationError.title ? '' : 'hidden'}`}>Please enter movie title</div>
        </div>

        <div className="add-movie-form__fields">
          <label className="add-movie-form__label" htmlFor="release">Release Date</label>
          <input id="release" name="release_date" type="text" value={movie.release_date} onChange={this.changeField} />
          <div className={`add-movie-form__fields-validation ${validationError.release_date ? '' : 'hidden'}`}>Please enter correct release date in format yyyy-mm-dd</div>
        </div>

        <div className="add-movie-form__fields">
          <label className="add-movie-form__label" htmlFor="image">Image URL</label>
          <input id="image" name="poster_path" type="text" value={movie.poster_path} onChange={this.changeField} />
          <div className={`add-movie-form__fields-validation ${validationError.poster_path ? '' : 'hidden'}`}>Please enter movie image address</div>
        </div>

        <div className="add-movie-form__fields">
          <label htmlFor="genre">GenreL</label>
          <div id="genre" className="add-movie-form__selector" onClick={this.showGenreList}>Select Genre</div>
          <div className={`add-movie-form__selector-list ${showGenreList ? '' : 'hidden'}`}>
            <label>
              <input type="checkbox" name="crime" onChange={this.changeFieldCheckbox} checked={movie.genres.includes('crime')} />
              Crime
            </label>
            <label>
              <input type="checkbox" name="documentary" onChange={this.changeFieldCheckbox} checked={movie.genres.includes('documentary')} />
              Documentary
            </label>
            <label>
              <input type="checkbox" name="horror" onChange={this.changeFieldCheckbox} checked={movie.genres.includes('horror')} />
              Horror
            </label>
            <label>
              <input type="checkbox" name="comedy" onChange={this.changeFieldCheckbox} checked={movie.genres.includes('comedy')} />
              Comedy
            </label>
          </div>
          <div className={`add-movie-form__fields-validation ${validationError.genres ? '' : 'hidden'}`}>Please enter movie image address</div>
        </div>

        <div className="add-movie-form__fields">
          <label className="add-movie-form__label" htmlFor="overview">Overview</label>
          <input id="overview" name="overview" type="text" value={movie.overview} onChange={this.changeField} />
          <div className={`add-movie-form__fields-validation ${validationError.overview ? '' : 'hidden'}`}>Please enter movie overview</div>
        </div>

        <div className="add-movie-form__fields">
          <label className="add-movie-form__label" htmlFor="runtime">Runtime</label>
          <input id="runtime" name="runtime" type="text" value={movie.runtime} onChange={this.changeField} />
          <div className={`add-movie-form__fields-validation ${validationError.runtime ? '' : 'hidden'}`}>Please enter movie runtime</div>
        </div>

        <div className="add-movie-form__buttons">
          <button type="button" className="button secondary" onClick={this.resetFields}>Reset</button>
          <button type="button" className="button" onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

AddMovieForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default AddMovieForm;
