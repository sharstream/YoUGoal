import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import ReactDOM, { render } from "react-dom";
import { Link } from "react-router-dom";

export default class CustomMenu extends React.Component {

  state = {
    isOpen: false
  };

  showSetting = event => {
    event.preventDefault();
  };

  isMenuOpen = state => {
    return this.state.isOpen;
  };

  render() {
    return (
      <div id="outer-container">
        <Menu onStateChange={ this.isMenuOpen } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right width={ '40%' } />
        <main id="page-wrap">
          <Link id="home" className="menu-item" to="/">Home</Link>
          <Link id="display_by_team" className="menu-item" to="/dropDownTeam">Filter by Team</Link>
          <Link id="display_by_player" className="menu-item" to="/dropDownPlayer">Filter by Player</Link>
          <Link onClick={ this.showSettings } className="menu-item--small" to="">World Cups</Link>
        </main>
      </div>
    )
  }
}