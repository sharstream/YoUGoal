import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Player from "./pages/Player";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import NavigationBar from "./components/NavigationBar";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/teamsGet/:teamID" component={Detail} />
        <Route exact path="/player/:_id" component={Player} />
        <Route component={NoMatch} />
      </Switch> 
    </div>
  </Router>
);

export default App;
