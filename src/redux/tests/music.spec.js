import reducer from '../reducers/musicReducer';
import * as actions from '../actions/musicActions';
import expect from 'expect';

describe('music state', () => {   
  it('should set search results', () => {        
    const action = actions.setSearchResults([{ a: 1 }]);
    const initState = {            
      music: {
        searchResults: []
      }
    };

    const result = reducer(initState, action);
    expect(result.searchResults.length).toEqual(1);        
    expect(result.searchResults[0].a).toEqual(1);
  });

  it('should set error', () => {        
    const action = actions.setError('oops');
    const initState = {            
      music: {
        error: null
      }
    };
    
    const result = reducer(initState, action);
    expect(result.error).toEqual('oops');        
  });
});
