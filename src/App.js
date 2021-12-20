import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/HomePage';
import Login from './components/Connect';
import ExplorePage from './components/ExplorePage';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/connect">
          <Login />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
