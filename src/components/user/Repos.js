import React, { useContext, Fragment, useEffect } from "react";
import ReposItems from "./ReposItems";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import Warning from "../../assets/warning.svg";
import Cancel from "../../assets/cancel.svg";

const Repos = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { repos, getRepos, loading, noResult } = githubContext;

  useEffect(() => {
    const fetchRepos = async () => {
      getRepos(match.params.name);
    };
    fetchRepos();
  }, [getRepos, match.params.name]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {noResult && (
          <>
            <h1 style={{ textAlign: "center", marginTop: "10px" }}>
              Aconteceu um erro ao recuperar os Repositórios!
            </h1>
            <img src={Warning} alt="warning" style={{ height: "250px" }} />
          </>
        )}
        {repos.length === 0 && (
          <>
            <h1 style={{ textAlign: "center", marginTop: "10px" }}>
              Esse usuário não possui repos!
            </h1>
            <img
              src={Cancel}
              alt="cancel"
              style={{ height: "250px", marginTop: "30px" }}
            />
          </>
        )}
        <div className="grid-3">
          {repos.map((repo) => {
            console.log(repo);
            return <ReposItems key={repo.id} repo={repo} />;
          })}
        </div>
      </Fragment>
    );
  }
};

export default Repos;
