import React, { Component } from "react";
import ReactDOM from "react-dom";
import user from './user';



class onlogin extends Component {
constructor(props, context) {
    super(props, context);
 
    this.responseGoogle = this.responseGoogle.bind(this);
  }



responseGoogle (response){
    
  console.log(response.profileObj.googleId);

  var htp = new XMLHttpRequest();
  htp.onreadystatechange= function(){
      console.log(htp);
  };

  htp.open("GET", "http://0.0.0.0:6050/login", true);
  htp.setRequestHeader("Access-Control-Allow-Origin", "*");
  htp.setRequestHeader("Content-type", "application/json");
  htp.setRequestHeader('Authorization','Basic ' + response.tokenObj.id_token);
  htp.responseType = 'json';
  htp.onload = function(e) {
  
  if (this.status === 200) {
     if(this.response.result === "success")
     {
		ReactDOM.render(<user/,document.getElementById("root"));
	 }
  							}
							};
  htp.send();


}
}

export default onlogin;

