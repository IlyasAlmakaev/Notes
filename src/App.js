import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './containers/Registration.js'
import Authorization from './containers/Authorization.js'
import Notes from './Notes.js'
import './App.css';

class App extends Component {

  render() {
    return (
    <Switch>  
	    <Route exact path='/' component={Authorization}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/registration" component={Registration}/>
    </Switch>  
    );
  }
}

export default App;
