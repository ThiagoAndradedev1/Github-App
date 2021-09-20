import React from "react";

const ReposItems = ({
  repo: { description, forks, watchers, full_name, watchers_count, html_url },
}) => {
  return (
    <div className="card text-center">
      <a href={html_url}>
        <h1 className="text-success nameStyle">{full_name}</h1>
      </a>
      <h3 className="descriptionStyle ">{description}</h3>
      <h6 className="badge badge-success">{forks} Forks</h6>
      <h6 className="badge badge-danger">{watchers} Watchers</h6>
      <h6 className="badge badge-warning">{watchers_count} Stars</h6>
    </div>
  );
};

export default ReposItems;
