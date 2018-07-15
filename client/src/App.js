import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

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

// import { ParentMenu as Menu } from "./Menu";
// import { pushRotate as Menu } from "react-burger-menu";

function onAuthRequired ({history}) {
  history.push("/login");
}

const App = () => (
  <Router>
    <div className="container">
      <div className="row">
        <NavigationBar />
      </div>
      <div className="row">
        <Carousel />
      </div>
      <div className="row">
        <Security issuer="https://dev-590113.oktapreview.com/oauth2/default"
                  client_id="0oafq5xga3MOGlArd0h7"
                  redirect_uri={window.location.origin + "/implicit/callback"}
                  onAuthRequired={onAuthRequired}>
          <Switch>
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact path="/signin"
              render={() => <Signin baseUrl="https://dev-590113.oktapreview.com" />}
            />
            <Route exact path="/implicit/callback" component={ImplicitCallback} />
            <SecureRoute exact path="/dropdownplayer" component={DropDownPlayer} />
            <SecureRoute exact path="/dropdownteam" component={DropDownTeam} />
            <Route exact path="/" component={Teams} />
            <Route exact path="/teamsGet/:teamID" component={Players} />
            <Route exact path="/player/:_id" component={Player} />
            <Route component={NoMatch} />
          </Switch>
        </Security>
      </div>
    </div>
  </Router>
);

export default App;
