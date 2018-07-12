import React from "react";
import { default as NavItem} from "./NavItem";
import Nav from "./Nav";

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const NavInstance = () => {
  return (
    <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/team">
        Display by Team
      </NavItem>
      <NavItem eventKey={2} href="/popular">
        Display by Player
      </NavItem>
      <NavItem eventKey={3} href="/player">
        Display Most Popular Player
      </NavItem>
    </Nav>
  )
}

export default NavInstance;