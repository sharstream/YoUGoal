import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";
import { Carousel, PageHeader } from "react-bootstrap"
import { Route, Switch } from "react-router-dom";
import { SignupPage as Signup, SigninPage as Signin } from "./SignPage";
import Teams from "../pages/Teams";
import Players from "../pages/Players";
import Player from "../pages/Player";
import { DropDownPlayer, DropDownTeam } from "./MenuDropDown";
import NoMatch from "../pages/NoMatch";
// import { ParentMenu as Menu } from "./Menu";
import "./App.css";
// import { pushRotate as Menu } from "react-burger-menu";

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
        <Switch>
          <Route exact={true} path="/signup" component={Signup} />
          <Route exact={true} path="/signin" component={Signin} />
          <Route exact={true} path="/dropdownplayer" component={DropDownPlayer} />
          <Route exact={true} path="/dropdownteam" component={DropDownTeam} />
          <Route exact path="/" component={Teams} />
          <Route exact path="/teamsGet/:teamID" component={Players} />
          <Route exact path="/player/:_id" component={Player} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}