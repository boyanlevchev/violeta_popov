import React, { Component } from 'react'

class NavLink extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const href = "#";
    return (
      <a href={href} className="nav-link">{this.props.title}</a>
    );
  }
}

export default NavLink;
