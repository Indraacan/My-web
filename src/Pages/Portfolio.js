import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import c from "../Pages/asset/c++.png";
import js from "../Pages/asset/js.png";
import phyton from "../Pages/asset/phyton.jpg";
import react from "../Pages/asset/react.png";
import nodejs from "../Pages/asset/nodejs.png";
import sql from "../Pages/asset/sql.png"
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="mb-4">
        <Container>
          <div className="portfolio m-5 pt-3 text-center">
            <h1>Ability</h1>
          </div>

          <Row className="mb-4">
            <Col>
              <div id="portfolio">
                <CardDeck>
                  <Card className="card">
                    <Card.Img variant="top" src={c} className="mx-auto d-block"/>
                    <Card.Body>
                     
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <Card.Img variant="top" src={js} className="mx-auto d-block" />
                    <Card.Body>
                     
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <Card.Img variant="top" src={phyton} className="mx-auto d-block"/>
                    <Card.Body>
                     
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </Col>
          </Row>

          <Row className="pb-4">
            <Col>
              <CardDeck>
                <Card className="card">
                  <Card.Img variant="top" src={react} className="mx-auto d-block" />
                  <Card.Body>
                    
                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Img variant="top" src={nodejs} className="mx-auto d-block" />
                  <Card.Body>

                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Img variant="top" src={sql} className="mx-auto d-block " />
                  <Card.Body>
                   
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Portfolio;