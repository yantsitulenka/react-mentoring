import React from 'react';
import './addMovieButton.scss';
import { connect } from 'react-redux';
import { openAddMovieForm } from '../../../actions';

const AddMovieButton = ({ openAddMovieForm }) => <button type="button" className="add-movie" onClick={openAddMovieForm}>+ Add Movie</button>;

const mapDispatchToProps = (dispatch) => ({
  openAddMovieForm: () => dispatch(openAddMovieForm()),
});
export default connect(
  null,
  mapDispatchToProps,
)(AddMovieButton);
