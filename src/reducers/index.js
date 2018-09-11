import { combineReducers } from 'redux';
import LibraryReducers from './LibraryReducers.js';
import SelectionReducer from './SelectionsReducer.js';

export default combineReducers({
  libraries: LibraryReducers,
  selectorLibraryId: SelectionReducer
});
