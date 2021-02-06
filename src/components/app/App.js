import { Paper } from '@material-ui/core';
import React from 'react';
import SearchBarSmart from '../searchBar/SearchBarSmart';
import { makeStyles } from '@material-ui/core/styles';
import { appStyles } from './App.styles';
import SearchResultsSmart from '../searchResults/SearchResultsSmart';

function App() {
  const styles = makeStyles(appStyles)();
  return (
    <Paper className={ styles.paper }>
      <SearchBarSmart className="search-bar" />
      <SearchResultsSmart />
    </Paper>
  );
}

export default App;
