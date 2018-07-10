import React, { Component } from "react";

import Switch from './Switch.js';


class Controls extends Component{

state = {
	
	arra : []
	
}

	

componentWillMount(){ 
		var len = this.props.controll.length;var i;

console.log(this.props.currentg);
console.log(this.props.current);
for(i=0;i<len;i++)
{if(this.props.currentg === this.props.controll[i].group)
	{if(this.props.current.room === this.props.controll[i].room)
		{
			this.state.arra.push(this.props.controll[i]);
		}	
	}
}console.log(this.state.arra);
}

render(){
return(
	<div className="controls">
		<div className="groupbutton fa fa-calendar"></div>
	 <div className="controlcontainer">
    {this.state.arra.map((control, index) => (
        <Switch controlll={control} key={index} socket={this.props.socket}/>
    ))}
	  
</div>    </div>);}}
export default Controls;



