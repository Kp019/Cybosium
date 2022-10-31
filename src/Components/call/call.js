import React from "react";
import "./call.css";
import { Col, Container, Row, Button } from "react-bootstrap";

function Call() {
  return (
    <div className="pt-5 call-f">
      <h2 className="call-title">Be a part of us</h2>
      <Container>
        <div className="mt-5 call-btns">
          <Row>
            <Col>
              <Button className="call-btn m-3">Call for Robots</Button>
            </Col>
            <Col>
              <Button className="call-btn m-3">Be our Sponsor</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Call;
