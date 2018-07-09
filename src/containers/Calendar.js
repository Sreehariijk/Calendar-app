import React, { Component } from 'react';
import August from '../components/August';
import Logo from '../components/Logo';

class Calendar extends Component {
  render() {
    console.log("test");
    return (
      <div className="calendar">
          <August title="AUGUST 2018"/>
          <Logo />
      
      <div className="calendar">
          <August title="AUGUST 2018"/>
          <Logo />
      </div>
</div>

    );
  }
}

export default Calendar;
