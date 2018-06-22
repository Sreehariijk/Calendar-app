import React, { Component } from 'react';
import August from '../components/August';
import Logo from '../components/Logo';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
          <August title="August"/>
          <Logo />
      </div>
     
    );
  }
}

export default Calendar;
