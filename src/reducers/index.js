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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_MOVIES_ASYNC_SUCCESS':
    return {
      ...state,
      movies: action.movies,
      total: action.total,
      setMoviesError: false,
    };
  case 'SET_MOVIES_ASYNC_ERROR':
    return {
      ...state,
      setMoviesError: true,
    };
  case 'OPEN_EDIT_MOVIE_FORM':
    return {
      ...state,
      movieToEdit: { ...state.movies.find((el) => el.id === action.id) },
      openMovieEditForm: true,
    };
  case 'CLOSE_EDIT_MOVIE_FORM':
    return {
      ...state,
      movieToEdit: { },
      openMovieEditForm: false,
    };
  case 'EDIT_MOVIE_ASYNC':
    return {
      ...state,
      movieToEdit: action.movie,
    };
  case 'EDIT_MOVIE_ASYNC_SUCCESS':
    return {
      ...state,
      openMovieEditForm: false,
      movieToEdit: {},
      apiError: false,
      movies: state.movies.map((el) => (el.id !== state.movieToEdit.id ? el : state.movieToEdit)),
    };
  case 'MOVIE_OPERATION_ASYNC_ERROR':
    return {
      ...state,
      apiError: true,
    };
  case 'OPEN_DELETE_MOVIE_FORM':
    return {
      ...state,
      idMovieIdToDelete: action.id,
      openMovieDeleteForm: true,
    };
  case 'CLOSE_DELETE_MOVIE_FORM':
    return {
      ...state,
      idMovieIdToDelete: '',
      openMovieDeleteForm: false,
    };
  case 'DELETE_MOVIE_ASYNC_SUCCESS':
    return {
      ...state,
      idMovieIdToDelete: '',
      openMovieDeleteForm: false,
      total: state.total - 1,
      apiError: false,
      movies: state.movies.filter((el) => el.id !== action.id),
    };
  case 'OPEN_ADD_MOVIE_FORM':
    return {
      ...state,
      openMovieCreateForm: true,
    };
  case 'CLOSE_ADD_MOVIE_FORM':
    return {
      ...state,
      openMovieCreateForm: false,
    };
  case 'ADD_MOVIE_ASYNC_SUCCESS':
    return {
      ...state,
      apiError: false,
      openMovieCreateForm: false,
      movies: [...state.movies, action.movie],
    };
  case 'FILTER_MOVIES_ASYNC':
    return {
      ...state,
      filter: action.genre,
    };
  default:
    return state;
  }
};

export default rootReducer;
