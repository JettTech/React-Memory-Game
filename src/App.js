import React from "react";
import images from "./images.json";

import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Nav from "./components/MsgBoard";
import "./App.css";

import Form from "./components/Form"; // >> EXAMPLE >> REMOVE once done reviewing... << !! <<


const App = () => 
  <div>
    <Nav />
    <Header/>
    <GameBoard/>
    {/*//*/}
    <Form/> {/*// >> EXAMPLE >> REMOVE once done reviewing... << !! << */}
    {/*//*/}
    <Footer/>
  </div>;

export default App;