import { Box, Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBarPresentation = ({ search }) => {
  const [form, setForm] = useState({
    searchTerm: ''
  });
  
  const handleChange = e => {
    setForm({
      searchTerm: e.target.value
    });
  };

  const submitSearch =  (e) => {
    e.preventDefault();
    search(form);
  };

  return (
    <Container>
      <form 
        noValidate 
        autoComplete="off"
        onSubmit={ submitSearch }
      >
        <Box 
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <TextField 
            id="searchTerm"
            name="searchTerm"
            label="Search"
            fullWidth
            value={ form.searchTerm }
            onChange={ handleChange }
          />
          <Button 
            variant="contained" 
            color="primary"
            type="submit"
            onClick={ submitSearch }
          >
            Search
          </Button>
        </Box>
      </form>
    </Container>
  );
};

SearchBarPresentation.propTypes = {
  search: PropTypes.func.isRequired
};

export default SearchBarPresentation;