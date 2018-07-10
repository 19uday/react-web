


import React, { Component } from "react";
import "./Menu.css";
import {
NavLink
} from "react-router-dom";

import Controls from './Controls';


export default class Rooms extends Component{

state = {
	

	arry : []
	
}

	

			
componentWillMount(){ 
		var len = this.props.controls.length;var i;
		console.log(len);

		for(i=0;i<len;i++)
			{
				if(this.props.current === this.props.controls[i].group)
				{if(this.state.arry.includes(this.props.controls[i].room) === false)
{	console.log(this.props.controls[i].room);				
	this.state.arry.push(this.props.controls[i].room);
}				}	
			}console.log(this.state.arry);
		}

__onclick(room){
	this.props.setrommmm(room);
}


render(){
return(
	 <div>
    {this.state.arry.map((room, index) => (
        <button onClick={(e) => this.__onclick({room})} key={index}><font color="black">{room}</font></button>
    ))}
    </div>);}

}


