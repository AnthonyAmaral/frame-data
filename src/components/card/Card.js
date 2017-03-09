import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBlock, Col } from 'reactstrap';



const Example = (props) => {
  return (
    <Col lg="4" md="6" sm="12">
      <Card>
        <CardBlock>
          <CardTitle className="lead">{props.name}</CardTitle>
          <CardSubtitle>{props.frames}</CardSubtitle>
        </CardBlock>
        <CardImg width="100%" src={props.image} alt={props.name} />
        <CardBlock>
        <CardSubtitle>{props.frames}</CardSubtitle>
          <CardText>{props.description}</CardText>
        </CardBlock>
      </Card>
    </Col>
  );
};

export default Example;
