import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import AddMovieButton from '../Movie/AddMovieButton/AddMovieButton';
import Search from '../Search/Search';
import PopUpWrapper from '../PopUpWrapper/PopUpWrapper';
import MovieForm from '../Movie/MovieForm/MovieForm';
import HeaderBackground from '../HeaderBackground/HeaderBackground';

import './header.scss';

const Header = ({ openAddMovieForm }) => (
  <>
    {openAddMovieForm
      ? (
        <PopUpWrapper>
          <MovieForm />
        </PopUpWrapper>
      )
      : ''}
    <header className="header">
      <HeaderBackground />
      <div className="container">
        <div className="header__logo-panel">
          <Logo />
          <AddMovieButton />
        </div>
        <div className="header__search-panel">
          <Search />
        </div>
      </div>
    </header>
  </>
);
const mapStateToProps = (state) => ({
  openAddMovieForm: state.openMovieCreateForm,
});

export default connect(
  mapStateToProps,
)(Header);
