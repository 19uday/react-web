import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {

  render() {

    return (
<p
              onMouseDown={this.props.handleMouseDown}><span className="fa fa-bars"></span></p>

     
    );
  }
}
 
export default MenuButton;
