import React, { Component } from 'react';
import './App.scss';
import { LeadingPage } from './components/leading.page';
import { AppLayout } from './components/app.layout'
import { ProtectedRoute } from './router/protected.router'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LeadingPage}/>
          <ProtectedRoute exact path='/app' component={AppLayout}/>
          <Route path='*' component={() => "404 not found"} />
        </Switch>
      </div>
    );
  }
}

export default App;
