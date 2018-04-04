import React from "react";
import "./PicButton.css";

const PicButton = props => (
  <div>
    <div className={"click-item${props.gameOver ? 'gameOver' : ''}"} aria-label="click-item" onClick={() => props.handleClick(props.id)}>
      <img className="pic-button" src={props.image} />
    </div>

    <div className="content">
      <h4><strong>{props.name}</strong></h4>
    </div>
  </div> 
);

export default PicButton;