import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./events.css";
function Events() {
  return (
    <div>
      <Container>
        <div className="m-5 pt-5">
          <h1 className="mt-5 e-title">Events</h1>
          <div className="content">
            <Row className="mt-5 pt-3">
              <Col>
                <div className="e-content">
                  <h3 className="e-cont">
                    Aerial Robotics and Unmanned Aerial Vehicles
                  </h3>
                </div>
              </Col>
              <Col>
                <div className="e-content">
                  <h3 className="e-cont">
                    Autonomous Ground Vehicles and Intelligent Transportation
                    Systems
                  </h3>
                </div>
              </Col>
              <Col>
                <div className="e-content">
                  <h3 className="e-cont">
                    Energy, Environment, and Safety Issues in Robotics and
                    Automation
                  </h3>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Events;
