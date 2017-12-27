import React, { Component } from "react";
import PicButton from "../PicButton";
import "./GameBoard.css";
import images from "../../images.json";



class GameBoard extends Component {
	//setting this.state.images to equal the images json array:
	state = {
		images
	};

  // Map over this.state.images and render a PicButton component for each images(images.json) object
  render() {
    return (
      <div className="game-board">
        
        {this.state.images.map(image => (
          
          <PicButton
            choosePic={this.choosePic}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />

        ))}

      </div>
    );

  }

};

export default GameBoard;