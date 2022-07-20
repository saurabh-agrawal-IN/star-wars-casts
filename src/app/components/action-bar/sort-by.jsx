import React from 'react';
import { FIELD_NAMES } from '../../common/constants';
import '../styles/action-bar.css';

const SortBy = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  const keys = Object.keys(FIELD_NAMES);
  return (
    <select name="sort-by" id="sort-by" className='sort-by'>
      {keys.map((key) => <option value={key}>{FIELD_NAMES[key]}</option>)}
    </select>
  );
}

export default SortBy;
