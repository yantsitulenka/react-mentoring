import React from 'react';
import './sortingPanel.scss';

const Header = () => (
  <section className="sorting-panel container">
    <div className="sorting-panel__filter">
      <ul>
        <li className="active">All</li>
        <li>Documentary</li>
        <li>Comedy</li>
        <li>Horror</li>
        <li>Crime</li>
      </ul>
    </div>
    <div className="sorting-panel__sorting">
      <span>Sort by</span>
      <select>
        <option>Release date</option>
        <option>Rating</option>
      </select>
    </div>
  </section>
);

export default Header;
