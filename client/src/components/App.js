import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";
import { Carousel } from "react-bootstrap"
import { Route } from "react-router-dom";
import { SignupPage as Signup, SigninPage as Signin } from "./SignPage";
import Teams from "../pages/Teams";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="http://www.tnhglobal.com/wp-content/uploads/2018/06/Russia.jpg" />
              <Carousel.Caption>
                <h3>FIFA World Cup 2018</h3>
                <p>Final Games</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
              <Carousel.Caption>
                <h3>Spanish Leagueships</h3>
                <p>Winner</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row">
          <Teams />
        </div>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </div>
    );
  }
}