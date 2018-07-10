import React, { Component } from "react";

class signup extends Component {
  render() {
    return (
      <div>
<section id="banner">
  <div className="inner">
    <header className="align-center">
      <h2><font color="white">SignUp</font></h2>
      <p>SignUp to start feeling your home on your fingertips. </p>
    </header>
    <form id="form1"  action="#" method="post">
      <div className="field">
        <label><font color="white">Username</font></label>
        <input id="username" name="username" type="username" placeholder="UserName"/>
      </div>
      <div className="field">
        <label><font color="white">Email</font></label>
        <input id="email" name="email" type="email" placeholder="Email"/>
      </div>
      <div className="field">
        <label><font color="white">Password</font></label>
        <input id="password" name="password" type="password" placeholder="Password"/>
      </div>
      <button type="submit" value="Submit" form="form1" className="sub"> SignUp</button>
    </form>
  </div>
</section>


       
      </div>
    );
  }
}
 
export default signup;
