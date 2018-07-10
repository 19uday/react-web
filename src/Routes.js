import React, { Component } from "react";

import Login from './Login';
import User from './User';
import { Connector } from 'mqtt-react';


class Routes extends Component {
	constructor(props) {
		super(props);
		this.state={
			isloggedin: false,
			refToken : "notset"
		};
	}

	changeState() {
		this.setState({
			isloggedin: (!this.state.isloggedin)
		})
	}

	setrToken(rToken) {
		this.setState({
			refToken: rToken
		})
	}
		

	
	render() {
		if(this.state.isloggedin === false)
			return(
				<Login isloggedin={this.changeState.bind(this)} setr={this.setrToken.bind(this)}
				/>
			);
		
		

		if(this.state.isloggedin === true)
			return(
				<Connector mqttProps="ws://rhserver.local:1883/">
					<User refToken={this.state.refToken}
					/>
				</Connector>
			);
		}
	}		

export default Routes;
			
