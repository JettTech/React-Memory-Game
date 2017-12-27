import React, { Component } from "react";
import "./PicButton.css";
import images from "../../images.json";


class PicButton extends Component {
  //setting this.state.images to equal the images json array:
  state = {
    //images
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

  // Map over this.state.images and render a PicButton component for each images(images.json) object
  render() {
    return (
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
        <span onClick={() => props.reorderImages(props.id)} className="reorderImages">
          &#x1f500;
        </span>
      </div>
    );
  }
}

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