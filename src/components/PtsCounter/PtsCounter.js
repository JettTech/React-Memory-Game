import React, { Component } from "react";
import "./PtsCounter.css";
import images from "../../images.json";

let points = 0;
function gameover() {
		//reset ALL of the images(json).choosePic to false...
		images.forEach(function(image) {
			image.choosePic = false;
		});		

 		//display "start over" modal;
			// >>>RESEARCH/FIGURE OUT how to do this part...
};

class PtsCounter extends Component {

	state = {
		points
	};

	countPoints = points => {
		// //if the image has NOT yet been selected, then add point
		if (this.choosePic === false) {
			this.choosePic = true;
			points ++;

		}
		else {
			points = 0;
			console.log("SORRY! You didn't guess correctly.. you've guessed this one previously");
			gameover()
		}

		this.setState({ points });
	};

  render() {
  	return (
      <div className="point-counter">
        Points: {this.state.points}
      </div>
    );
  }

};
export default PtsCounter;