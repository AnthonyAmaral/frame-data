import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import UINav from '../nav/Nav';
import Footer from '../footer/Footer';

const ComponentLink = (props) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active">
        {props.item.name}
      </NavLink>
    </NavItem>
  );
};

const propTypes = {
  children: React.PropTypes.node
};

var nav = [
  {
    name: 'Fox',
    to: '/character/fox'
  },
  {
    name: 'Falco',
    to: '/character/falco'
  },
  {
    name: 'Shiek',
    to: '/character/shiek'
  },
  {
    name: 'Marth',
    to: '/character/marth'
  },
  {
    name: 'Captain Falcon',
    to: '/character/captain-falcon'
  },
  {
    name: 'Jigglypuff',
    to: '/character/jigglypuff'
  },
  {
    name: 'Ice Climbers',
    to: '/character/ice-climbers'
  },
  {
    name: 'Peach',
    to: '/character/peach'
  },
  {
    name: 'Pikachu',
    to: '/character/pikachu'
  },
  {
    name: 'Samus',
    to: '/character/samus'
  },
  {
    name: 'Doctor Mario',
    to: '/character/doctor-mario'
  },
  {
    name: 'Yoshi',
    to: '/character/yoshi'
  },
  {
    name: 'Luigi',
    to: '/character/luigi'
  },
  {
    name: 'Mario',
    to: '/character/mario'
  },
  {
    name: 'Link',
    to: '/character/link'
  },
  {
    name: 'Young Link',
    to: '/character/young-link'
  },
  {
    name: 'Donkey Kong',
    to: '/character/donkey-kong'
  },
  {
    name: 'Ganondorf',
    to: '/character/ganondorf'
  },
  {
    name: 'Roy',
    to: '/character/roy'
  },
  {
    name: 'Game & Watch',
    to: '/character/game-and-watch'
  },
  {
    name: 'Mewtwo',
    to: '/character/mewtwo'
  },
  {
    name: 'Zelda',
    to: '/character/zelda'
  },
  {
    name: 'Ness',
    to: '/character/ness'
  },
  {
    name: 'Pichu',
    to: '/character/pichu'
  },
  {
    name: 'Bowser',
    to: '/character/bowser'
  },
  {
    name: 'Kirby',
    to: '/character/kirby'
  }
];

class Components extends React.Component {

  render() {
    return (
      <div>
      <UINav />
      <Container className="content">
        <Row>
          <Col lg={{ size: 2 }} md={{ size: 3 }} sm={{ size: 3 }}>
            <div className="docs-sidebar mb-2">
              <h5 className="sidenav-label">Characters</h5>
              <Nav className="flex-column">
                {nav.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
              </Nav>
            </div>
          </Col>
          <Col lg={{ size: 10}} md={{ size: 9}} sm={{ size: 9}}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
      <Footer />
      </div>
    );
  }
}
Components.propTypes = propTypes;
export default Components;
