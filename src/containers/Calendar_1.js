import React, { Component } from 'react';
import Month from '../components/Month';
import '../css/calendar_1.css';
import Logo from '../components/Logo';


class Calendar_1 extends Component {
 
  render() {
          return (
          <div className="calendar_1" style={this.props.style}>
          <Month  Title={this.props.Title}  monthNumber={this.props.monthNo} renderNext={this.props.nextOne}  renderPrevious={this.props.previousOne}/>  
          <Logo monthNumber={this.props.monthNo}/>
          </div>
          );           
        }

      }

export default Calendar_1;
