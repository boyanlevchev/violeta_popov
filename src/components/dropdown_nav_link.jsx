import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from './nav_link'

class DropdownNavLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }


  render(){
    return (

        <Nav>
          <NavDropdown
            title={this.props.title}
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            show={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
            href="#media-page">

          {/*<Dropdown.Toggle className={"nav-link"} id="dropdown-basic">
                    {this.props.title}
                  </Dropdown.Toggle>*/}


            {this.props.links.map( (link, index) => {
              return <NavDropdown.Item href={this.props.href[index]}><NavLink title={link}/></NavDropdown.Item>
            })}

          </NavDropdown>
        </Nav>

    );
  }
}

export default DropdownNavLink;
