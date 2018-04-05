import React from "react";
import "./Header.css";
import {Collapsible, CollapsibleItem} from 'react-materialize';

const Header = props => 
	<Collapsible popout defaultActiveKey={1} className="header-container">
	  <CollapsibleItem header='Official Game Guide' className="header">
	  	<br/>
	  	<h1>The React Memory Game</h1>
		<h2>Play to discover how long can you remember your recent past.</h2>
		<h3><span style={{textDecoration:"underline"}}>Game Rules:</span> Click on an image to earn points, but be careful to not click on the same image twice!  If you do, you'll reset your game.</h3>
		<h3><span style={{textDecoration:"underline"}}>Goal:</span> To win by clicking on each picture only once.</h3>
	  </CollapsibleItem>
	</Collapsible>

export default Header;



	