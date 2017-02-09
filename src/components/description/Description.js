import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">Melee Frames is an online collection of frame data for each character in Melee.</p>
        <hr className="my-2" />
        <p>To begin, click on a character from the side navigation.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
