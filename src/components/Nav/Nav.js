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
        <div type="button" className="collapsed navbar-toggle">
          <span className="points-counter">
            <PtsCounter/>
          </span>
        </div>
        <a href="#" className="navbar-brand">
        </a>
      </div>
    </div>
  </nav>;

export default Nav;



//////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// export class NavBar extends React.Component {
//   render() {
//     const pages = ['home', 'blog', 'about', 'contact'];
    
//     const navLinks = pages.map(page => {
//       return (
//         <a href={'/' + page}>
//           {page}
//         </a>
//       )
//     });

//     return <nav>{navLinks}</nav>;
//   }
// }
// export NavBar;