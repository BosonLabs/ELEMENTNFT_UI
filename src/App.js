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
import Information from './components/Information';
import Profile from './components/Profile';
import FollowingPage from './components/FollowingPage';
import ActivityPage from './components/ActivityPage';
import SingleBid from './components/SingleBid';
import SingleBid2 from './components/SingleBid2';
import About from './components/About';
import Rari from './components/Rari';
import Start from './components/Create/Start';
import Type from './components/Create/Type';
import Single from './components/Create/Single';

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
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/following">
          <FollowingPage />
        </Route>
        <Route path="/activity">
          <ActivityPage />
        </Route>
        <Route path="/bid">
          <SingleBid />
        </Route>
        <Route path="/bid-2">
          <SingleBid2 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/rari">
          <Rari />
        </Route>
        <Route path="/create/start">
          <Start />
        </Route>
        <Route path="/create/type">
          <Type />
        </Route>
        <Route path="/create/single">
          <Single />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
