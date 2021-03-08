import React from 'react';
import movies from '../../../data/data';
import Movie from '../Movie/Movie';
import './moviesList.scss';
import PopUpWrapper from '../../PopUpWrapper/PopUpWrapper';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddEditForm: false,
      openDeleteForm: false,
      movieToEdit: {},
      moviesList: [],
    };

    this.editMovie = this.editMovie.bind(this);
    this.toggleEditMovieForm = this.toggleEditMovieForm.bind(this);
    this.toggleDeleteMovieForm = this.toggleDeleteMovieForm.bind(this);
  }

  componentDidMount() {
    this.setState({ moviesList: movies });
  }

  editMovie(id) {
    const { moviesList } = this.state;
    this.toggleEditMovieForm();
    this.setState({
      movieToEdit: moviesList.find((el) => el.id === id),
    });
  }

  toggleEditMovieForm() {
    const { openAddEditForm } = this.state;
    this.setState({ openAddEditForm: !openAddEditForm });
  }

  toggleDeleteMovieForm() {
    const { openDeleteForm } = this.state;
    this.setState({ openDeleteForm: !openDeleteForm });
  }

  render() {
    const {
      moviesList, movieToEdit, openAddEditForm, openDeleteForm,
    } = this.state;
    return (
      <section className="movie-list container">
        {openAddEditForm
          ? (
            <PopUpWrapper>
              <AddMovieForm movie={movieToEdit} toggleForm={this.toggleEditMovieForm} />
            </PopUpWrapper>
          ) : ''}
        {openDeleteForm
          ? (
            <PopUpWrapper>
              <DeleteMovie toggleForm={this.toggleDeleteMovieForm} />
            </PopUpWrapper>
          ) : ''}
        <div className="movie-list__movies-count">
          {moviesList.length}
          &nbsp;movies found
        </div>
        <div className="movie-list__list">
          {moviesList.map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
              editMovie={this.editMovie}
              deleteMovie={this.toggleDeleteMovieForm}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default MovieList;
