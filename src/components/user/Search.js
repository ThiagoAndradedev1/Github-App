import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";
import git from "../../assets/github.gif";

const Search = () => {
  const [username, setUsername] = useState("");

  const githubContext = useContext(GithubContext);
  const { getUser, clearUsers, user } = githubContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setAlert("Você precisa digitar algo.", "danger");
    } else {
      getUser(username.trim());
      setUsername("");
    }
  };

  const onChange = (e) => setUsername(e.target.value);

  return (
    <div>
      <img src={git} className="gitImg" alt="usergit" />
      <form onSubmit={onSubmit} className="form">
        <Alert />
        <input
          type="text"
          name="text"
          placeholder="Pesquisar por usuário..."
          value={username}
          onChange={onChange}
        />
        <button className="btn btn-dark btn-block" type="submit">
          <i className="fas fa-search mr-5"></i> Pesquisar
        </button>
      </form>
      {user && (
        <button className="btn btn-danger btn-block mt-10" onClick={clearUsers}>
          <i className="fas fa-trash-alt mr-5"></i> Limpar
        </button>
      )}
    </div>
  );
};

export default Search;
