import rootReducer from './index';

const initialState = {
  movies: [],
  openMovieEditForm: false,
  openMovieDeleteForm: false,
  openMovieCreateForm: false,
  movieToEdit: {},
  idMovieIdToDelete: '',
  total: 0,
  filter: 'all',
};

describe('test reducer', () => {
  describe('INITIAL_STATE', () => {
    test('returns correct initial state', () => {
      expect(rootReducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('test set movies success', () => {
    test('returns the correct state', () => {
      const action = { type: 'SET_MOVIES_ASYNC_SUCCESS', movies: [1, 2, 3], total: 3 };

      const expectedState = {
        ...initialState,
        movies: [1, 2, 3],
        total: 3,
        setMoviesError: false,
      };

      expect(rootReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('test set movies error', () => {
    test('returns the correct state', () => {
      const action = { type: 'SET_MOVIES_ASYNC_ERROR' };

      const expectedState = {
        ...initialState,
        setMoviesError: true,
      };

      expect(rootReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
