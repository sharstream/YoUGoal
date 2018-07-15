import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Player from "./pages/Player";
import NoMatch from "./pages/NoMatch";
import Teams from "./pages/Teams";
import Players from "./pages/Players";

import NavigationBar from "./components/NavigationBar";
import Carousel from "./components/Carousel";
import { DropDownPlayer, DropDownTeam } from "./components/MenuDropDown";
import { SignupPage as Signup, SigninPage as Signin } from "./components/SignPage";

const App = () => (
  <Router>
    <div className="container">
      <div className="row">
        <NavigationBar />
      </div>
      <div className="row">
        <Carousel />
      </div>
      <Switch>
        <Route exact path="/" component={Teams} />
        <Route exact path="/teamsGet/:teamID" component={Players} />
        <Route exact path="/player/:_id" component={Player} />
        <Route component={NoMatch} />
      </Switch>

    </div>
  </Router>
);

export default App;
