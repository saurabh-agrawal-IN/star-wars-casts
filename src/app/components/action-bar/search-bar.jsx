import React from 'react';
import '../styles/action-bar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  return (
    <input type='text' value={searchQuery} onChange={handleChange} size='120' className='search-bar' />
  );
}

export default SearchBar;
