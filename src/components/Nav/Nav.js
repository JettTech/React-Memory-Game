import React, { Component } from "react";
import PtsCounter from "./components/PtsCounter";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <PtsCounter type="button" className="collapsed navbar-toggle">
          <span className="points-counter">Points Go Here</span>
        </PtsCounter>
        <a href="#" className="navbar-brand">
          React Memory Game
        </a>
      </div>
    </div>
  </nav>;

export default Nav;