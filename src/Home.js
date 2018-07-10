import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Routes from './Routes';
import slide from './slide';
import hhome from './hhome';


class Home extends Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
		
          <header id="header">
            <div className="inner">
              <p className="logo"><strong>ALFRED</strong><font size="-2"> THE AI BUTLER</font></p>
              <nav id="nav"><NavLink to="/User">User</NavLink><NavLink to="/signup">SignUp</NavLink><NavLink to="/Login">Login</NavLink></nav><NavLink to="/" onClick={slide.handleClick}><span className="fa fa-bars"></span></NavLink>
            </div>
          </header>
			   
			
    			<div className="outward">
              <Route exact path="/" component={hhome}/>
              <Routes/>
    			</div>			

		    </div>
      
 </BrowserRouter>
    );
  }
}



 
export default Home;
