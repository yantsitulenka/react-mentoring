import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SortingPanel from '../Movie/SortingPanel/SortingPanel';
import MovieList from '../Movie/MovieList/MovieList';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MovieInfo from '../Movie/MovieInfo/MovieInfo';
import rootReducer from '../../reducers';
import root from '../../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(root);

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
