import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import AddMovieButton from '../Movie/AddMovieButton/AddMovieButton';
import Search from '../Search/Search';
import PopUpWrapper from '../PopUpWrapper/PopUpWrapper';
import MovieForm from '../Movie/MovieForm/MovieForm';
import HeaderBackground from '../HeaderBackground/HeaderBackground';

import './header.scss';

const Header = () => {
  const [openAddMovieForm, toggleForm] = useState(false);

  return (
    <>
      {openAddMovieForm
        ? (
          <PopUpWrapper>
            <MovieForm toggleForm={toggleForm} />
          </PopUpWrapper>
        )
        : ''}
      <header className="header">
        <HeaderBackground />
        <div className="container">
          <div className="header__logo-panel">
            <Logo />
            <AddMovieButton toggleForm={toggleForm} />
          </div>
          <div className="header__search-panel">
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
