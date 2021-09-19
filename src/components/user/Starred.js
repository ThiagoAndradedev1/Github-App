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
            <h1 style={{ textAlign: "center", marginTop: "10px" }}>
              Aconteceu um erro ao recuperar os starred!
            </h1>
            <img src={Warning} alt="warning" style={{ height: "250px" }} />
          </>
        )}
        {starred.length === 0 && (
          <>
            <h1 style={{ textAlign: "center", marginTop: "10px" }}>
              Esse usuário não possui starred!
            </h1>
            <img
              src={Engineers}
              alt="Engineers"
              style={{ height: "250px", marginTop: "30px" }}
            />
          </>
        )}
        <div className="grid-3">
          {starred.map((star) => {
            console.log(star);
            return <StarredItems key={star.id} star={star} />;
          })}
        </div>
      </Fragment>
    );
  }
};

export default Starred;
