import React, { Component } from "react";



export default class Cam extends Component{

state = {status: this.props.controllll.status}

changes(){
	var socket = this.props.socket;
	this.setState({isChecked: !this.state.isChecked});
	var contrrol = this.props.controllll;
	socket.emit('publish', { topic: contrrol.group + "/" + contrrol.room + "/" + contrrol.name, message: this.state.status});
}
	

render(){
	
	return(
		
			<tr>
			   <td><h2><font color="white">{this.props.controllll.name}</font></h2></td>
                  	
		          <td><label className="switch">
		            <input type="checkbox" checked={this.state.status} onChange={this.changes.bind(this)}></input>
		            <span className="slider round"></span>
		          </label></td>	
			</tr>
		);
}
}
