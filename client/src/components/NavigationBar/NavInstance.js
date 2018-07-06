import React from "react";

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