import React from 'react';
import './sortingPanel.scss';
import { connect } from 'react-redux';
import { filterByGenre, sortAsync } from '../../../actions';

const SortingPanel = ({ filterByGenre, filter, sort }) => (
  <section className="sorting-panel container">
    <div className="sorting-panel__filter">
      <ul>
        <li className={filter === 'all' ? 'active' : ''} onClick={() => filterByGenre('all')}>All</li>
        <li className={filter === 'documentary' ? 'active' : ''} onClick={() => filterByGenre('documentary')}>Documentary</li>
        <li className={filter === 'comedy' ? 'active' : ''} onClick={() => filterByGenre('comedy')}>Comedy</li>
        <li className={filter === 'horror' ? 'active' : ''} onClick={() => filterByGenre('horror')}>Horror</li>
        <li className={filter === 'crime' ? 'active' : ''} onClick={() => filterByGenre('crime')}>Crime</li>
      </ul>
    </div>
    <div className="sorting-panel__sorting">
      <span>Sort by</span>
      <select onChange={(e) => sort(e.target.value)}>
        <option></option>
        <option value="release_date">Release date</option>
        <option value="vote_average">Rating</option>
      </select>
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  filterByGenre: (genre) => dispatch(filterByGenre(genre)),
  sort: (type) => dispatch(sortAsync(type)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingPanel);
