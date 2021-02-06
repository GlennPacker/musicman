import SearchResultsPresentation from './SearchResultsPresentation';
import React from 'react';
import render from 'react-test-renderer';
import { mount } from 'enzyme';

describe('SearchResultsPresentation', () => {
  test('should render with no resuls', () => {
    const component = render.create(
      <SearchResultsPresentation 
        searchResults={ [] }
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render  with results', () => {
    const results = [{
      artist: 'abc',
      album: 'def',
      song: 'ghi'
    }];

    const component = render.create(
      <SearchResultsPresentation 
        searchResults={ results }
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('should be able to submit a valid search', () => {
    const wrapper = mount(
      <SearchResultsPresentation 
        searchResults={ [] } 
      />
    );

    expect(
      wrapper
        .text()
        .toLowerCase()
        .includes('no items matching search terms')
    ).toBe(true);
  });
});