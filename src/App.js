//Global Imports
import React from "react";
import "./App.css";

//Doc Components
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
// import Header from "./components/Header";
import Nav from "./components/Nav";



const App = () => 
{
  <div>
    <Nav />
    <GameBoard/>
    <Footer/>
  </div>; 
}     

export default App;