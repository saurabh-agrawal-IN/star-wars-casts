import React from 'react';
import { FIELD_NAMES } from '../../common/constants';
import '../styles/action-bar.css';
import AppContext from '../../common/context/app-context';

const SortBy = () => {
  const { sortBy, setSortBy } = React.useContext(AppContext);

  /**
   * Event handler when the select value changed.
   * @param {Object} e - an event object
   */
  const handleChange = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
  };
  
  const keys = Object.keys(FIELD_NAMES);
  return (
    <div className='group-sort-by'>
      <span className='typography'>Sort By: </span>
      <select
        name="sort-by"
        id="sort-by"
        className='select-sort-by'
        onChange={handleChange}
        value={sortBy}
      >
        {keys.map((key) => <option key={`${key}`} value={key}>{FIELD_NAMES[key]}</option>)}
      </select>
    </div>
  );
}

export default SortBy;
