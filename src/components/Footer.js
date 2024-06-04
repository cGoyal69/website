import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/img3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import React from "react";
import { useState } from "react";

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return `${year}`;
}

export const Footer = () => {
  
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/chiraggoyal96/" target="blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/cGoyal69" target="blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/_chirag2004/" target="blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright {currentDate}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
