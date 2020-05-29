import React, { Component } from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import Cv from "../Pages/asset/CV1.jpg";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="mt-4 mb-4" id="getCV">
            <img src={Cv} alt="CV" style={{ width: "100%" }} />
          </div>
          <Row>
            <Col className="bordered border-right">
              <Row>
                <Col sm={12}>
                  <h2 className="contact-1 pt-4 mb-4">Contact Me</h2>
                </Col>
                <Col>
                  <div id="contact">
                    <ListGroup variant="flush">
                      <ListGroup.Item>Phone</ListGroup.Item>
                      <ListGroup.Item>Email</ListGroup.Item>
                      <ListGroup.Item>Website</ListGroup.Item>
                      <ListGroup.Item>Address</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>

                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item>+6285132405154</ListGroup.Item>
                    <ListGroup.Item>me@indrakawasan.com</ListGroup.Item>
                    <ListGroup.Item>indrakawasan.com</ListGroup.Item>
                    <ListGroup.Item>Ruang Kreasi</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>

            <Col>
              <h2 className="contact-2 m-4">Suggestion</h2>
              <Form 
              action="https://formspree.io/mdowebpe"
              method="POST"
              >
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Name" name="name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" name="_replyto" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="email"
                    placeholder="Message"
                    name="message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Contact;