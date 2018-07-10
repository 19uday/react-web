import React, { Component } from "react";

class home extends Component {
  render() {
    return (
      <div>
<section id="banner">
  <div className="inner">
    <header>
      <h1>Welcome to ALFRED</h1>
    </header>
    <div className="flex">
      <div><span className="icon fa-lock"></span>
        <h3>Secure</h3>
        <p>Security and Privacy is our first concern</p>
      </div>
      <div><span className="icon fa-angellist"></span>
        <h3>Comfort</h3>
        <p>Devices are easy to handle</p>
      </div>
      <div><span className="icon fa-dollar-sign"></span>
        <h3>Affordable</h3>
        <p>Cheapest price in market</p>
      </div>
    </div>
  </div>
</section>
       
      </div>
    );
  }
}
 
export default home;
