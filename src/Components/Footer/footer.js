import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <div className="m-5 pt-5">
      <Container>
        <div className="footer mx-5">
          <Row className=" fot-conts mx-5 mb-5">
            <Col className=" fot-cont mx-5 px-5">
              <h3>Contact</h3>
              <p>
                +91 8330859663
                <br />
                krishnaprasadr666@gmail.com
              </p>
            </Col>
            <Col className=" fot-cont ">
              <div className="mx-5">
                <h3>Locate us</h3>
                <a
                  href="https://www.google.co.in/maps/place/Mar+Athanasius+College+of+Engineering+-+Kothamangalam/@10.0540222,76.6169947,17z/data=!3m1!4b1!4m5!3m4!1s0x3b07e6154a2133e5:0x2c26b2d532bb30ea!8m2!3d10.0540169!4d76.6191834"
                  target="nill"
                >
                  Mar Athanasius College of engineering
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mx-3 cpy-ryt">
            © Copyright Cybosium. All Rights Reserved Designed by Web Team IEEE
            MACE SB
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
