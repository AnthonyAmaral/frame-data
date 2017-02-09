import React from 'react';
import { Link } from 'react-router';
import { NavbarToggler, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }
  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }
  render() {
var name = "/Wireframe";
if (window.location.pathname === "/"){
  name = "/Wireframe"
} else {
  name = window.location.pathname;
};


var string1 = "images/icons";
var string2 = ".png";
    return (
      <Navbar className="header" full color="faded" light toggleable>
        <Container>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <NavbarBrand className="mr-auto" tag={Link} to="/"><img className="nav-icon" src={string1 + name + string2} alt="icon" />Melee Frame Data</NavbarBrand>
          <Collapse navbar isOpen={this.state.showNavbar}>
            <Nav navbar className="ml-sm-auto">

              <NavItem>
                <NavLink href="https://github.com/anthonyamaral/frame-data">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
