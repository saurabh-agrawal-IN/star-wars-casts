import React from 'react';
import AppContext from './app-context';
import { FIELD_KEYS } from '../constants';

const AppContextProvider = ({
  children,
  ...rest
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState(FIELD_KEYS.name);
  
  const contextValues = {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    ...rest
  };
  
  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
