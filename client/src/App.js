import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Player from "./pages/Player";
import NoMatch from "./pages/NoMatch";

import NavigationBar from "./components/NavigationBar";
import Carousel from "./components/Carousel";
// import { DropDownPlayer, DropDownTeam } from "./components/MenuDropDown";
import { SignupPage as Signup, SigninPage as Signin } from "./components/SignPage";
import GetSupport from "./components/Manager/GetSupport";
import { StickyFooter } from "./components/StickyFooter";

// import { ParentMenu as Menu } from "./Menu";
// import { pushRotate as Menu } from "react-burger-menu";

function onAuthRequired ({history}) {
  history.push("/login");
}

const App = () => (
  <Router>
    <div className="container">
      <div>
        <NavigationBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="row">
        <Security issuer="https://dev-590113.oktapreview.com/oauth2/default"
                  client_id="0oafq5xga3MOGlArd0h7"
                  redirect_uri={window.location.origin + "/implicit/callback"}
                  onAuthRequired={onAuthRequired}>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login"
              render={() => <Signin baseUrl="https://dev-590113.oktapreview.com" />}
            />
            <Route exact path="/getsupport" component={GetSupport} />
            <Route exact path="/implicit/callback" component={ImplicitCallback} />
            <SecureRoute exact path="/" component={Teams} />
            <SecureRoute exact path="/teamsGet/:teamID" component={Players} />
            <SecureRoute exact path="/player/:_id" component={Player} />
            <Route component={NoMatch} />
          </Switch>
        </Security>
      </div>
      <StickyFooter />
    </div>
  </Router>
);

export default App;
