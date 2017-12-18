import React, { Component } from "react";
import "./PicButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const PicButton = props => (
  <span className="pic-button" {...props}>
    Image Item Example
  </span>
);

export default PicButton;
