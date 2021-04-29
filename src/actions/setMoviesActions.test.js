import configureStore from 'redux-mock-store';
import * as actions from './index';

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
});
