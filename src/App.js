import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <li>
        <Link to = "/">Home</Link>
        </li>
        <li>
        <Link to = "/about">About</Link>
        </li>
      </ul>
        <Switch>
            <Route exact path = "/" component = {()=><div>This is the home div.</div>}/>
            <Route path = "/about" component = {()=><div>This is the about div.</div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
