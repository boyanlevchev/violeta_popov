import React from 'react';

import NavLink from './nav_link'
import DropdownNavLink from './dropdown_nav_link'
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar() {
  return(
    <div className="navbar">
      <div className="nav-logo"></div>
      {/*<NavLink title="VIOLETA POPOV"  headerClass={"nav-logo-text"}/>*/}
      <div class="nav-logo-text"><h1>VIOLETA POPOV</h1><h1>M.D.</h1></div>
      <div className="nav-link-group">
        <NavLink title="for patients" href="#for-patients-page"/>
        <DropdownNavLink title="research"
                         links={["Overview", "Research", "Publications"]}
                         href={["#research-page","#research-page", "#research-page"]}/>

        <NavLink title="media" href="#media-page"/>
        <NavLink title="about" href="#about-page"/>
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
