import { put, takeEvery, call } from 'redux-saga/effects';
import {
  editMovieAsyncSuccess, setMoviesAsyncSuccess, deleteMovieAsyncSuccess, addMovieAsyncSuccess,
  setMoviesAsyncError, movieOperationAsyncError,
} from '../actions';
import {
  deleteMovieApi, editMovieApi, fetchMoviesApi, searchMovieApi, addMovieApi, filterMoviesApi,
} from '../api/api';

function* fetchSetMoviesAsync(action) {
  try {
    const response = yield call(() => fetchMoviesApi(action.sortType));
    yield put(setMoviesAsyncSuccess(response.data, response.totalAmount));
  } catch (error) {
    yield put(setMoviesAsyncError());
  }
}

function* fetchEditMovieAsync(action) {
  try {
    yield call(() => editMovieApi(action.movie));
    yield put(editMovieAsyncSuccess());
  } catch (error) {
    yield put(movieOperationAsyncError());
  }
}

function* fetchDeleteMovieAsync(action) {
  try {
    yield call(() => deleteMovieApi(action.id));
    yield put(deleteMovieAsyncSuccess(action.id));
  } catch (error) {
    yield put(movieOperationAsyncError());
  }
}

function* fetchSearchMovie(action) {
  try {
    const response = yield call(() => searchMovieApi(action.sortType));
    yield put(setMoviesAsyncSuccess(response.data, response.totalAmount));
  } catch (error) {
    yield put(setMoviesAsyncError());
  }
}

function* fetchAddMovie(action) {
  try {
    yield call(() => addMovieApi(action.movie));
    yield put(addMovieAsyncSuccess(action.movie));
  } catch (error) {
    yield put(movieOperationAsyncError());
  }
}

function* fetchFilterMovies(action) {
  try {
    const response = yield call(() => filterMoviesApi(action.genre));
    yield put(setMoviesAsyncSuccess(response.data, response.totalAmount));
  } catch (error) {
    yield put(setMoviesAsyncError());
  }
}

function* root() {
  yield takeEvery('SET_MOVIES_ASYNC', fetchSetMoviesAsync);
  yield takeEvery('EDIT_MOVIE_ASYNC', fetchEditMovieAsync);
  yield takeEvery('DELETE_MOVIE_ASYNC', fetchDeleteMovieAsync);
  yield takeEvery('SEARCH_MOVIE_ASYNC', fetchSearchMovie);
  yield takeEvery('ADD_MOVIE_ASYNC', fetchAddMovie);
  yield takeEvery('FILTER_MOVIES_ASYNC', fetchFilterMovies);
  yield takeEvery('SORT_ASYNC', fetchSetMoviesAsync);
}

export default root;
