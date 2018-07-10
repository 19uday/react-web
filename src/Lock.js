import React, { Component } from "react";



export default class Light extends Component{
state = {states: ""}
finalstate = this.props.controllll.status;

unlock(){
	this.finalstate = !this.finalstate;
}

changes(){
        var contrrol = this.props.controllll;
var funct = this;        

console.log(this.finalstate);
        var socket = this.props.socket;
        this.finalstate = !this.finalstate;
        socket.emit('publish', { topic: contrrol.group + "/" + contrrol.room + "/" + contrrol.name, message: this.finalstate});
 if(this.finalstate){ setTimeout(function() { //Start the timer
      this.finalstate = !this.finalstate;
	socket.emit('publish', { topic: contrrol.group + "/" + contrrol.room + "/" + contrrol.name, message: this.finalstate});
 //After 1 second, set render to true
  }.bind(this), 5000)}

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

