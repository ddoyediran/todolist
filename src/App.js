import React, { Component } from 'react';
import Signin from './Signin';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'sinin'
    }
  }

    render() {
      return (
        <div className="App">
          { this.state.route === 'signin' ?
            <Signin /> 
            :
           <Dashboard />
          }
        </div>
      );
    }
}

export default App;
