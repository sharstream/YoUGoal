import React from "react";
import NavItem from "./NavItem";
import Nav from "./Nav";

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const NavInstance = () => {
  return (
    <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/team">
        Display Soccer Team
      </NavItem>
      <NavItem eventKey={2} href="/popular">
        Display Most Popular Team
      </NavItem>
      <NavItem eventKey={3} href="/player">
        Display Most Popular Player
      </NavItem>
    </Nav>
  )
}

export default NavInstance;