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

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Fox',
          to: '/fox'
        },
        {
          name: 'Falco',
          to: '/falco'
        },
        {
          name: 'Shiek',
          to: '/shiek'
        },
        {
          name: 'Marth',
          to: '/marth'
        },
        {
          name: 'Captain Falcon',
          to: '/captain-falcon'
        },
        {
          name: 'Jigglypuff',
          to: '/jigglypuff'
        },
        {
          name: 'Ice Climbers',
          to: '/ice-climbers'
        },

        {
          name: 'Peach',
          to: '/peach'
        },
        {
          name: 'Pikachu',
          to: '/pikachu'
        },
        {
          name: 'Samus',
          to: '/samus'
        },
        {
          name: 'Doctor Mario',
          to: '/doctor-mario'
        },
        {
          name: 'Yoshi',
          to: '/yoshi'
        },
        {
          name: 'Luigi',
          to: '/luigi'
        },
        {
          name: 'Mario',
          to: '/mario'
        },
        {
          name: 'Link',
          to: '/link'
        },
        {
          name: 'Young Link',
          to: '/young-link'
        },
        {
          name: 'Donkey Kong',
          to: '/donkey-kong'
        },
        {
          name: 'Ganondorf',
          to: '/ganondorf'
        },
        {
          name: 'Roy',
          to: '/roy'
        },
        {
          name: 'Game & Watch',
          to: '/game-and-watch'
        },
        {
          name: 'Mewtwo',
          to: '/mewtwo'
        },
        {
          name: 'Zelda',
          to: '/zelda'
        },
        {
          name: 'Ness',
          to: '/ness'
        },
        {
          name: 'Pichu',
          to: '/pichu'
        },
        {
          name: 'Bowser',
          to: '/bowser'
        },
        {
          name: 'Kirby',
          to: '/kirby'
        }

      ]
    };
  }
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
                {this.state.navItems.map((item, i) => {
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
