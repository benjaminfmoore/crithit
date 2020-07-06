import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import AboutMe from "./pages/aboutme/AboutMe";
import Projects from "./pages/projects/Projects";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <Router>
      <div className="main-page">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
