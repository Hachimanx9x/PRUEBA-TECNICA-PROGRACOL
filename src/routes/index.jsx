import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
//pages
import Desktop from "../pages/Desktop";
import Profile from "../pages/Profile";
import Figures from "../pages/Figures";
import NewFigure from "../pages/NewFigure";
//scss
import "./routes.scss";

export default function Routes() {
  return (
    <Router>
      <div className="o-container">
        <div className="o-sidebar">
          <Sidebar />
        </div>
        <div className="o-content">
          <Navbar />

          <Switch>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/figures/new">
              <NewFigure />
            </Route>
            <Route exact path="/figures">
              <Figures />
            </Route>
            <Route exact path="/">
              <Desktop />
            </Route>
            <Route path="*">
              <h2>Hola ruta no encontrada</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
