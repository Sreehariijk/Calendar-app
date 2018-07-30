import React, { Component } from 'react';
import Description_1 from './Description_1';
import Calendar_1 from './Calendar_1';
import {BrowserRouter as Router ,Route, Switch, withRouter } from 'react-router-dom';
import '../css/App.css';

 let description=""
 let calendar=""
 let descriptionStyles = {
    backgroundColor :"rgb(58, 58, 60)", //brown
    color:"white"
  };
  let calendarStyles = {
    backgroundColor :"rgb(245, 245, 245)",  //white
    color:"black"
  };
 
class App_1 extends Component {
  

 
  render() {
      if(this.props.monthNav%2==0){
        description=descriptionStyles
        calendar=calendarStyles
      
     }
   else{
       description=calendarStyles
       calendar=descriptionStyles
     
   }
    return (
          
      <div className="App">
        <Description_1  caption={this.props.captionDescription} Titles={this.props.subTitle} Items={this.props.subItems}  style={description}/>
        <Calendar_1 monthNo={this.props.monthNav} Title = {this.props.calendarTitle}  nextOne={this.props.next} previousOne={this.props.previous} style={calendar}/>
      </div>
     
    );
    
     }
  }


export default App_1;
