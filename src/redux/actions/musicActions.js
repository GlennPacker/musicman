import * as actions from './actions';
import * as services from '../../services';

export function searchMusic(searchTerm) {
  return function (dispatch) {
    services
      .musicSearch(searchTerm)
      .then(musicResults => dispatch(setSearchResults(musicResults)))
      .catch(err => {
        dispatch(setError(err));
      });
  };
}

export function setSearchResults(musicResults) {
  return {
    type: actions.SET_MUSIC_SEARCH_RESULTS,
    data: musicResults
  };
}

export function setError(err) {
  return {
    type: actions.SET_ERROR,
    data: err
  };
}

