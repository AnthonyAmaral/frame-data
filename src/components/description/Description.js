import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
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
          Credit and special thanks to Stratocasters Hitbox System on SmashBoards as well as everyone else who provided the necessary data for this project.
        </p>
        <p>
          <a href="https://smashboards.com/threads/stratocasters-hitbox-system-new-download-link.283973/" target="_blank">
            <Button color="primary">View SmashBoards Post</Button>
          </a>
        </p>

      </Jumbotron>
    </div>
  );
};

export default Example;
