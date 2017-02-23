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

var name;

//TODO: Once all character data is inputted
// turn this into an array of links rather than doing a switch
switch (window.location.pathname){
  case '/':
    name = "/Wireframe";
    break;
  case '/character/fox':
    name = "/character/fox";
    break;
  case '/character/falco':
    name = "/character/falco";
    break;
  case '/character/shiek':
    name = "/character/shiek";
    break;
  case '/character/marth':
    name = "/character/marth";
    break;
  case '/character/captain-falcon':
    name = "/character/captain-falcon";
    break;
  case '/character/jigglypuff':
    name = "/character/jigglypuff";
    break;
  case '/character/ice-climbers':
    name = "/character/ice-climbers";
    break;
  case '/character/peach':
    name = "/character/peach";
    break;
  case '/character/pikachu':
    name = "/character/pikachu";
    break;
  case '/character/samus':
    name = "/character/samus";
    break;
  case '/character/doctor-mario':
    name = "/character/doctor-mario";
    break;
  case '/character/yoshi':
    name = "/character/yoshi";
    break;
  case '/character/luigi':
    name = "/character/luigi";
    break;
  case '/character/mario':
    name = "/character/mario";
    break;
  case '/character/link':
    name = "/character/link";
    break;
  case '/character/young-link':
    name = "/character/young-link";
    break;
  case '/character/donkey-kong':
    name = "/character/donkey-kong";
    break;
  case '/character/ganondorf':
    name = "/character/ganondorf";
    break;
  case '/character/roy':
    name = "/character/roy";
    break;
  case '/character/game-and-watch':
    name = "/character/game-and-watch";
    break;
  case '/character/mewtwo':
    name = "/character/mewtwo";
    break;
  case '/character/zelda':
    name = "/character/zelda";
    break;
  case '/character/ness':
    name = "/character/ness";
    break;
  case '/character/pichu':
    name = "/character/pichu";
    break;
  case '/character/bowser':
    name = "/bowser";
    break;
  case '/character/kirby':
    name = "/character/kirby";
    break;
  default:
    name = "/character/Sandbag"
    break;
}
var string1 = "images/icons";
var string2 = ".png";

    return (
      <Navbar className="header" full color="faded" light toggleable>
        <Container>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <NavbarBrand className="mr-auto" tag={Link} to="/"><img className="nav-icon" src={window.location.pathname.indexOf('character') > -1 ? '../' + string1 + name.replace('\/character', '') + string2 : string1 + name + string2} alt="icon" />Melee Frame Data</NavbarBrand>
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
