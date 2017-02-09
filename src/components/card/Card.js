import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBlock, Col } from 'reactstrap';


const character = " Fox";

const Example = (props) => {
  return (
    <Col lg={props.column} md="12" sm="12">
      <Card>
        <CardBlock>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.frames}</CardSubtitle>
        </CardBlock>
        <CardImg width="100%" src={props.image} alt={props.name + character} />
        <CardBlock>
          <CardText>{props.description}</CardText>
        </CardBlock>
      </Card>
    </Col>
  );
};

export default Example;
