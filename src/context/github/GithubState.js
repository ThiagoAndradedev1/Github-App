import React, { useCallback, useReducer } from "react";
import GithubContext from "./GithubContext";
import axios from "axios";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USER,
  SEARCH_REPOS,
  SEARCH_STARRED,
  CLEAR_USERS,
  SET_LOADING,
  HANDLE_ERROR,
} from "../types";

const Github = (props) => {
  const initialState = {
    user: {},
    repos: [],
    starred: [],
    loading: false,
    noResult: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUser = async (username) => {
    setLoading();

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);

      dispatch({
        type: SEARCH_USER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: HANDLE_ERROR,
      });
    }
  };

  const getRepos = useCallback(async (username) => {
    try {
      setLoading();

      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      dispatch({
        type: SEARCH_REPOS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: HANDLE_ERROR,
      });
    }
  }, []);

  const getStarred = useCallback(async (username) => {
    try {
      setLoading();

      const res = await axios.get(
        `https://api.github.com/users/${username}/starred`
      );

      dispatch({
        type: SEARCH_STARRED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: HANDLE_ERROR,
      });
    }
  }, []);

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        repos: state.repos,
        starred: state.starred,
        loading: state.loading,
        noResult: state.noResult,
        getRepos,
        getUser,
        getStarred,
        clearUsers,
      }}
    >
      {props.children};
    </GithubContext.Provider>
  );
};

export default Github;
