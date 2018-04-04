//Global Imports
import React from "react";

//Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";


const App = props => (
  <div>
    <Nav/>
    <Header/>
    <GameBoard/>
    <Footer/>
  </div>   
);

export default App;
// const Container = props => <main className="container">{props.children}</main>;
