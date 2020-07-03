import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import About from "../components/AboutMe";
import Projects from "../components/Projects";
import Background from "../images/Background";
import HomePage from "../components/HomePage";

function App() {
  return (
    <Router>
      <div className="app-container" style={Background}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
