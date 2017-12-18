import React from "react";

import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Nav from "./components/MsgBoard";
import images from "./images.json";
import "./App.css";

import Form from "./components/Form"; //example >> REMOVE once done reviewing...

class App extends Component {
	//setting this.state.images to equal the images json array:
	state = {
		images
	};

	reorderImages = id => {
		//create random Math function:
		function random () {

		}
		//change all ids for images (multiply them by math.floor(math.random+1));
		const images = this.state.images
		//
		this.setState({ images });
	}
}
export default App;



//////////////////////////
const App = () => 
  <div>
    <Nav />
    <Header/>
    <GameBoard/>

    <Form/>

    <Footer/>
  </div>;

export default App;