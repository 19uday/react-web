import React, { Component } from "react";



export default class Light extends Component{
state = {states: ""}
finalstate = this.props.controllll.status;

changes(){
	var contrrol = this.props.controllll;
	console.log(this.finalstate);
	var socket = this.props.socket;
	this.finalstate = !this.finalstate;
	socket.emit('publish', { topic: contrrol.group + "/" + contrrol.room + "/" + contrrol.name, message: this.finalstate});
}



	

render(){
	
	return(
		
			<tr>
			   <td><h2><font color="white">{this.props.controllll.name}</font></h2></td>
                  	
		          <td><label className="switch">
		            <input type="checkbox" defaultChecked={this.finalstate} onChange={this.changes.bind(this)}></input>
		            <span className="slider round"></span>
		          </label></td>	
			</tr>
		);
}
}

