import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./speaker.css";
function Speakers() {
  return (
    <div className="m-5 pt-5">
      <Container>
        <div className="mt-5 speak-title">
          <h1>Our Speakers</h1>
        </div>
        <Row>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
        </Row>
        <Row>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
          <Col className="box m-5">
            <h3>kp</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Speakers;
