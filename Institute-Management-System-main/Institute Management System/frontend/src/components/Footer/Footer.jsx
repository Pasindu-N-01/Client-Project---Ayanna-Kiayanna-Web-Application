import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialFollow from "../../Social/SocialFollow";
import './footer.css'
const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
          Ayanna Kiyanna Copyright &copy; JAYPAR
          </Col>
          <Col className="text-center py-3">
            <div>
              <SocialFollow />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
