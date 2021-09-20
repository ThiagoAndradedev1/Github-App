import React from "react";

const ReposItems = ({
  star: {
    full_name,
    description,
    forks,
    watchers,
    watchers_count,
    owner,
    html_url,
  },
}) => {
  return (
    <div className="card text-center container">
      <a href={html_url}>
        <h1 className="text-success mb-8 nameStyle">{full_name}</h1>
      </a>
      <h4>Dev Original:</h4>{" "}
      <h3 className="badge badge-dark mb-8">@{owner.login}</h3>
      <h3 className="mb-8 fontSizeSm">{description}</h3>
      <h6 className="badge badge-success">{forks} Forks</h6>
      <h6 className="badge badge-danger">{watchers} Watchers</h6>
      <h6 className="badge badge-warning">{watchers_count} Stars</h6>
    </div>
  );
};

export default ReposItems;
