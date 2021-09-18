import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <h1 style={{ color: "white" }}>
        <i style={{ marginRight: "10px" }} class="fab fa-github"></i>GitHubApp
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
          cursor: "pointer",
          color: "white",
        }}
      >
        <h3 style={{ marginRight: "25px" }}>
          <i class="fas fa-home" style={{ marginRight: "4px" }}></i> Home
        </h3>
        <h3 style={{ marginRight: "20px" }}>
          <i style={{ marginRight: "8px" }} class="fas fa-search"></i>
          Search
        </h3>
        <h3 style={{ marginRight: "20px" }}>
          <i style={{ marginRight: "8px" }} class="fas fa-address-card"></i>
          About
        </h3>
      </div>
    </div>
  );
};

export default Header;
