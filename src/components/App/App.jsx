import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SortingPanel from '../Movie/SortingPanel/SortingPanel';
import MovieList from '../Movie/MovieList/MovieList';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MovieInfo from '../Movie/MovieInfo/MovieInfo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieInfo />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
      <Main>
        <SortingPanel />
        <ErrorBoundary>
          <MovieList />
        </ErrorBoundary>
      </Main>
      <Footer>
        <Logo />
      </Footer>
    </Router>
  );
}
