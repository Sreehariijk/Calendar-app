import React, { Component } from 'react';
import App_1 from './App_1';
import '../css/App.css';
import {BrowserRouter as Router ,Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  
  render() {
    
    return (
     
      <div className="page1">
        <Router>
            <Switch>
                <Route exact path='/' render={(props) => ( <App_1 {...props} pass_to_page_content='august'/>)}/>
                <Route exact path='/september' render={(props) => ( <App_1 {...props} pass_to_page_content='september'/>)}/>
            </Switch>
        </Router>
      </div>
     
    );
  }
}

export default App;
