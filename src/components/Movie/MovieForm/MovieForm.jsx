import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import './movieForm.scss';
import {
  closeEditMovieForm, editMovieAsync, closeAddMovieForm, addMovieAsync,
} from '../../../actions';

const SignUpSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('This field is required'),
  release_date: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('This field is required'),
  poster_path: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('This field is required'),
  overview: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('This field is required'),
  runtime: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('This field is required'),
});

const MovieForm = ({
  tempMovie, closeEditMovieForm, closeAddMovieForm, submitAddMovie, submitEditMovie,
}) => {
  const isEditForm = !!tempMovie.title;
  const [showGenreList, setShowGenreList] = useState(false);

  return (
    <div className="add-movie-form">
      <div className="add-movie-form__close" />
      <span
        className="add-movie-form__close"
        onClick={() => (isEditForm ? closeEditMovieForm() : closeAddMovieForm())}
        role="button"
      >
        &#10006;
      </span>
      <h2 className="add-movie-form__title">Add Movie</h2>

      <Formik
        initialValues={{
          title: tempMovie?.title || '',
          release_date: tempMovie?.release_date || '',
          poster_path: tempMovie?.poster_path || '',
          overview: tempMovie?.overview || '',
          runtime: tempMovie?.runtime || '',
          genres: tempMovie?.genres || '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={
          (val) => (isEditForm
            ? submitEditMovie({ ...tempMovie, ...val, runtime: parseInt(val.runtime, 10) })
            : submitAddMovie({ ...val, runtime: parseInt(val.runtime, 10) }))
        }
        render={({ resetForm }) => (
          <Form>
            <div className="add-movie-form__fields">
              <label htmlFor="title">Title</label>
              <Field name="title" placeholder="Title" type="text" />
              <ErrorMessage
                name="title"
                component="div"
                className="add-movie-form__fields-validation"
              />
            </div>

            <div className="add-movie-form__fields">
              <label htmlFor="release_date">Release Date</label>
              <Field name="release_date" placeholder="2000-01-01" type="text" />
              <ErrorMessage
                name="release_date"
                component="div"
                className="add-movie-form__fields-validation"
              />
            </div>

            <div className="add-movie-form__fields">
              <label htmlFor="poster_path">POster path</label>
              <Field name="poster_path" type="text" />
              <ErrorMessage
                name="poster_path"
                component="div"
                className="add-movie-form__fields-validation"
              />
            </div>

            <div className="add-movie-form__fields">
              <label htmlFor="overview">Overview</label>
              <Field name="overview" type="text" />
              <ErrorMessage
                name="overview"
                component="div"
                className="add-movie-form__fields-validation"
              />
            </div>

            <div className="add-movie-form__fields">
              <label htmlFor="genre">GenreL</label>
              <div id="genre" className="add-movie-form__selector" onClick={() => setShowGenreList(!showGenreList)}>Select Genre</div>
              <div className={`add-movie-form__selector-list ${showGenreList ? '' : 'hidden'}`} role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="genres" value="crime" />
                  Crime
                </label>
                <label>
                  <Field type="checkbox" name="genres" value="documentary" />
                  Documentary
                </label>
                <label>
                  <Field type="checkbox" name="genres" value="horror" />
                  Horror
                </label>
                <label>
                  <Field type="checkbox" name="genres" value="comedy" />
                  Comedy
                </label>
              </div>
            </div>

            <div className="add-movie-form__fields">
              <label htmlFor="runtime">Runtime</label>
              <Field name="runtime" type="text" />
              <ErrorMessage
                name="runtime"
                component="div"
                className="add-movie-form__fields-validation"
              />
            </div>

            <div className="add-movie-form__buttons">
              <button type="button" className="button secondary" onClick={resetForm}>Reset</button>
              <button type="submit" className="button asd">Submit</button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempMovie: state.movieToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  closeEditMovieForm: () => dispatch(closeEditMovieForm()),
  closeAddMovieForm: () => dispatch(closeAddMovieForm()),
  submitEditMovie: (movie) => dispatch(editMovieAsync(movie)),
  submitAddMovie: (movie) => dispatch(addMovieAsync(movie)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieForm);
