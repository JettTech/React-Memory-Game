import React, { Component } from "react";
import "./PtsCounter.css";


class PtsCounter extends Component {
	//setting this.state.images to equal the images json array:
	state = {
		//points
	};

	countPoints = id => {
		let points = 0;
		// //if the image has NOT yet been selected, then add point
		// if()
		// //else, reset the counter to 0 >>> start the game over...
		// else{
		// 	points = 0;
		// }

		this.setState({ points });
	};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="point-counter">
        Points: {this.state.points}
      </div>
    );
  }
}

export default PtsCounter;