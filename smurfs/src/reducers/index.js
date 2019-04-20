/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  GET_SMURFS,
  GET_SMURFS_FAILURE,
  GET_SMURFS_SUCCESS,
  ADD_SMURF,
  ADD_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        fetchingSmurfs: false
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        addingSmurf: false
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        deletingSmurf: false
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false
      };
    default:
      return state;
  }
};

export default reducer;
