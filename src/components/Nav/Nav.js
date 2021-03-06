import React from "react";
import PtsCounter from "../PtsCounter";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-inverse navbar-top">
    <ul>
      <li className="brand">
        <a style={{color:"#e7d60f", textDecoration:"underline"}}>The Star Wars Episode</a>
      </li>
      <PtsCounter score={props.score} topScore={props.topScore} />  
      <li>
        Score: {props.score} | Personal Best: {props.topScore}
      </li>
    </ul>
  </nav>
);

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