import {
  SEARCH_USER,
  SEARCH_REPOS,
  SEARCH_STARRED,
  CLEAR_USERS,
  SET_LOADING,
  HANDLE_ERROR,
} from "../types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        noResult: false,
      };
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
        noResult: false,
      };
    case SEARCH_STARRED:
      return {
        ...state,
        starred: action.payload,
        loading: false,
        noResult: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        user: {},
        loading: false,
        noResult: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HANDLE_ERROR:
      return {
        ...state,
        user: [],
        loading: false,
        noResult: true,
      };
    default:
      return state;
  }
};

export default GithubReducer;
