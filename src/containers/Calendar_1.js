import React, { Component } from 'react';
import Month from '../components/Month';
import '../css/calendar_1.css';
import Logo from '../components/Logo';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Calendar_1 extends Component {
  
      renderNext = () => {
         
        this.props.history.push("/september")
      }
       
      renderPrevious = () => {
       
        this.props.history.push("/")
      }
      
    

  render() {
  const redirectionMonth = () => {
     
       if(this.props.Title === "AUGUST 2018"){
          
          return (
          <div>
          <Month  Title={this.props.Title} renderNext={this.renderNext} />  
          <Logo image={this.props.Title}/>
          </div>)
           
        }
        
         else if(this.props.Title === "SEPTEMBER 2018"){
          
          return  (
          <div>
            <Month  Title={this.props.Title} renderPrevious={this.renderPrevious} />  
            <Logo image={this.props.Title}/>
          </div>)
         
          }
      }
      
    return (
      <div className="calendar_1"  style={this.props.style}>
          
         {redirectionMonth()}
              
      </div>
     
    );
  }
}

export default Calendar_1;
