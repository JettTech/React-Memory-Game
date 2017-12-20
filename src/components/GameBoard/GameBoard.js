import React, { Component } from "react";
import PicButton from "../PicButton";
import "./GameBoard.css";
import images from "../../images.json";



class GameBoard extends Component {
	//setting this.state.images to equal the images json array:
	state = {
		images
	};

	reorderImages = id => {
		//create random Shuffle Math function:
		function randomShuffle (array) {
			for (let i = array.length-1; i>0; i--) {
				let randomNum = Math.floor((Math.random() * i) + 1);
				[array[i], array[randomNum]] = [array[randomNum], array[i]];
			}			
		}

		//change all ids for images (multiply them by math.floor(math.random+1));
		randomShuffle(images);
		const images = this.state.images;
		//
		this.setState({ images });
	};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="game-board">
        {this.state.images.map(image => (
          <PicButton
            removeFriend={this.removeFriend}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;