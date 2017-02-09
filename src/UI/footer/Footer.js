import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="social">
              <iframe src="https://ghbtns.com/github-btn.html?user=anthonyamaral&repo=frame-data&type=star" frameBorder="0" scrolling="0" width="100" height="20px" />
              <iframe src="https://ghbtns.com/github-btn.html?user=anthonyamaral&repo=frame-data&type=fork" frameBorder="0" scrolling="0" width="100" height="20px" />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
