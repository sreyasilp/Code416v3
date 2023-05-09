import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Row className="p-4">
        <Col md="4">
          <h5>Profile</h5>
        </Col>
        <Col md="4">
          <h5>Nsme</h5>
        </Col>
        <Col md="4">
          <h5>Contact Us</h5>
        </Col>
      </Row>
      <Row className="bg-secondary p-2">
        <Col className="text-center">
            <h4>hello prfile</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
