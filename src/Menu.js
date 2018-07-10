import React, { Component } from "react";
import "./Menu.css";
import {
NavLink
} from "react-router-dom";

import Rooms from './Rooms';
import Groups from './Groups'; 

export default class Menu extends Component {

render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
	
    }
 
    return (

      <div id="flyoutMenu"
           className={visibility}>
                        <Groups controls={this.props.controls} visible={this.props.handleMouseDown} setromm={this.props.setrom} setgrpp={this.props.setgrp} key={this.props.key}/>  
                        
    </div>		);
    
  }
}
