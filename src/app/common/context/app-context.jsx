import React from 'react';

const AppContext = React.createContext({
  searchQuery: '',
  sortBy: 'name',
});

export default AppContext;
