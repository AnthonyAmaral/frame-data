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
switch (window.location.pathname){
  case '/':
    name = "/Wireframe";
    break;
  case '/fox':
    name = "/fox";
    break;
  case '/falco':
    name = "/falco";
    break;
  case '/shiek':
    name = "/shiek";
    break;
  case '/marth':
    name = "/marth";
    break;
  case '/captain-falcon':
    name = "/captain-falcon";
    break;
  case '/jigglypuff':
    name = "/jigglypuff";
    break;
  case '/ice-climbers':
    name = "/ice-climbers";
    break;
  case '/peach':
    name = "/peach";
    break;
  case '/pikachu':
    name = "/pikachu";
    break;
  case '/samus':
    name = "/samus";
    break;
  case '/doctor-mario':
    name = "/doctor-mario";
    break;
  case '/yoshi':
    name = "/yoshi";
    break;
  case '/luigi':
    name = "/luigi";
    break;
  case '/mario':
    name = "/mario";
    break;
  case '/link':
    name = "/link";
    break;
  case '/young-link':
    name = "/young-link";
    break;
  case '/donkey-kong':
    name = "/donkey-kong";
    break;
  case '/ganondorf':
    name = "/ganondorf";
    break;
  case '/roy':
    name = "/roy";
    break;
  case '/game-and-watch':
    name = "/game-and-watch";
    break;
  case '/mewtwo':
    name = "/mewtwo";
    break;
  case '/zelda':
    name = "/zelda";
    break;
  case '/ness':
    name = "/ness";
    break;
  case '/pichu':
    name = "/pichu";
    break;
  case '/bowser':
    name = "/bowser";
    break;
  case '/kirby':
    name = "/kirby";
    break;
  default:
    name = "/Sandbag"
    break;
}
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
