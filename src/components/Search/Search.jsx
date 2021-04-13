import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchMovieAsync } from '../../actions';
import './search.scss';

const Search = ({ searchMovie }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="search">
      <h2 className="search__title">
        Find your movie
      </h2>
      <div className="search__panel">
        <input className="search__field" type="text" placeholder="What do you want to watch?" onChange={(e) => setQuery(e.target.value)} />
        <Link className="search__button" to={`/search/${query}`} onClick={() => searchMovie(query)}>Search</Link>
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
