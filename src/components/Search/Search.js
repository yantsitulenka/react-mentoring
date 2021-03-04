import React from 'react';
import './search.scss';

const Search = () => (
  <div className="search">
    <h2 className="search__title">
      Find your movie
    </h2>
    <div className="search__panel">
      <input className="search__field" type="text" placeholder="What do you want to watch?" />
      <button className="search__button" type="button">Search</button>
    </div>
  </div>
);

export default Search;
