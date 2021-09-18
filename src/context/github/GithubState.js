import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import axios from "axios";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USER,
  SEARCH_REPOS,
  SEARCH_STARRED,
  CLEAR_USERS,
  SET_LOADING,
} from "../types";

const Github = (props) => {
  const initialState = {
    user: [],
    repos: [],
    starred: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`);

    console.log(res);

    dispatch({
      type: SEARCH_USER,
      payload: res.data,
    });
  };

  const getRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    dispatch({
      type: SEARCH_REPOS,
      payload: res.data,
    });
  };

  const getStarred = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/starred}`
    );

    dispatch({
      type: SEARCH_STARRED,
      payload: res.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        repos: state.repos,
        starred: state.starred,
        loading: state.loading,
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
