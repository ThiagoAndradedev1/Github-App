import React from "react";
import AboutMe from "../../assets/about_me.jpg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        marginTop: "55px",
        padding: "50px",
      }}
    >
      <img
        src={AboutMe}
        alt=""
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      <img src="" alt="" />
      <h3 style={{ marginBottom: "20px" }}>@ThiagoAndradedev1</h3>
      <h3>Front End Developer</h3>
      <div
        className="all-center"
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          style={{ color: "black" }}
          href="https://github.com/ThiagoAndradedev1"
        >
          <i
            style={{ paddingRight: "15px", marginTop: "15px" }}
            class="fab fa-github fa-3x"
          ></i>
        </a>
        <a
          style={{ color: "black" }}
          href="https://www.linkedin.com/in/thiago-andrade-8423ab1b8/"
        >
          <i class="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
