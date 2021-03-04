import React from 'react';
import Logo from '../Logo/Logo';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Search from '../Search/Search';
import backgroundImage from '../../images/background.jpg';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__background">
      <img src={backgroundImage} alt="background" />
    </div>
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
);

export default Header;
