import React from "react";
import { Container, Row, Col,Accordion } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/coding.png";
import Toolstack from "./Toolstack";

function About() {
  const imageAnimation = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { duration: 800 },
  });

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">am I </strong> ?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <animated.img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={imageAnimation}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Tools i <strong className="purple">Program </strong>with
        </h1>

        <Techstack />

        <h1 className="project-heading">
          My<strong className="purple"> School career</strong>
        </h1>
        <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0">
    <Accordion.Header className="bg-danger text-white">ENSAJ (Currently)</Accordion.Header>
        <Accordion.Body>
        After completing my Baccalaureate degree, I joined Ensaj (École Nationale des Sciences Appliquées d'El Jadida). I successfully completed its integrated preparatory classes and then chose the IT Engineering branch (2ite). Currently, I am in my third year of studies.
         Although I haven't finished my educational journey yet, I am determined to successfully complete it .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lycée El FARABI (2018-2020)</Accordion.Header>
        <Accordion.Body>

        During my high school years, I attended Lycee El Farabi. I spent three memorable years there, acquiring knowledge and skills in various subjects. It was a formative period in my educational journey, laying the foundation for my future academic pursuits.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
