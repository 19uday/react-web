import React, { Component } from "react";

import Light from './Light.js';
import Fan from './Fan.js';
import Cam from './Cam.js';
import Lock from './Lock.js';
import Socket from './Socket.js';


export default class Switch extends Component{

render(){
	
		if(this.props.controlll.type === "light")
		
			return(               

			<Light controllll={this.props.controlll} socket={this.props.socket}/>
);
		

		if(this.props.controlll.type === "fan")
		
			return(               

			<Fan controllll={this.props.controlll} socket={this.props.socket}/>
);

		if(this.props.controlll.type === "lock")
		
			return(               

			<Lock controllll={this.props.controlll} socket={this.props.socket}/>
);

		if(this.props.controlll.type === "cam")
		
			return(               

			<Cam controllll={this.props.controlll} socket={this.props.socket}/>
);

		if(this.props.controlll.type === "socket")
		
			return(               

			<Socket controllll={this.props.controlll} socket={this.props.socket}/>
);

		

}

}
