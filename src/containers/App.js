import React, { Component } from 'react';
import App_1 from './App_1';
import '../css/App.css';
import {BrowserRouter as Router ,Route, Switch, withRouter } from 'react-router-dom';

const August={
  descriptionTitle:"DAILY STANDUP",
  subTitles :["Objective","Who","When","What"],
  subItems :  [ ["Inspect", "Progress"],["Goal", "Trending","Backlog"],["Everyday"],["Discuss On"] ],
  calendarTitle: "AUGUST 2018"
}

const September={
  descriptionTitle:"STANDUP DAILY",
  subTitles : ["Why","Which","Where"],
  subItems :  [ ["Inspect", "Progress"],["Goal", "Trending","Backlog"],["Everyday"],["Discuss On"] ],
  calendarTitle: "SEPTEMBER 2018"
}
class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      currentMonth:8
		};
  }
  handleNext(){
      this.setState({ currentMonth : this.state.currentMonth+1})
  }
   handlePrevious(){
      this.setState({currentMonth : this.state.currentMonth-1})
  }


  render() {
    if(this.state.currentMonth==8)
    return (    
      <div className="page1">
        <App_1 monthNav={this.state.currentMonth} captionDescription={August.descriptionTitle} subTitle={August.subTitles} subItems={August.subItems} calendarTitle={August.calendarTitle} next={this.handleNext.bind(this)} previous={this.handlePrevious.bind(this)} />
      </div>
     
    ); 
    if(this.state.currentMonth==9)
    return (    
      <div className="page1">
        <App_1 monthNav={this.state.currentMonth} captionDescription={September.descriptionTitle} subTitle={September.subTitles} subItems={September.subItems} calendarTitle={September.calendarTitle} next={this.handleNext.bind(this)} previous={this.handlePrevious.bind(this)} />
      </div>   
    ); 
  }

  }
export default App;
