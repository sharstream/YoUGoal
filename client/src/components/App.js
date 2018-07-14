import React, { Component } from 'react';
import { Carousel, PageHeader } from "react-bootstrap"
import { Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import NavigationBar from "./NavigationBar";
import { DropDownPlayer, DropDownTeam } from "./MenuDropDown";
import { SignupPage as Signup, SigninPage as Signin } from "./SignPage";
import Teams from "../pages/Teams";
import Players from "../pages/Players";
import Player from "../pages/Player";

// import { ParentMenu as Menu } from "./Menu";
import "./App.css";
// import { pushRotate as Menu } from "react-burger-menu";

function onAuthRequired ({history}) {
  history.push("/login");
}

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <NavigationBar />
        </div>
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img width={800} height={600} className="img-fluid" alt="Responsive image" src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
              <Carousel.Caption>
                <h3>FIFA World Cup 2018</h3>
                <p>Final Games</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={800} height={600} className="img-fluid" alt="Responsive image" src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
              <Carousel.Caption>
                <h3>World Leadership</h3>
                <p>Winner</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row">
          <Security issuer="https://dev-590113.oktapreview.com/oauth2/default"
                    client_id="0oafq5xga3MOGlArd0h7"
                    redirect_uri={window.location.origin + "/implicit/callback"}
                    onAuthRequired={onAuthRequired} >
            <Route exact path="/" component={Teams} />
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact path="/signin" render={() =>
              <Signin baseUrl="https://dev-590113.oktapreview.com" />}
            />
            <Route exact path="/implicit/callback" component={ImplicitCallback} />
            <SecureRoute exact={true} path="/dropdownplayer" component={DropDownPlayer} />
            <SecureRoute exact={true} path="/dropdownteam" component={DropDownTeam} />
            <SecureRoute exact path="/teamsGet/:teamID" component={Players} />
            <SecureRoute exact path="/player/:_id" component={Player} />
          </Security>
        </div>
      </div>
    );
  }
}