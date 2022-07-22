import React from 'react';
import '../styles/action-bar.css';
import AppContext from '../../common/context/app-context';

const SearchBar = () => {
  const {
    searchQuery,
    setSearchQuery
  } = React.useContext(AppContext);
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  return (
    <input
      type='text'
      value={searchQuery}
      onChange={handleChange}
      size='120'
      className='search-bar'
    />
  );
}

export default SearchBar;
