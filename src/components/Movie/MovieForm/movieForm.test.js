import React from 'react';
import rerender from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  render, fireEvent, getByText,
} from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieForm from './MovieForm';
import PopUpWrapper from '../../PopUpWrapper/PopUpWrapper';

configure({ adapter: new Adapter() });

describe('when MovieForm', () => {
  test('then snapshot created for add movie', () => {
    const initialStore = {
      movieToEdit: {},
    };
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const movieFilterComponent = rerender.create(
      <Provider store={store}>
        <PopUpWrapper>
          <MovieForm />
        </PopUpWrapper>
      </Provider>,
    );

    const tree = movieFilterComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then snapshot created for edit movie', () => {
    const initialStore = {
      movieToEdit: {
        id: 337167,
        title: 'Fifty Shades Freed',
        tagline: "Don't miss the climax",
        vote_average: 6.1,
        vote_count: 1195,
        release_date: '2018-02-07',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
        budget: 55000000,
        revenue: 136906000,
        genres: [
          'Drama',
          'Romance',
        ],
        runtime: 106,
      },
    };
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const movieFilterComponent = rerender.create(
      <Provider store={store}>
        <PopUpWrapper>
          <MovieForm />
        </PopUpWrapper>
      </Provider>,
    );

    const tree = movieFilterComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test click on genre', () => {
    const initialStore = {
      movieToEdit: {},
    };
    const store = configureStore([])(initialStore);
    const { container } = render(
      <Provider store={store}>
        <PopUpWrapper>
          <MovieForm />
        </PopUpWrapper>
      </Provider>,
    );
    const countValue = getByText(container, 'Select Genre');
    const list = container.querySelector('.add-movie-form__selector-list');
    expect(list.classList.contains('hidden')).toBe(true);
    fireEvent.click(countValue);
    expect(list.classList.contains('hidden')).toBe(false);
  });

});
