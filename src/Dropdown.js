import React, { Component } from "react";

import Rooms from './Rooms.js';
export default class User extends Component {
constructor(props){
  super(props)
  this.state = {
    listOpen: false,
    headerTitle: this.props.title
  }
}

handleClickOutside(){
  this.setState({
    listOpen: false
  })
}
toggleList(){
  this.setState(prevState => ({
    listOpen: !prevState.listOpen
  }));
        this.props.setgrppp(this.state.headerTitle);
console.log(this.state.headerTitle);
}

render(){
  const{list} = this.props
  const{listOpen, headerTitle} = this.state
  return(
    <div className="dd-wrapper">
    <div className="dd-header" onClick={() => this.toggleList()}>
        <button className="dd-header-title">{headerTitle}
        {this.state.listOpen
          ? <span className="fa fa-angle-up"></span>
          : <span className="fa fa-angle-down"></span>
        }</button>
    </div>
     {this.state.listOpen && <ul className="dd-list">
      <Rooms controls={this.props.controlls} visibleee={this.props.visiblee} current={this.props.title} setrommmm={this.props.setrommm} key={this.state.final}/>
      </ul>}
    </div>
  )
}
}
