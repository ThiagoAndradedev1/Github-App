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
    console.log(user);
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
      <img
        src={git}
        style={{
          margin: "auto",
          display: "block",
          width: "250px",
        }}
        alt="usergit"
      />
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
          <i class="fas fa-search" style={{ marginRight: "5px" }}></i> Pesquisar
        </button>
      </form>
      {user && (
        <button
          style={{ marginTop: "10px" }}
          className="btn btn-danger btn-block"
          onClick={clearUsers}
        >
          <i style={{ marginRight: "5px" }} class="fas fa-trash-alt"></i> Limpar
        </button>
      )}
    </div>
  );
};

export default Search;
