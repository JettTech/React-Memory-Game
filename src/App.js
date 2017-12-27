import React from "react";
import "./App.css";

import images from "./images.json";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Nav from "./components/Nav";



const App = () => 
  <div>
    <Nav />
    <GameBoard/>
    <Footer/>
  </div>;      

export default App;