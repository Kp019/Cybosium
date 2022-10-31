import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about.css";

function About() {
  return (
    <div className="m-5 mx-3">
      <Container className="mt-5 about">
        <div className="a-content">
          <h1 className="pt-5 a-title">ABOUT</h1>
          <div className=" mt-3">
            <Row>
              <Col>
                <div className="a-cont pt-5">
                  <h2 className="tit">About Cybosium</h2>
                  <p className="cont">
                    Cybosium is a mutual initiative of IEEE RAS SBC MACE and
                    IEEE MACE SB. The seasonal school is organized in
                    collaboration with companies and organizations in the
                    industry. The main goal of Cybosium is to help students grow
                    technically in the field of robotics, with a primary focus
                    on the courses, the seasonal school shall also comprise
                    other events, both technical and non-technical, to be
                    conducted online, and offline, or hybrid. The event will
                    have talk sessions for both students and young
                    professionals, workshops, panel discussions, a student
                    project expo, a student paper presentation, an industrial
                    product expo, an industrial visit to Maker Village,
                    networking sessions, cultural events, and giveaways.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="a-cont pt-5">
                  <h2 className="tit">About MACE</h2>
                  <p className="cont">
                    Mar Athanasius College of Engineering pioneered engineering
                    education in central Kerala in 1961. Managed by Mar
                    Athanasius College Association, Aided by the Government of
                    Kerala, the college was first in Asia under Christian
                    Management. The college is affiliated to APJ Abdul Kalam
                    Technological University. MACE, as it is popularly known,
                    has grown by leaps and bounds since. It now has six
                    full-fledged departments apart from the two auxiliary
                    departments of Mathematics and Science and Humanities.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="a-cont pt-5">
                  <h2 className="tit">About IEEE MACE SB</h2>
                  <p className="cont">
                    IEEE Student Branch MACE is one of the largest student
                    branches across the globe, with over 500 student members.
                    Every year numerous events are conducted by IEEE MACE SB to
                    enhance our students' skills and equip them with the rapidly
                    changing industry. IEEE MACE SB offers a Hardware Laboratory
                    for the members to develop technical projects. We regularly
                    conduct training sessions, talks, professional awareness
                    sessions, hackathons, industrial visits, debates, quizzes,
                    and workshops.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="a-cont pt-5">
                  <h2 className="tit">About IEEE RAS SBC MACE</h2>
                  <p className="cont">
                    The IEEE Robotics and Automation Society’s objectives are
                    scientific, literary and educational in character. The
                    Society strives for the advancement of the theory and
                    practice of robotics and automation engineering and science
                    and of the allied arts and sciences trenbolone-acetate, and
                    for the maintenance of high professional standards among its
                    members, all in consonance with the Constitution and Bylaws
                    of the IEEE and with special attention to such aims within
                    the Field of Interest of the Society.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="a-cont pt-5">
                  <h2 className="tit">About IEEE</h2>
                  <p className="cont">
                    IEEE is the world's largest technical professional
                    organization dedicated to advancing technology for the
                    benefit of humanity. IEEE and its members inspire a global
                    community through its highly cited publications,
                    conferences, technology standards, and professional and
                    educational activities.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
