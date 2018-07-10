import React, { Component } from "react";
import Slider from 'react-rangeslider';


export default class Light extends Component{

values = 0;

handleChange = value => {
        var contrrol = this.props.controllll;
        var socket = this.props.socket;
        socket.emit('publish', { topic: contrrol.group + "/" + contrrol.room + "/" + contrrol.name, message: value});
};


render(){

        return(

                        <div className="w3-row control">
                            <div className="w3-container w3-twothird"><h2><font color="white">{this.props.controllll.name}</font></h2></div>

                          <div className="switch w3-container w3-third">
                <div className='slider'>
        <Slider
          min={0}
          max={18}
          value={this.values}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{this.values}</div>
      </div>
                         </div> 
                        </div>


                );
}
}

