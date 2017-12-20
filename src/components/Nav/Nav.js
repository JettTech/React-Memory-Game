import React, { Component } from "react";
import Header from "../Header";
import PtsCounter from "../PtsCounter";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div>The React Memory Game</div>
        <Header/>
        <PtsCounter type="button" className="collapsed navbar-toggle">
          <span className="points-counter"></span>
        </PtsCounter>
        <a href="#" className="navbar-brand">
        </a>
      </div>
    </div>
  </nav>;

export default Nav;