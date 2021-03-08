import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SortingPanel from '../Movie/SortingPanel/SortingPanel';
import MovieList from '../Movie/MovieList/MovieList';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <SortingPanel />
        <ErrorBoundary>
          <MovieList />
        </ErrorBoundary>
      </Main>
      <Footer>
        <Logo />
      </Footer>
    </>
  );
}
