export const setMoviesAsync = () => ({
  type: 'SET_MOVIES_ASYNC',
});

export const setMoviesAsyncSuccess = (movies, total) => ({
  type: 'SET_MOVIES_ASYNC_SUCCESS',
  movies,
  total,
});

export const setMoviesAsyncError = () => ({
  type: 'SET_MOVIES_ASYNC_ERROR',
});

export const openEditMovieForm = (id) => ({
  type: 'OPEN_EDIT_MOVIE_FORM',
  id,
});

export const closeEditMovieForm = () => ({
  type: 'CLOSE_EDIT_MOVIE_FORM',
});

export const editMovieAsync = (movie) => ({
  type: 'EDIT_MOVIE_ASYNC',
  movie,
});

export const editMovieAsyncSuccess = (movie) => ({
  type: 'EDIT_MOVIE_ASYNC_SUCCESS',
  movie,
});

export const movieOperationAsyncError = () => ({
  type: 'MOVIE_OPERATION_ASYNC_ERROR',
});

export const openDeleteMovieForm = (id) => ({
  type: 'OPEN_DELETE_MOVIE_FORM',
  id,
});

export const closeDeleteMovieForm = () => ({
  type: 'CLOSE_DELETE_MOVIE_FORM',
});

export const deleteMovieAsync = (id) => ({
  type: 'DELETE_MOVIE_ASYNC',
  id,
});

export const deleteMovieAsyncSuccess = (id) => ({
  type: 'DELETE_MOVIE_ASYNC_SUCCESS',
  id,
});

export const searchMovieAsync = (query) => ({
  type: 'SEARCH_MOVIE_ASYNC',
  query,
});

export const filterByGenre = (genre) => ({
  type: 'FILTER_MOVIES_ASYNC',
  genre,
});

export const openAddMovieForm = () => ({
  type: 'OPEN_ADD_MOVIE_FORM',
});

export const closeAddMovieForm = () => ({
  type: 'CLOSE_ADD_MOVIE_FORM',
});

export const addMovieAsync = (movie) => ({
  type: 'ADD_MOVIE_ASYNC',
  movie,
});

export const addMovieAsyncSuccess = (movie) => ({
  type: 'ADD_MOVIE_ASYNC_SUCCESS',
  movie,
});

export const sortAsync = (sortType) => ({
  type: 'SORT_ASYNC',
  sortType,
});
