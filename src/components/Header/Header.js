import React, { Component } from "react";
import "./Header.css";

const Header = props => 
  <div>
 	<jumbotron>
		<h1 link="" className="title">Frozen Memory Game</h1>;
		<div className="counter">{props.children}</div>;
		<div className="header">{props.children}</div>;
	</jumbotron>
  </div>;

export default Header;

