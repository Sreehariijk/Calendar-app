import React, { Component } from 'react';
import Description_1 from './Description_1';
import Calendar_1 from './Calendar_1';
import {BrowserRouter as Router ,Route, Switch, withRouter } from 'react-router-dom';
import '../css/App.css';
 
 const subItemsAugust =  [ ["Inspect", "Progress"],["Goal", "Trending","Backlog"],["Everyday"],["Discuss On"] ];
 const subTitlesAugust = ["Objective","Who","When","What"];
  
const subItemsSeptember =  [ ["Inspect", "Progress"],["Goal", "Trending","Backlog"],["Everyday"],["Discuss On"] ];
 const subTitlesSeptember = ["Why","Which","Where"];

 const descriptionStyles = {
    backgroundColor :"rgb(58, 58, 60)",
    color:"white"
  };
  const calendarStyles = {
    backgroundColor :"rgb(245, 245, 245)",
    color:"black"
  };
class App_1 extends Component {

 
  render() {
     if(this.props. pass_to_page_content=="august")
     {
    return (
          
      <div className="App">
        <Description_1  caption="DAILY STANDUP" Items={subItemsAugust} Titles={subTitlesAugust} style={descriptionStyles}/>
        <Calendar_1 Title = "AUGUST 2018" style={calendarStyles}/>
      </div>
     
    );
     }
     else if(this.props. pass_to_page_content=="september")
     {
        return (
     
      <div className="App">
        <Description_1 caption= "STANDUP DAILY" Items={subItemsSeptember} Titles={subTitlesSeptember} style={descriptionStyles}/>
        <Calendar_1 Title = "SEPTEMBER 2018" style={calendarStyles}/>
      </div>
     
    );
     }
  }
}

export default App_1;
