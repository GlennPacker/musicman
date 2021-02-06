import initialState from './initialState';
import * as actions from '../actions/actions';

export default function musicReducer(state = initialState.music, action) {
  switch(action.type) {
  case actions.SET_MUSIC_SEARCH_RESULTS: 
    return {
      ...state,
      searchResults: [...action.data]
    };
  case actions.SET_ERROR: 
    return {
      ...state,
      error: action.data
    };
  default:
    return state;
  }
}