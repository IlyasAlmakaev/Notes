import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './containers/dump/Registration.js'
import Authorization from './containers/dump/Authorization.js'
import Notes from './containers/smart/Notes.js'
import EditNote from './containers/smart/EditNote.js'
import './App.css';

class App extends Component {

  render() {
    return (
    <Switch>  
	    <Route exact path='/' component={Authorization}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/editNote" component={EditNote}/>
    </Switch>  
    );
  }
}

export default App;
