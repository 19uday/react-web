import React, { Component } from "react";
 
class Room1 extends Component {

  render() {
    return (
      <div className="room">
<h2 className="w3-row"><font color="white">Room3</font></h2>

<div className="w3-row"><div className="w3-col s6 one">
<p>Light</p>
			
	<label className="switch">
  <input type="checkbox"></input>
  <span className="slider round"></span>
</label></div>
<div className="w3-col s6 two">
<p>Fan</p>
	
	<label className="switch">
  <input type="checkbox"></input>
  <span className="slider round"></span>
</label>
	</div>

</div>

      </div>
    );
  }
}
 
export default Room1;

