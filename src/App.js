import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "../src/context/github/GithubState";
import AlertState from "../src/context/alert/AlertState";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Repos from "./components/user/Repos";
import Starred from "./components/user/Starred";
import NotFound from "./components/pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/repos/:name" component={Repos} />
              <Route exact path="/starred/:name" component={Starred} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
