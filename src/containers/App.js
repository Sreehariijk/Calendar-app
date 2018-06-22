import React, { Component } from 'react';
import Description from './Description';
import Calendar from './Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Description/>
        <Calendar/>
      </div>
     
    );
  }
}

export default App;
