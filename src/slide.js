import React, { Component } from "react";
import {

  NavLink
} from "react-router-dom";



class slide extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <NavLink to="/" onClick={slide.handleClick}><span className="icon fa-lock"></span></NavLink>
  }
}
export default slide;
