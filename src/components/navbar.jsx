import React, { Component } from 'react';

import NavLink from './nav_link'

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
      <div className="nav-logo">
      </div>
        <h1 className="nav-logo-text">Violeta Popov MD</h1>
        <div className="nav-link-group">
          <NavLink title="For patients"/>
          <NavLink title="Research papers"/>
          <NavLink title="Big poopoo"/>
        </div>
      </div>
    );
  }
}

export default Navbar;
