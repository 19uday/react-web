import React, { Component } from "react";
 
class Room1 extends Component {
  render() {
    return (
      <div className="w3-row">
          <div className="w3-col s6"><h2><font color="white">Room1</font></h2></div>

          <div className="w3-col s6">
              
                  <h2><font color="white">Light</font></h2>
                  			
                  <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                  </label>
             
                  
              
                  <h2><font color="white">Fan</font></h2>
                  	
                  <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                  </label>
              

          </div>

      </div>
    );
  }
}
 
export default Room1;
