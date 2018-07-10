import React, { Component } from "react";
import {
  Route
} from "react-router-dom";

import io from 'socket.io-client'
import Groups from './Groups.js';
import Rooms from "./Rooms.js";
import Controls from "./Controls.js";
import MenuButton from "./MenuButton.js";
import Menu from "./Menu.js";

export default class User extends Component {

state = {
  visible: false,
  userControls : [],
    vis : "false",
    visib : "false",
    visiblee:"false",
    acctok : "string",
 
 currentgroup : "null",
final: true, 
 currentroom : "null",
 socket:{}
}

constructor(props, context){
  super(props, context);

    this.state = {
      visible: false
    };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
this.setgroup = this.setgroup.bind(this);       
this.setroom = this.setroom.bind(this);
  }

     handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }
 
  toggleMenu() {
      this.setState({
        visible: !this.state.visible
                    });
                }

setgroup(grp)
{
  this.setState({currentgroup:grp});
  this.setState({vis:"true"});
  console.log(this.state.currentgroup);
  console.log(this.state.vis);  
}

setroom(room){
  this.setState({currentroom:room});
  this.setState({visib:"true"});
console.log(this.state.currentroom);
}










        
  
componentDidMount(){

  console.log(this.props.refToken);
  

  var funct = this;var i;var jsoooo;


 
      var htp = new XMLHttpRequest();
      var url = 'http://rhserver.local:5000/getAccessToken';
      var params = JSON.stringify({"refreshToken": this.props.refToken});
      htp.open('POST', url, true);
      htp.setRequestHeader('Content-type', 'application/json');//Send the proper header information along with the request
      htp.send(params);
      htp.onreadystatechange = function() {//Call a function when the state changes.
          if(htp.readyState === 4 && htp.status === 200) {
              console.log(htp.responseText);
              jsoooo = htp.responseText;
              
              var hhtp = new XMLHttpRequest();
              var urll = 'http://rhserver.local:5000/getControls';
              hhtp.open('GET', urll, true);
              //Send the proper header information along with the request
              console.log(jsoooo);
              hhtp.setRequestHeader('Authorization', jsoooo);
              
              hhtp.send();
              hhtp.onreadystatechange = function() {
                if(hhtp.readyState === 4 && hhtp.status === 200) {
                  console.log(hhtp.response);
                  var jsoni = JSON.parse(hhtp.response);
                  
                  

                  
                  funct.setState({userControls:jsoni.message});
funct.setState({visiblee : true});
                      var lent = jsoni.message.length;var j;
                  
                        funct.state.socket = io('http://rhserver.local:4500');

                        funct.state.socket.on("connect", () => {
                        funct.setState({connectionStatus:'active'});

                        console.log("Connected to server!!!");
                        console.log(lent);
                        var strn = "";
                        
                        
                        for(j=0;j<lent;j++)
                        {
                          strn = jsoni.message[j].group + "/" + jsoni.message[j].room + "/" + jsoni.message[j].name;
                        funct.state.socket.emit("subscribe",{ topic: strn });
                        console.log(jsoni.message[j].group  +  "/"  + jsoni.message[j].room  +  "/"  + jsoni.message[j].name);
                        }
		
			
                      
                    });
funct.state.socket.on("disconnect", () => {
                        funct.setState({connectionStatus:'passive'});

                        console.log("Disconnect!!!");
                    });

                    funct.state.socket.on('mqtt-message', function (data) {

                                var i;



        var res = data.topic.split("/");
        console.log(data.topic);
        console.log(data.message);
        console.log(res[0]);
        console.log(res[1]);
        for(i=0;i<funct.state.userControls.length;i++)
          {
            if(funct.state.userControls[i].group === res[0] && funct.state.userControls[i].room === res[1] && funct.state.userControls[i].name === res[2])
            {

                  funct.state.userControls[i].status = data.message;
console.log(funct.state.userControls[i].status);

funct.state.final = !funct.state.final;            } 
          }
                    });


                  


                  
            }



    
    }}

}}



  render() {

   
    return (



      <div>
          <section id="banner">
              <div className="inner">
                <header className="align-center">
                  <h2><font color="white">myAlfred</font></h2>
                </header>
{this.state.visiblee && (<div className=" w3-container w3-third">
                      <div className="menubutton"><MenuButton handleMouseDown={this.handleMouseDown}/></div>

                        <div className="menuu"><Menu handleMouseDown={this.handleMouseDown}
                                menuVisibility={this.state.visible} controls={this.state.userControls} setgrp={this.setgroup} setrom={this.setroom} key={this.state.final} /></div>
                  </div>)}
          
                     
                    
                    <div className="w3-container w3-third">
                      { 
                        this.state.visib === "true" && 
                        <Controls controll={this.state.userControls} current={this.state.currentroom} currentg={this.state.currentgroup} socket={this.state.socket} key={this.state.final}/>            
                      }</div>
		
                </div> 

                    
                
                
              
                        
          </section>
      </div>
      
    
    );
  }
}
 
  
    

