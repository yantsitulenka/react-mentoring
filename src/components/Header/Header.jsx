import React from 'react';
import Logo from '../Logo/Logo';
import AddMovieButton from '../Movie/AddMovieButton/AddMovieButton';
import Search from '../Search/Search';
import PopUpWrapper from '../PopUpWrapper/PopUpWrapper';
import AddMovieForm from '../Movie/AddMovieForm/AddMovieForm';
import backgroundImage from '../../images/background.jpg';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddMovieForm: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    const { openAddMovieForm } = this.state;
    this.setState({ openAddMovieForm: !openAddMovieForm });
  }

  render() {
    const { openAddMovieForm } = this.state;
    return (
      <>
        {openAddMovieForm
          ? (
            <PopUpWrapper>
              <AddMovieForm toggleForm={this.toggleForm} />
            </PopUpWrapper>
          )
          : ''}
        <header className="header">
          <div className="header__background">
            <img src={backgroundImage} alt="background" />
          </div>
          <div className="container">
            <div className="header__logo-panel">
              <Logo />
              <AddMovieButton toggleForm={this.toggleForm} />
            </div>
            <div className="header__search-panel">
              <Search />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
