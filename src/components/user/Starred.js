import React, { useContext, Fragment, useEffect } from "react";
import StarredItems from "./StarredItems";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import Warning from "../../assets/warning.svg";
import Engineers from "../../assets/engineers.svg";

const Starred = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { starred, getStarred, loading, noResult } = githubContext;

  useEffect(() => {
    const fetchStarred = async () => {
      getStarred(match.params.name);
    };
    fetchStarred();
  }, [match.params.name, getStarred]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {noResult && (
          <>
            <h1 className="mt-10 text-center">
              Aconteceu um erro ao recuperar os favoritos!
            </h1>
            <img src={Warning} alt="warning" className="heightImg" />
          </>
        )}
        {starred.length === 0 && (
          <>
            <h1 className="mt-10 text-center">
              Esse usuário não possui favoritos!
            </h1>
            <img src={Engineers} alt="Engineers" className="mt-30 heightImg" />
          </>
        )}
        <div className="grid-3">
          {starred.map((star) => {
            return <StarredItems key={star.id} star={star} />;
          })}
        </div>
      </Fragment>
    );
  }
};

export default Starred;
