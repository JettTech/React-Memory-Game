import React, { Component } from "react";
import "./Header.css";

const Header = props => 
  <div>
 	<jumbotron>
		<h1 className="title">Star Wars Epiosodes</h1>
		{/*<div className="header">{props.children}</div>*/}
	</jumbotron>
  </div>;

export default Header;

