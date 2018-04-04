import React, { Component } from "react";
import "./PtsCounter.css";

class PtsCounter extends Component {

	state = {
		message: "",
		animating: false
	};

	//when a new "score" or "topScore" prop is received, then the "componentWillReceiveProps" fn commences...
	componentWillReceiveProps({ score, topScore }) {
		let newState = { animating: true };
		if ( score === 0 && topScore === 0 ) {
			newState.message = ""
		}
		else if ( score === 0 && topScore > 0 ) {
			newState.message = "incorrect"
		}
		else {
			newState.message = "correct"
		}

		this.setState( newState, () =>
			setTimeout( () => this.setState({ animating:false}), 500 )
		);
	}

	renderMessage = () => {
		switch (this.state.message) {
			case "correct":
				return "Good thinking! You're correct!";
			case "incorrect":
				return "You guessed incorrectly.";
			default:
				return "Click below to begin earning points."
		}
	}

  render() {
  	return (
	  <div className="point-counter">
	    <li className={this.state.animating ? this.state.message : ""}>
	        {this.renderMessage()}
	    </li>
	  </div>
    );
  }
};

export default PtsCounter;


	// countPoints = points => {
	// 	if (this.choosePic === false) {
	// 		this.choosePic = true;
	// 		points ++;

	// 	}
	// 	else {
	// 		points = 0;
	// 		console.log("SORRY! You didn't guess correctly.. you've guessed this one previously");
	// 		gameover()
	// 	}

	// 	this.setState({ points });
	// };