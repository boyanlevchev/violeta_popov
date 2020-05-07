import React from 'react';

import NavLink from './nav_link'
import DropdownNavLink from './dropdown_nav_link'
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar() {
  return(
    <div className="navbar">
      <div className="nav-logo"></div>
      <NavLink title="Violeta Popov MD" headerClass={"nav-logo-text"}/>
      <div className="nav-link-group">
        <NavLink title="For patients"/>
        <DropdownNavLink title="Events" links={["Presentations", "Conferences", "Lectures"]}/>
        <DropdownNavLink title="Research and Publications" links={["Research", "Publications"]}/>
        <NavLink title="Media"/>
        <NavLink title="About"/>
        <NavLink title="Contact"/>
      </div>

      <div className="nav-link-collapsed">
        <Dropdown >
          <Dropdown.Toggle className="nav-link" id="dropdown-basic">
            More
          </Dropdown.Toggle>

          <Dropdown.Menu className="text-align-right">
            <NavLink title="For patients"/>
            <NavLink title="Events" links={["Presentations", "Conferences", "Lectures"]}/>
            <NavLink title="Research and Publications" links={["Research", "Publications"]}/>
            <NavLink title="Media"/>
            <NavLink title="About"/>
            <NavLink title="Contact"/>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;
