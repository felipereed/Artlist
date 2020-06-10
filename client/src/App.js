import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'></Route>
          <Route path='/sign-up'></Route>
          <Route path='/log-in'></Route>
          <Route path='/home'></Route>
          <Route path='/:id/details'></Route>
          <Route path='/:id/artist'></Route>
          <Route path='/create'></Route>
          <Route path='/:id/update'></Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
