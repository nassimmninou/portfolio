import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import homeLogo from "../../Assets/nassim.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const imageAnimation = useSpring({
    from: { transform: "translateY(-100px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <Col md={7} className="home-header"> <h1 style={{ paddingBottom: 15 }} className="heading"> {" "} <span className="wave" role="img" aria-labelledby="wave">  </span> </h1> <h1 className="heading-name"> I'M <strong className="main-name">  Nassim Mninou</strong> </h1> <div style={{ padding: 50, textAlign: "left" }}> <Type /> </div> </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <animated.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  ...imageAnimation,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
