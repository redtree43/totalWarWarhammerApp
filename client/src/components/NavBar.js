import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Combat from "./Combat";
import Magic from "./Magic";
import Units from "./Units";
import "../index.css";

const NavBar = () => (
  <Router>
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/units">Units</Link>
        </li>
        <li>
          <Link to="/combat">Combat</Link>
        </li>
        <li>
          <Link to="/magic">Magic</Link>
        </li>
        <li>
          <Link to="/armies">Army Selection</Link>
        </li>
      </ul>

      <hr />

      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/units" component={Units} />
      <Route exact path="/combat" component={Combat} />
      <Route exact path="/magic" component={Magic} />
      {/* <Route exact path="/armies" component={Armies} /> */}
    </div>
  </Router>
);

export default NavBar;
