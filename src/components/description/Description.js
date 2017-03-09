import React, { Component } from 'react';
import { Jumbotron, Button, Table, Collapse } from 'reactstrap';

class Description extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
    <div>
      <Jumbotron>
        <h1 className="display-5">Welcome!</h1>
        <p className="lead">Melee Frames is an online collection of frame data for each character in Melee.</p>
        <hr className="my-2" />
        <p>To begin, click on a character from the side navigation.</p>
        <br/><br/>
        <h4>About</h4>
        <p>
          This project was made as an exercise for me to get more experience learning React.js.
          I wanted to compile all of the available frame data for each character in Super Smash Bros. Melee into one clean interface.
          Over time, I will be adding new features to expand on this project. Enjoy!
        </p>
        <p className="bold">
          Credit and special thanks to <a href="https://smashboards.com/threads/stratocasters-hitbox-system-new-download-link.283973/" target="_blank">Stratocasters Hitbox System</a> on SmashBoards as well as everyone else who provided the necessary data for this project.
        </p>
        <div>
         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle Credits</Button>
         <Collapse isOpen={this.state.collapse}>
          <Table>
            <tbody>
              <tr>
                <td>
                  <img role="presentation" src="images/icons/fox.png"/>
                  <img role="presentation" src="images/icons/falco.png"/>
                  <img role="presentation" src="images/icons/shiek.png"/>
                  <img role="presentation" src="images/icons/marth.png"/>
                  <img role="presentation" src="images/icons/captain-falcon.png"/>
                  <img role="presentation" src="images/icons/ice-climbers.png"/>
                  <img role="presentation" src="images/icons/pikachu.png"/>
                  <img role="presentation" src="images/icons/pichu.png"/>
                  <img role="presentation" src="images/icons/doctor-mario.png"/>
                  <img role="presentation" src="images/icons/mario.png"/>
                  <img role="presentation" src="images/icons/young-link.png"/>
                  <img role="presentation" src="images/icons/donkey-kong.png"/>
                  <img role="presentation" src="images/icons/mewtwo.png"/>
                  <img role="presentation" src="images/icons/ness.png"/>
                  <img role="presentation" src="images/icons/bowser.png"/>
                </td>
                <td>Stratocaster</td>
              </tr>
              <tr>
                <td><img role="presentation" src="images/icons/jigglypuff.png"/></td>
                <td>Massive</td>
              </tr>
              <tr>
                <td>
                  <img role="presentation" src="images/icons/peach.png"/>
                  <img role="presentation" src="images/icons/ganondorf.png"/>
                </td>
                <td>Emma Watsons Boyfriend</td>
              </tr>
              <tr>
                <td><img role="presentation" src="images/icons/samus.png"/></td>
                <td>knihT</td>
              </tr>
              <tr>
                <td>
                  <img role="presentation" src="images/icons/yoshi.png"/>
                  <img role="presentation" src="images/icons/luigi.png"/>
                  <img role="presentation" src="images/icons/link.png"/>
                  <img role="presentation" src="images/icons/zelda.png"/>
                </td>
                <td>mastermoo420</td>
              </tr>
              <tr>
                <td><img role="presentation" src="images/icons/roy.png"/></td>
                <td>Aizen</td>
              </tr>
              <tr>
                <td><img role="presentation" src="images/icons/game-and-watch.png"/></td>
                <td>Dre the Ace</td>
              </tr>
              <tr>
                <td><img role="presentation" src="images/icons/kirby.png"/></td>
                <td>Shoopman/Stratocaster</td>
              </tr>

            </tbody>
          </Table>
        </Collapse>
      </div>

      </Jumbotron>
    </div>
    );
  }
}

export default Description;
