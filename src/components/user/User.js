import React, { useContext, Fragment } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Warning from "../../assets/warning.svg";

const User = () => {
  const githubcontext = useContext(GithubContext);
  const { user, loading, noResult } = githubcontext;

  console.log(user);

  const { login, avatar_url, followers, following, location, public_repos } =
    user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {noResult && (
          <>
            <h1 style={{ textAlign: "center", marginTop: "10px" }}>
              Esse usuário não existe!
            </h1>
            <img src={Warning} alt="warning" style={{ height: "250px" }} />
          </>
        )}
        {user.login && (
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img"
                alt=""
                style={{ width: "150px" }}
              />
            </div>
            <ul>
              <li>
                <Fragment>
                  <strong>Nome: </strong> @{login}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Seguidores: </strong> {followers}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Seguindo: </strong> {following}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Repositórios Públicos: </strong> {public_repos}
                </Fragment>
              </li>
              <li>
                <Fragment>
                  <strong>Localização: </strong>{" "}
                  {location ? location : "Indefinido"}
                </Fragment>
              </li>
            </ul>
            <Link
              to={`/repos/${login}`}
              className="btn btn-dark btn-sm text-center"
            >
              <i style={{ marginRight: "5px" }} class="fas fa-box-open"></i>{" "}
              Repos
            </Link>
            <Link
              to={`/starred/${login}`}
              className="btn btn-dark btn-sm text-center"
            >
              <i class="fas fa-star" style={{ marginRight: "5px" }}></i> Starred
            </Link>
          </div>
        )}
      </>
    );
  }
};

export default User;
