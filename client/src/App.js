import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect from="/" exact to="/welcome" />
          <Route path="/welcome" render={() => <Welcome />}></Route>
          <Route
            path="/sign-up"
            render={() => (
              <Layout>
                <SignUp />
              </Layout>
            )}
          ></Route>
          <Route path="/log-in"></Route>
          <Route path="/home"></Route>
          <Route path="/:id/details"></Route>
          <Route path="/:id/artist"></Route>
          <Route path="/create"></Route>
          <Route path="/:id/update"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
