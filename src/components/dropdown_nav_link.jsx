import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from './nav_link'

function DropdownNavLink(props) {
  return (
    <Dropdown >
      <Dropdown.Toggle className="nav-link" id="dropdown-basic">
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.links.map( link => {
          return <NavLink title={link}/>
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownNavLink;
