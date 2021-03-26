import { APIUrl } from './settings';

export const fetchMoviesApi = async (sortType) => {
  const url = !sortType ? APIUrl : `${APIUrl}?sortBy=${sortType}&sortOrder=desc`;
  return fetch(url).then((res) => res.json());
};

export const filterMoviesApi = async (genre) => {
  const url = genre === 'all' ? APIUrl : `${APIUrl}?filter=${genre}`;
  return fetch(url).then((res) => res.json());
};

export const searchMovieApi = async (query) => fetch(`${APIUrl}?search=${query}&searchBy=title`).then((res) => res.json());

export const editMovieApi = async (movie) => fetch(APIUrl, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', accept: 'application/json' },
  body: JSON.stringify(movie),
});

export const deleteMovieApi = async (id) => fetch(`${APIUrl}/${id}`, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json', accept: 'application/json' },
});

export const addMovieApi = async (movie) => fetch(APIUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', accept: 'application/json' },
  body: JSON.stringify(movie),
});
