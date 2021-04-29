import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './notFoundPage.scss';

const NotFoundPage = () => (
  <div className="not-found-page">
    <div className="container">
      <Logo />
      <div className="not-found-page__description">
        <h1>Page Not Found</h1>
        <Link to="/">Go back to home</Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
