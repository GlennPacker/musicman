import React from 'react';
import { useSelector } from 'react-redux';
import SearchResultsPresentation from './SearchResultsPresentation';

const SearchResultsSmart = () => {
  const searchResults = useSelector(s => s.music.searchResults);

  return ( 
    <SearchResultsPresentation
      searchResults={ searchResults }
    />
  );
};
 
export default SearchResultsSmart;