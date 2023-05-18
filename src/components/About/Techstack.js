import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiLaravel,
  DiPython,
  DiGit,
} from "react-icons/di";
import { ImFontSize } from "react-icons/im";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
        <br>
        </br>
        <p style={{  fontSize: "small" }}><i>Laravel</i></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><br></br>
        <p style={{  fontSize: "small" }}><i>Javascript</i></p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br></br>

        <p style={{  fontSize: "small" }}><i>NodeJs</i></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br></br>
        <p style={{  fontSize: "small" }}><i>React</i></p>

      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <br></br>
        <p style={{  fontSize: "small" }}><i>Python</i></p>
      </Col>

    </Row>
  );
}

export default Techstack;
