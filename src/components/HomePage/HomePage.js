import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, getRepos, getStarred, loading } = githubContext;
  let history = useHistory();
  const [name, setName] = useState("");

  if (loading) return <h1>Loading...</h1>;

  const goToRepos = (username) => {
    getRepos(username);
    history.push("/repos");
  };

  const goToStarred = (username) => {
    getStarred(username);
    history.push("/starred");
  };

  return (
    <div className="centerElements">
      <input
        className="inputStyle"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="searchBtnStyle" onClick={() => getUser(name)}>
        Pesquisar
      </button>
      <div className="cardStyle">
        <img
          src={user.avatar_url}
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          alt="avatarimage"
        />
        <h1>{user && user.name}</h1>
        <button
          className="optionsBtnStyle"
          onClick={() => goToRepos(user.name)}
        >
          Repos
        </button>
        <button
          className="optionsBtnStyle"
          onClick={() => goToStarred(user.name)}
        >
          Starred
        </button>
      </div>
    </div>
  );
};

export default HomePage;
