import React from 'react';
import { useDispatch } from 'react-redux';
import SearchBarPresentation from './SearchBarPresentation';
import { searchMusic } from '../../redux/actions/musicActions';

const SearchBarSmart = () => {
  const dispatch = useDispatch();

  const search = (searchObject) => {
    dispatch(searchMusic(searchObject.searchTerm));
  };
  
  return (
    <SearchBarPresentation 
      search={ search }
    />
  );
};

export default SearchBarSmart;