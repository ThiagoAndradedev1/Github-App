import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "../src/context/github/GithubState";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </GithubState>
  );
};

export default App;
