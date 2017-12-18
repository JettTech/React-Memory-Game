import React, { Component } from "react";
import "./PicButton.css";


const PicButton = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.reorderImages(props.id)} className="shuffle">
    	&#x1f500;
    </span>
  </div>
);

export default PicButton;


//AN ALTERNATIVE METHOD:
// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
// const PicButton = props => (
//   <span className="pic-button" {...props}>
//     Image Item Example
//   </span>
// );

// export default PicButton;