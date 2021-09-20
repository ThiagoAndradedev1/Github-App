import React, { useContext, Fragment } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Warning from "../../assets/warning.svg";

const User = () => {
  const githubcontext = useContext(GithubContext);
  const { user, loading, noResult } = githubcontext;

  const { login, avatar_url, followers, following, location, public_repos } =
    user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {noResult && (
          <>
            <h1 className="mt-10 text-center">Esse usuário não existe!</h1>
            <img src={Warning} alt="warning" className="heightImg" />
          </>
        )}
        {user.login && (
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img widthImgAvatar"
                alt="avatarurl"
                width="150px"
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
              <i className="fas fa-box-open mr-5"></i> Repos
            </Link>
            <Link
              to={`/starred/${login}`}
              className="btn btn-dark btn-sm text-center"
            >
              <i className="fas fa-star mr-5"></i> Starred
            </Link>
          </div>
        )}
      </>
    );
  }
};

export default User;
