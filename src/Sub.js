import { Component } from "react";
import { connect } from 'mqtt';
import User from './User';
import { subscribe } from 'mqtt-react';


function Subscri(props){

				const MessageList = (props) => (
				  
				    {props.data.map( message => this.props.update(topic.toString(),message.toString()) )}
				 
				);



				 
				
				export default subscribe({
				  topic: '@{this.props.control.group}/{this.props.control.room}/{this.props.control.name}'
				})(MessageList)

}
