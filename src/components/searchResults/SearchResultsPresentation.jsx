import React from 'react';
import PropTypes from 'prop-types';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const SearchResultsPresentation = ({searchResults}) => {
  return (
    <Container>
      { searchResults.length ? 
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Artist</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Song</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                searchResults.map((row, index) => (
                  <TableRow key={ index }>
                    <TableCell component="th" scope="row">{ row.artist }</TableCell>
                    <TableCell>{ row.album }</TableCell>
                    <TableCell>{ row.song }</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>  : 
        <Typography>
            No items matching search terms
        </Typography>
      }
    </Container>
  );
};

SearchResultsPresentation.propTypes = {
  searchResults: PropTypes.array
};
 
export default SearchResultsPresentation;