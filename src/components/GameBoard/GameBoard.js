import React, { Component } from "react";
import images from "../../image-data.json";
import "./GameBoard.css";


//Components
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import Footer from "../Footer";
import PicButton from "../PicButton";



class GameBoard extends Component {
	//setting this.state.images to equal the images json array:
	state = {
		images,
    score: 0,
    topScore: 0,
    left: 11
	};

  componenetDidMount() {
    this.setState({
      images: this.shufflePics(this.state.images)
    })
  };

  handleCorrectGuess = imagesLeft => {
    const { topScore, score, left } = this.state;
    const increasedScore = score + 1;
    //use ternary to decide wheter new win delivered a new hightest score...
    const newTopScore = increasedScore > topScore ? increasedScore : topScore;
    const newleft = left - 1;
    this.setState ({
      images: this.shufflePics(imagesLeft),
      score: increasedScore,
      topScore: newTopScore,
      left: newleft
    })
  };

  handleIncorrectGuess = images => {
    this.setState ({
      images: this.reset(images),
      score: 0
    })
  };

  handleWin = images => {
    this.setState ({
      images: this.reset(images),
      score: 0
    })
  }

  shufflePics = images => {
    let currentIndex = images.length - 1;
    while (currentIndex > 0){
      const randomNum = Math.floor(Math.random() * (currentIndex + 1));
      const lastIndexPlaceholder = images[currentIndex];
      images[currentIndex] = images[randomNum];
      images[randomNum] = lastIndexPlaceholder;
      currentIndex--;
    }
    return images;
  };

  reset = images => {
    const resetImages = images.map(item => ({ ...item, clicked: false}) );
    return this.shufflePics(resetImages);
  }

  handleItemClick = id => {
    let correctGuess = false;
    
    const imagesLeft = this.state.images.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        //error handler >> ensure that the pic has not already been clicked:
        if(!newItem.clicked) {
          newItem.clicked = true;
          correctGuess = true;

          if(this.state.score === 12) {
            return this.handleWin(this.state.images)
          }
        }
      }
      return newItem;
    });
    //if correctGuess is true, then the images (and their new clicked state) will be passed into the corect guess handler and vice versa.
    correctGuess ? this.handleCorrectGuess(imagesLeft) : this.handleIncorrectGuess(imagesLeft);
  }

  // Map over this.state.images and render a PicButton component for each images(images.json) object
  render() {
    return (
    <div>
      <Nav score={this.state.score} topScore={this.state.topScore} />
      <Header/>

      <Container className="game-board">
        {this.state.images.map(item => (      
          <PicButton
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            handleClick={this.handleItemClick}
            gameOver={this.state.lives !== 0 && this.state.topScore}
          />
        ))}
      </Container>

      <Footer/>
    </div>
    );

  }

};

export default GameBoard;

  // reorderImages = id => {
  //   //create random Shuffle Math function:
  //   function randomShuffle (array) {
  //     for (let i = array.length-1; i>0; i--) {
  //       let randomNum = Math.floor((Math.random() * i) + 1);
  //       [array[i], array[randomNum]] = [array[randomNum], array[i]];
  //     }     
  //   }