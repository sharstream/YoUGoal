import React from "react";
import ReactDOM, { render } from "react-dom";
import { Route, Link } from "react-router-dom";
import { pushRotate as Menu } from "react-burger-menu";
import "./Menu.css";
// import { CustomIcon } from "./CustomIcon";

export default class ParentMenu extends React.Component {

  state = {
    menuOpen: false
  };

  componentDidMount = () => {
    this.setState({ menuOpen: true });
  };

  // this keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  // this can be used to close the menu, e.g. when the user clicks a menu items
  closeMenu = () => {
    this.setState({ menuOpen: false})
  };

  // because we can only set one window.onkeydown handle, the last menu you include will override any handlers set by previous ones.
  // for that reason, it's recommend that you pass the same function to all menus to avoid unexpected behavior.
  closeAllMenusOnEsc = e => {
    e = e || window.event;

    if (e.key === "Escape" || e.keyCode === 27) {
      this.setState({areMenusOpen: false});
    }
  };

  // this can be used to toggle the menu, e.g. when using a custom icon
  // tip: you probably want to hide either/both default icons if using a custom icon
  // see https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div id="outer-container">
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          className={"page-wrap"}
          outerContainerId={"outer-container"}
          right 
        >
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/">Home</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/dropdownteam">Filter by Team</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/dropdownplayer">Filter by Player</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item--small" to="">World Cups</Link>
        </Menu>
      </div>
    )
  }
}