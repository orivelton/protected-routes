import React, { Component } from 'react';
import './App.scss';
import { LeadingPage } from './components/leading.page';
import { AppLayout } from './components/app.layout'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Protected React Router</h1>
        <Route path='/' exact component={LeadingPage}/>
        <Route path='/app' exact component={AppLayout}/>
      </div>
    );
  }
}

export default App;
