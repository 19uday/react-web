import React, { Component } from "react";



export default class Socket extends Component{
state = {status: this.props.controllll.status}

changes(){
	var socket = this.props.socket;
	this.setState({isChecked: !this.state.isChecked});
	var contrrol = this.props.controllll;
	socket.emit('publish', { topic: contrrol.group + "/" + contrrol.room + "/" + contrrol.name, message: this.state.status});
}
	

render(){
	
	return(
		
                        <div className="w3-row control">   <div className="w3-container w3-twothird"><h2><font color="white">{this.props.controllll.name}</font></h2></div>

                          <label className="switch w3-container w3-third">
                            <input type="checkbox" defaultChecked={this.state.status} onChange={this.changes.bind(this)}></input>
                            <span className="slider round"></span>
                          </label></div>

		);
}
}
