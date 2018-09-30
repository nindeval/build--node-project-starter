import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

import SideNavigation from './Sidenav.js'

class NavDash extends Component {
  render(){
    return (
      <div>
        <Navbar brand='HxH' right>
          <NavItem className="sidenav"><SideNavigation /></NavItem>
          {/*
            ARREGLAR PROBLEMA CON SIDEBAR
            <NavItem onClick={() => console.log('test click')}>Avisos</NavItem> */}
          <NavItem href='#'><Icon>notifications_active</Icon></NavItem>
          <NavItem href='/'><Icon>exit_to_app</Icon></NavItem>
        </Navbar>
      </div>
    )
  }
}
export default NavDash;
