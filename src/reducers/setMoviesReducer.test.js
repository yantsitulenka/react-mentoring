import rootReducer from './index';

let initialState = {
  movies: [],
  openMovieEditForm: false,
  openMovieDeleteForm: false,
  openMovieCreateForm: false,
  movieToEdit: {},
  idMovieIdToDelete: '',
  total: 0,
  filter: 'all',
};

describe('test reducers', () => {
  test('returns correct initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  test('SET_MOVIES_ASYNC_SUCCESS returns the correct state', () => {
    const action = { type: 'SET_MOVIES_ASYNC_SUCCESS', movies: [1, 2, 3], total: 3 };

    const expectedState = {
      ...initialState,
      movies: [1, 2, 3],
      total: 3,
      setMoviesError: false,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test(' SET_MOVIES_ASYNC_ERROR returns the correct state', () => {
    const action = { type: 'SET_MOVIES_ASYNC_ERROR' };

    const expectedState = {
      ...initialState,
      setMoviesError: true,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('OPEN_EDIT_MOVIE_FORM returns the correct state', () => {
    const action = { type: 'OPEN_EDIT_MOVIE_FORM', id: '123' };
    initialState = {
      movies: [{ id: '122' }, { id: '123' }],
      openMovieEditForm: false,
      openMovieDeleteForm: false,
      openMovieCreateForm: false,
      movieToEdit: { },
      idMovieIdToDelete: '',
      total: 0,
      filter: 'all',
    };
    const expectedState = {
      ...initialState,
      movieToEdit: { id: '123' },
      openMovieEditForm: true,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('CLOSE_EDIT_MOVIE_FORM returns the correct state', () => {
    const action = { type: 'CLOSE_EDIT_MOVIE_FORM' };

    const expectedState = {
      ...initialState,
      movieToEdit: { },
      openMovieEditForm: false,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('EDIT_MOVIE_ASYNC returns the correct state', () => {
    const action = { type: 'EDIT_MOVIE_ASYNC', movie: { id: '123' } };

    const expectedState = {
      ...initialState,
      movieToEdit: { id: '123' },
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('EDIT_MOVIE_ASYNC_SUCCESS returns the correct state', () => {
    const action = { type: 'EDIT_MOVIE_ASYNC_SUCCESS' };
    initialState = {
      movies: [{ id: '122' }, { id: '123' }],
      openMovieEditForm: false,
      openMovieDeleteForm: false,
      openMovieCreateForm: false,
      movieToEdit: { id: '123' },
      idMovieIdToDelete: '',
      total: 0,
      filter: 'all',
    };
    const expectedState = {
      ...initialState,
      openMovieEditForm: false,
      movieToEdit: {},
      apiError: false,
      movies: [{ id: '122' }, { id: '123' }],
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('MOVIE_OPERATION_ASYNC_ERROR returns the correct state', () => {
    const action = { type: 'MOVIE_OPERATION_ASYNC_ERROR' };

    const expectedState = {
      ...initialState,
      apiError: true,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('OPEN_DELETE_MOVIE_FORM returns the correct state', () => {
    const action = { type: 'OPEN_DELETE_MOVIE_FORM', id: '123' };

    const expectedState = {
      ...initialState,
      idMovieIdToDelete: '123',
      openMovieDeleteForm: true,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('CLOSE_DELETE_MOVIE_FORM returns the correct state', () => {
    const action = { type: 'CLOSE_DELETE_MOVIE_FORM' };

    const expectedState = {
      ...initialState,
      idMovieIdToDelete: '',
      openMovieDeleteForm: false,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('DELETE_MOVIE_ASYNC_SUCCESS returns the correct state', () => {
    const action = { type: 'DELETE_MOVIE_ASYNC_SUCCESS', id: '123' };
    initialState = {
      movies: [{ id: '122' }, { id: '123' }],
      openMovieEditForm: false,
      openMovieDeleteForm: false,
      openMovieCreateForm: false,
      movieToEdit: { id: '123' },
      idMovieIdToDelete: '',
      total: 2,
      filter: 'all',
    };
    const expectedState = {
      ...initialState,
      idMovieIdToDelete: '',
      openMovieDeleteForm: false,
      total: 1,
      apiError: false,
      movies: [{ id: '122' }],
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('OPEN_ADD_MOVIE_FORM returns the correct state', () => {
    const action = { type: 'OPEN_ADD_MOVIE_FORM' };

    const expectedState = {
      ...initialState,
      openMovieCreateForm: true,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('CLOSE_ADD_MOVIE_FORM returns the correct state', () => {
    const action = { type: 'CLOSE_ADD_MOVIE_FORM' };

    const expectedState = {
      ...initialState,
      openMovieCreateForm: false,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('ADD_MOVIE_ASYNC_SUCCESS returns the correct state', () => {
    const action = { type: 'ADD_MOVIE_ASYNC_SUCCESS', movie: { id: '123' } };

    const expectedState = {
      ...initialState,
      apiError: false,
      openMovieCreateForm: false,
      movies: [{ id: '122' }, { id: '123' }, { id: '123' }],
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  test('FILTER_MOVIES_ASYNC returns the correct state', () => {
    const action = { type: 'FILTER_MOVIES_ASYNC', genre: '123' };

    const expectedState = {
      ...initialState,
      filter: '123',
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
});
