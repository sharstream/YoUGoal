import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";
import { Carousel } from "react-bootstrap"
import { Route } from "react-router-dom";
import { SignupPage as Signup, SigninPage as Signin } from "./SignPage";
import Teams from "../pages/Teams";
import Players from "../pages/Players";
import "./App.css";
import { DropDownPlayer, DropDownTeam } from "./MenuDropDown";
import { ParentMenu as Menu } from "./Menu";
// import { pushRotate as Menu } from "react-burger-menu";

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
	        <NavigationBar />
	        <Menu />
        </div>
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img width={800} height={600} className="img-fluid" alt="Responsive image" src="http://www.tnhglobal.com/wp-content/uploads/2018/06/Russia.jpg" />
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
          <Teams />
        </div>
        <div className="row">
          <Players />
        </div>
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/signin" component={Signin} />
        <Route exact={true} path="/dropdownplayer" component={DropDownPlayer} />
        <Route exact={true} path="/dropdownteam" component={DropDownTeam} />
      </div>
    );
  }
}