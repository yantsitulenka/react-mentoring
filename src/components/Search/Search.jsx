import React, { useState } from 'react';
import './search.scss';
import { connect } from 'react-redux';
import { searchMovieAsync } from '../../actions';

const Search = ({searchMovie}) => {
  const [query, setQuery] = useState('');

  return (
    <div className="search">
      <h2 className="search__title">
        Find your movie
      </h2>
      <div className="search__panel">
        <input className="search__field" type="text" placeholder="What do you want to watch?" onChange={(e) => setQuery(e.target.value)} />
        <button className="search__button" type="button" onClick={() => searchMovie(query)}>Search</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (query) => dispatch(searchMovieAsync(query)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Search);
