import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/charity.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Traveling salesman"
              description="I developped with my classmates a desktop application to solve the shortest path problem for gas stations trucks 
              using python and Google maps API.
              "
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CRM Plateform"
              description="I developped with my PFA team a relationship managment plateform , including a full ecommerce website and its 
              admin side, with interesting functionnalities in order to keep the client closely in touch"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pokemon Applcation"
              description="I developped a mobile application to fetch data from an API and list pokemons grouped by type and show details about
              each pokemon "
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>





          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
