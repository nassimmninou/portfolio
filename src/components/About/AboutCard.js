import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nassim Mninou </span>
            from <span className="purple"> CASABLANCA, Morocco.</span>
            <br />I am an IT engineering student at ENSAJ (2ite)
            <br />
            <br />
            Apart from programing, in my free time i like to !
          </p>
          <ul>
            <li className="about-activity">
              <ImCircleRight /> Play Guitar
            </li>
            <li className="about-activity">
              <ImCircleRight /> Read books
            </li>
            <li className="about-activity">
              <ImCircleRight /> Travel
            </li>
          </ul>

          <p style={{ color: "#4c596c" }}>
            "Make it work, make it right, make it fast."{" "}
          </p>
          <footer className="blockquote-footer">Nassim MNINOU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
