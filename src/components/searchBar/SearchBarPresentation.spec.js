import SearchBarPresentation from './SearchBarPresentation';
import React from 'react';
import render from 'react-test-renderer';
import { mount } from 'enzyme';

describe('SearchBarPresentation', () => {
  test('should render', () => {
    const component = render.create(
      <SearchBarPresentation 
        search={ () => {} }
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should be able to submit a valid search', () => {
    const mockSearchFunc = jest.fn();
    const wrapper = mount(<SearchBarPresentation search={ mockSearchFunc } />);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    input.simulate('change', {target: { value: 'abc' }});
    button.simulate('click');

    expect(mockSearchFunc.mock.calls.length).toBe(1);
    expect(mockSearchFunc.mock.calls[0][0].searchTerm).toBe('abc');
  });
});