import configureStore from 'redux-mock-store';
import * as actions from './index';
import {
  closeDeleteMovieForm,
  closeEditMovieForm, deleteMovieAsync, deleteMovieAsyncSuccess,
  editMovieAsync,
  editMovieAsyncSuccess, filterByGenre,
  movieOperationAsyncError, openDeleteMovieForm,
  openEditMovieForm, searchMovieAsync,
  setMoviesAsync,
} from './index';

const mockStore = configureStore();
const store = mockStore();

describe('test set actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('test set values from API success', () => {
    test('dispatches the correct action', () => {
      const expectedActions = [
        {
          type: 'SET_MOVIES_ASYNC_SUCCESS',
          movies: [1, 2, 3],
          total: 3,
        },
      ];

      store.dispatch(actions.setMoviesAsyncSuccess([1, 2, 3], 3));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('test set values from API error', () => {
    test('dispatches the correct action', () => {
      const expectedActions = [
        {
          type: 'SET_MOVIES_ASYNC_ERROR',
        },
      ];

      store.dispatch(actions.setMoviesAsyncError());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Actions:', () => {
    expect(setMoviesAsync()).toEqual({
      type: 'SET_MOVIES_ASYNC',
    });
    expect(openEditMovieForm('1')).toEqual({
      type: 'OPEN_EDIT_MOVIE_FORM',
      id: '1',
    });
    expect(closeEditMovieForm()).toEqual({
      type: 'CLOSE_EDIT_MOVIE_FORM',
    });
    expect(editMovieAsync('movie')).toEqual({
      type: 'EDIT_MOVIE_ASYNC',
      movie: 'movie',
    });
    expect(editMovieAsyncSuccess('movie')).toEqual({
      type: 'EDIT_MOVIE_ASYNC_SUCCESS',
      movie: 'movie',
    });
    expect(movieOperationAsyncError()).toEqual({
      type: 'MOVIE_OPERATION_ASYNC_ERROR',
    });
    expect(openDeleteMovieForm('id')).toEqual({
      type: 'OPEN_DELETE_MOVIE_FORM',
      id: 'id',
    });
    expect(closeDeleteMovieForm()).toEqual({
      type: 'CLOSE_DELETE_MOVIE_FORM',
    });
    expect(deleteMovieAsync('id')).toEqual({
      type: 'DELETE_MOVIE_ASYNC',
      id: 'id',
    });
    expect(deleteMovieAsyncSuccess('id')).toEqual({
      type: 'DELETE_MOVIE_ASYNC_SUCCESS',
      id: 'id',
    });
    expect(searchMovieAsync('query')).toEqual({
      type: 'SEARCH_MOVIE_ASYNC',
      query: 'query',
    });
    expect(filterByGenre('genre')).toEqual({
      type: 'FILTER_MOVIES_ASYNC',
      genre: 'genre',
    });
  });
});
