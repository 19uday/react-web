import React, { Component } from "react";
import {
NavLink
} from "react-router-dom";

import Rooms from './Rooms.js';
import Dropdown from './Dropdown.js';
export default class Groups extends Component{

state = {
	grps:[]
}

componentWillMount(){
	
	var i;
	var len = this.props.controls.length;
	console.log(this.props.controls);
	for(i=0;i<len;i++)
	{
		if(this.state.grps.includes(this.props.controls[i].group) === false)
		{
			this.state.grps.push(this.props.controls[i].group);
		}
	}console.log(this.state.grps);
}	


render() {
		
	return (
		<div>
		{this.state.grps.map((grp, index) =>
			<Dropdown setgrppp={this.props.setgrpp}  title={grp} setrommm={this.props.setromm}  controlls={this.props.controls} key={index} />
		)}
		
		</div>);
}
}

